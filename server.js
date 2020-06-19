var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var fs = require('fs');
var cL = require('./ATS_Server/cardlibrary');
var initialGameScript = require('./ATS_Server/gameSetupScript');
var cF = require('./ATS_Server/cardFunctions');


var playerDatabase = [{username:"Jeremy",userpassword:"PASSWORD123",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())},
			  {username:"Seb",userpassword:"PASSWORD456",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())},
			  {username:"Sam",userpassword:"PASSWORD000",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())}]

/*
var playerDatabase = [{username:"Jeremy",userpassword:"PASSWORD123",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())},
			  {username:"Seb",userpassword:"PASSWORD456",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())},
			  {username:"Logan",userpassword:"PASSWORD789",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())},
			  {username:"Sam",userpassword:"PASSWORD000",playerKey:(Math.floor(Math.random()*1000000000000) + (new Date).getTime())}]

/* GAME SCRIPTS */
var players = playerDatabase.map(function(item){return {username:item.username, playerKey:item.playerKey}});
var noPlayers = players.length;
//console.log(players);
//console.log(noPlayers);
var handSize = 6;
var objectives = false;
var playerAbilities = false;
var bannedCards = ["B0S_G_SoAC","B0S_G_GRC","B0S_Y_MP"];
var playerObjs = initialGameScript.initiate(noPlayers,objectives,playerAbilities,players);
var gameDeck = initialGameScript.generateDeck(noPlayers,bannedCards);
var playerSubmitTracker = [];
var playerSubmitActions = [];
var discardPile = [];
var currentCredits = [0,0,0,0,0,0];
initialHand();
newTurnCreditsMessage();
/* END GAME SCRIPTS */

var app = express();

app.use(express.static(__dirname + '/client_scripts'));
app.use(express.static(__dirname + '/client_styles'));
app.use('/ATS_Images',express.static(__dirname + '/ATS_Images'));
app.use(cookieParser());
app.use(session({secret: "FDSAJFENVRTIVJ#EOF@#$(#@$TEJRGREGJF"}));
app.use(bodyParser.urlencoded({ extended: false }))

var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(process.env.PORT || 8080, function(){
	console.log("Started Among the Stars Server at " + (new Date()).toString())
});

io.on('connection', (socket) => {
  console.log('User Connected');
  loginCheckFunction(socket);
  socket.join('ATS_Game_Room');
  socket.on('pageLoader',function(data){
		  try{
//			  console.log(loginCheckFunction(socket))
			  if(loginCheckFunction(socket)){
				  if(playerSubmitTracker.includes(data.playerKey)){
					for(var i=0; i<playerObjs.length; i++){
						if(playerObjs[i].playerData.playerKey == data.playerKey){
							x = {...playerObjs[i]};
							x.playerHand = [];
//							console.log("1")
							socket.emit('pageLoader',JSON.parse(JSON.stringify(x)));  
						}
					}
				  } else {
					for(var i=0; i<playerObjs.length; i++){
//						console.log(playerObjs[i].playerData.playerKey)
//						console.log(data)
						if(playerObjs[i].playerData.playerKey == data.playerKey && data.playerKey != undefined){
//							console.log("2");
							socket.emit('pageLoader',playerObjs[i]);  
							break;
						}
					}		  
				  }
			  }
		  } catch(e){
			  console.log('Something went wrong processing turn data');
			  console.log(e);
		  }
	  });
  
    socket.on("submitTurnData",(data) =>{
//		console.log("A");
//		console.log(data);
	   /* Data Object:
	  {
		playerKey : sdfwef,
		mode : 1,2,3,4,5,6,7,
		cardFromHand : '',
		updatedGrid : [[cardIndex,Card],[cardIndex,Card],[cardIndex,Card]],
		extraData :[]		  
	  }
	  */
	  try{
//		  		console.log("B");
		  if (loginCheckFunction(socket)){
//			 console.log("C");
			if(processUserTurn(data)){
//						console.log("D1");
				processPlayerActions()				
				passData()
			}
		  }	
	  } catch(e){
		  console.log('Something went wrong processing turn data');
		  console.log(e);
	  }
	});
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });  
});


app.route('/reset')
	.get(function(req,res){
		if(req.session.loginStatus){
			console.log("Game Reset!");
			players = playerDatabase.map(function(item){return {username:item.username, playerKey:item.playerKey}});
			noPlayers = players.length;
			handSize = 6;
			objectives = false;
			playerAbilities = false;
			bannedCards = ["B0S_G_SoAC","B0S_G_GRC","B0S_Y_MP"];
			playerObjs = initialGameScript.initiate(noPlayers,objectives,playerAbilities,players);
			gameDeck = initialGameScript.generateDeck(noPlayers,bannedCards);
			playerSubmitTracker = [];
			playerSubmitActions = [];
			discardPile = [];
			currentCredits = [0,0,0,0,0,0];
			initialHand();
			newTurnCreditsMessage();
			io.to('ATS_Game_Room').emit('redirect','');
			res.redirect('..');
		}
		res.end();
//		res.sendFile(__dirname + 'index.html');
	});

app.route('*')
	.get(function(req,res){
		if(req.session.loginStatus){
//			console.log("This HTTP session id is " + req.session.id);
			res.write('<script>var playerKey ='+req.session.playerKey+'</script>')
			fs.readFile(('./index.html'),function(err,data){res.write(data);res.end()});
		} else {
			res.sendFile(__dirname + '/login.html');
		}
	})	
	.post(function(req,res){
		var result = false;
		playerDatabase.forEach(function(item){
			if(item.username == req.body.username && item.userpassword == req.body.userpassword){
				result = true;
				req.session.playerKey = item.playerKey
			}
		})
		if(result){
			console.log(req.body.username + " has logged in");
			req.session.loginStatus = true;
			req.session.username = req.body.username;	
//			console.log("This HTTP session id is " + req.session.id);
			res.redirect(req.protocol + '://' + req.get('host'));
		} else {
			console.log("Login Failure");
			res.sendFile(__dirname + '/login.html');			
		}
	})
	

	
function loginCheckFunction(socket){
	var result = true;
	socket.on("loginCheck",(data) =>{
//	  console.log(result)
	  playerDatabase.forEach(function(item){
		  if(item.playerKey == data){
			  result = false;
			}
		})
//		console.log(result)
		if(result){
		  console.log("Sending for redirect")
		  var destination = '';
		  socket.emit('redirect', destination);
		  result = false;
		} else {
//		  console.log("Passed login check")
		  playerDatabase.forEach(function(item){
//			  console.log(item.playerKey == data)
			  if(item.playerKey == data){
				  item.socketKey = socket.id;
				  result = true;
//				  console.log(result)
				}
			})		
		}
  })
  return result;
}

function processUserTurn(data){
//	console.log("D")
	if(! playerSubmitTracker.includes(data.playerKey)){
//		console.log("E")
		for(var i = 0; i<playerDatabase.length; i++){
			if(playerDatabase[i].playerKey == data.playerKey){
//				console.log("F")
				playerSubmitTracker.push(data.playerKey);
					for(var i = 0; i<playerObjs.length; i++){
						if(playerObjs[i].playerData.playerKey == data.playerKey){
//							console.log("G")
//							console.log(data.cardFromHand)
//							console.log(playerObjs[i].playerHand)
							if(playerObjs[i].playerHand.includes(data.cardFromHand) || data.cardFromHand == "B0R_X_PR2"){
//								console.log("H")
//								console.log(playerObjs[i].playerData.playerName);
//								console.log(playerObjs[i].playerHand);
//								console.log(data.cardFromHand);
								//Remove played card from player hand
								var hand = playerObjs[i].playerHand;
								hand.splice(hand.indexOf(data.cardFromHand),1);
								playerObjs[i].updatePlayerHand(hand);
								playerObjs[i].updateGrid(data.updatedGrid);
							}
							break;
						}
					}
				playerSubmitActions.push(data);
				break;
			}
		}
	}
	if (playerSubmitTracker.length == noPlayers){
		playerSubmitTracker = [];
		return true;
	} else {
		return false;
	}
}


function processPlayerActions(){
	var currentScores = [];
	var playerHandSwitchArray = [];
	for (var j = 0; j<playerObjs.length; j++){
		// Regenerate Other Player Grids
		currentScores.push([playerObjs[0].playerData.curr_score,playerObjs[0].playerData.eg_score]);
		playerObjs[j].discardPile.cards = discardPile;
		playerObjs[j].otherPlayersData.otherPlayers = [];
//		console.log("Updating...")
//		console.log(playerObjs[j].playerData.playerName)
//		console.log(playerObjs[j].playerData.playerNo);
//		console.log('.....')
		for(var k = j + 1 ; k< j + playerObjs.length ; k++){
			currentPlayerObj = playerObjs[(k % playerObjs.length + playerObjs.length) % playerObjs.length];
//			console.log(currentPlayerObj.playerData.playerName);
//			console.log(currentPlayerObj.playerData.playerNo);
			playerObjs[j].addOtherPlayer(currentPlayerObj.playerData.playerNo,currentPlayerObj.playerData.playerName,currentPlayerObj.playerData.currency,currentPlayerObj.playerData.playerNo.abilities,currentPlayerObj.playerData.player_race,currentPlayerObj.playerData.curr_score,currentPlayerObj.playerData.eg_score,currentPlayerObj.playerStationArray.grid,currentPlayerObj.playerStationArray.parameters.x);
		}
	}
	for(var i = 0; i<playerSubmitActions.length; i++){
		for (var j = 0; j<playerObjs.length; j++){
			if(playerSubmitActions[i].playerKey == playerObjs[j].playerData.playerKey){
				if (playerSubmitActions[i].mode == 2){
					// Discard for money
					if(playerSubmitActions[i].cardFromHand[2] != "R"){
						playerObjs[j].currencyChange(playerObjs[j].playerData.player_currency_discard_value);
						discardPile.push(playerSubmitActions[i].cardFromHand);
						var actionedCard = cL.getCardObj(playerSubmitActions[i].cardFromHand);
						for(var k = 0; k<playerObjs.length; k++){
							playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> discards <span class='logCard' data-cardid='"+actionedCard.cardId+"'>" + actionedCard.cardTitle +"</span> for " + playerObjs[j].playerData.player_currency_discard_value + " credits");
						}
					} else {
						console.log("Someone attempted to discard a reactor - Illegal!");
					}
				} else if (playerSubmitActions[i].mode == 3) {
					// Discard for power reactor
					if(playerSubmitActions[i].cardFromHand[2] != "R"){
						playerObjs[j].currencyChange(-1);					
						discardPile.push(playerSubmitActions[i].cardFromHand);
						var actionedCard = cL.getCardObj(playerSubmitActions[i].cardFromHand);
						for(var k = 0; k<playerObjs.length; k++){
							playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> discards <span class='logCard' data-cardid='"+actionedCard.cardId+"'>"+ actionedCard.cardTitle +"</span> and pays 1 credit to place a <span class='logCard' data-cardid='B0R_X_PR2'>Power Reactor</span> on their station");
						}					
					} else {
						console.log("Someone attempted to discard a reactor - Illegal!");
					}	
				} else if (playerSubmitActions[i].mode == 4) {
					// Shield Generator Logic
					playerObjs[j].currencyChange(-3);	
					playerObjs[j].currentPointsChange(8);
					for(var k = 0; k<playerObjs.length; k++){
						playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> plays <span class='logCard' data-cardid='B0B_R_SG'>Shield Generator</span> for 1 power and 3 credits, paying an additional 2 power for an additional <span class='posScoreDelta'>+4VP</span>");
					}					
				} else if (playerSubmitActions[i].mode == 5) {
					// Shield Generator Logic
					playerObjs[j].currencyChange(-3);					
					playerObjs[j].currentPointsChange(6);
					for(var k = 0; k<playerObjs.length; k++){
						playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> plays <span class='logCard' data-cardid='B0B_R_SG'>Shield Generator</span> for 1 power and 3 credits, paying an additional 1 power for an additional <span class='posScoreDelta'>+2VP</span>");
					}	
				} else if (playerSubmitActions[i].mode == 6){
					// Business office select
					var boChanger = playerSubmitActions[i].extraData[0];
					var boChangerPoints = parseInt(Math.floor(playerSubmitActions[i].extraData[0]/2));
					if(boChangerPoints){
						if(boChangerPoints > 3){
							boChangerPoints = 3;
						}
						playerObjs[j].currencyChange((-1)*boChanger);
						playerObjs[j].businessOfficeCurrency(boChanger);
						playerObjs[j].currentPointsChange(boChangerPoints);
					}
					playerObjs[j].currentPointsChange(1);
					playerObjs[j].currencyChange(-1);
					for(var k = 0; k<playerObjs.length; k++){
						playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> plays <span class='logCard' data-cardid='B0S_Y_BO'>Business Offices</span> for 1 credit, paying an additional "+boChanger+" credits for an additional <span class='posScoreDelta'>+"+boChangerPoints+"VP</span>");
					}					
				} else if (playerSubmitActions[i].mode == 7){
					// Embassy office select;
					var selectedEOPlayer = '';
					var selectedEOPlayerColor = '';
					for(var m = 0; m < playerObjs.length; m++){
						if(playerObjs[m].playerData.playerNo == playerSubmitActions[i].extraData[0]){
							playerObjs[m].currentPointsChange(1);
							playerObjs[j].currentPointsChange(2);
							var selectedEOPlayer = playerObjs[m].playerData.playerName;
							var selectedEOPlayerColor = playerObjs[m].playerData.color;
							break;
						}
					}
					playerObjs[j].currencyChange(-2);
					playerObjs[j].currentPointsChange(2);
					for(var k = 0; k<playerObjs.length; k++){
						playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> plays <span class='logCard' data-cardid='B0B_G_EO'>Embassy Offices</span> for 2 credit to gain for +4VP, and gives <span style='color:"+selectedEOPlayerColor+"'>"+selectedEOPlayer+"</span> +1VP");
					}
				} else {
					var actionedCard = cL.getCardObj(playerSubmitActions[i].cardFromHand);
					for(var k = 0; k<playerObjs.length; k++){
						if(actionedCard.cardPowerCost == 0){
							playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> places <span class='logCard' data-cardid='"+actionedCard.cardId+"'>" + actionedCard.cardTitle +"</span> on their station for " + actionedCard.cardCreditCost + " credits");
						}else{
							playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> places <span class='logCard' data-cardid='"+actionedCard.cardId+"'>" + actionedCard.cardTitle +"</span> on their station for " + actionedCard.cardCreditCost + " credits and "+actionedCard.cardPowerCost+" power");
						}
					}
					cF.placementScoringCost(playerObjs,j,playerSubmitActions[i]);
					if(playerObjs[j].playerStationArray.parameters.infinite){
						playerObjs[j].gridResizer();
					}
				}
			}
		}
	}
//	for(var k = 0; k<playerObjs.length; k++){
//		playerObjs[k].updateEGScoring();
//	}

	currentCredits = [];
	for (var j = 0; j<playerObjs.length; j++){
		currentCredits.push(playerObjs[j].playerData.currency);
		playerHandSwitchArray.push(playerObjs[j].playerHand);
		playerObjs[j].incrementTurn();
	}

	for(var k = 0; k<playerObjs.length; k++){
		var scoreDelta = (playerObjs[k].playerData.curr_score + playerObjs[k].playerData.eg_score) - (currentScores[k][0] + currentScores[k][1]);
		for(var j = 0; j<playerObjs.length; j++){
			if(scoreDelta >= 0){
				playerObjs[j].addGameLogEntry("<span style='color:"+playerObjs[k].playerData.color+"'>"+playerObjs[k].playerData.playerName+"'s</span> score increases by <span class='posScoreDelta'>+"+scoreDelta+"VP</span> this round");
			} else {
				playerObjs[j].addGameLogEntry("<span style='color:"+playerObjs[k].playerData.color+"'>"+playerObjs[k].playerData.playerName+"'s</span> score decreases by <span class='negScoreDelta'> "+scoreDelta+"VP</span> this round");		
			}
		}
	}


	for(var k = 0; k<playerObjs.length; k++){
		playerObjs[k].addGameLogTurnHeader()
	}	


	// Generate New Hands & Pass
	if (playerObjs[0].gameData.round == 1){
		initialHand();
		newTurnCreditsMessage()
		for (var j = 0; j<playerObjs.length; j++){
			playerObjs[j].addGameLogEntry("Hand pass order reversed");
		}
	} else if(playerObjs[0].gameData.turnOrder){
		var x = playerHandSwitchArray.shift();
		playerHandSwitchArray.push(x);
	} else {
		var x = playerHandSwitchArray.pop();
		playerHandSwitchArray.unshift(x);
	}
	if(playerObjs[0].gameData.round != 1){
		var passDirection = playerObjs[0].gameData.turnOrder ? 1 : -1;
		for (var j = 0; j<playerObjs.length; j++ && playerObjs[0].gameData.round != 1){
			var passIndex = ((j+passDirection) % playerObjs.length + playerObjs.length) % playerObjs.length;
			var passedPlayer = playerObjs[passIndex].playerData.playerName;
			var passedPlayerColour = playerObjs[passIndex].playerData.color;
			playerObjs[j].updatePlayerHand(playerHandSwitchArray[j],true,[passedPlayer,passedPlayerColour])
			for(var k = 0; k<playerObjs.length; k++){
				passIndex = ((k+passDirection) % playerObjs.length + playerObjs.length) % playerObjs.length;
				if(j==k){
					continue;
				} else {
					playerObjs[j].addGameLogEntry("<span style='color:"+playerObjs[k].playerData.color+"'>"+playerObjs[k].playerData.playerName+"</span> receives cards from " + "<span style='color:"+playerObjs[passIndex].playerData.color+"'>"+playerObjs[passIndex].playerData.playerName+"</span>");
				}
			}
		}
	}
	
	for (var j = 0; j<playerObjs.length; j++){
		// Regenerate Other Player Grids (now with correct scores and credit balances);
		playerObjs[j].otherPlayersData.otherPlayers = [];
		for(var k = j + 1 ; k< j + playerObjs.length ; k++){
			currentPlayerObj = playerObjs[(k % playerObjs.length + playerObjs.length) % playerObjs.length];
//			console.log(currentPlayerObj.playerData.playerName);
//			console.log(currentPlayerObj.playerData.playerNo);
			playerObjs[j].addOtherPlayer(currentPlayerObj.playerData.playerNo,currentPlayerObj.playerData.playerName,currentPlayerObj.playerData.currency,currentPlayerObj.playerData.playerNo.abilities,currentPlayerObj.playerData.player_race,currentPlayerObj.playerData.curr_score,currentPlayerObj.playerData.eg_score,currentPlayerObj.playerStationArray.grid,currentPlayerObj.playerStationArray.parameters.x);
		}
	}
	
	playerSubmitActions = [];
}

function passData(){
	for (var i = 0; i<playerObjs.length; i++){
		for (var j = 0; j<playerDatabase.length; j++){
			if(playerObjs[i].playerData.playerKey == playerDatabase[j].playerKey){
//				console.log("3");
				io.to(playerDatabase[j].socketKey).emit('pageLoader',playerObjs[i]);
			}
		}
	}
}

function initialHand(){
	for (var j = 0; j < playerObjs.length; j++){
	var hand = [];
	for(var i = 0; i<handSize; i++){
		hand.push(gameDeck.pop());
	}
	playerObjs[j].updatePlayerHand(hand,true);
	for(var k = 0; k<playerObjs.length; k++){
		if(j==k){
			continue;
		} else {
			playerObjs[j].addGameLogEntry("<span style='color:"+playerObjs[k].playerData.color+"'>"+playerObjs[k].playerData.playerName+"</span> receives "+hand.length+" cards from the deck");
		}
	}
}	
}

function newTurnCreditsMessage(){
	for(var k = 0; k<playerObjs.length; k++){
		for (var j = 0; j < playerObjs.length; j++){
			var updatedCredits = playerObjs[j].playerData.currency;
			var currencyDelta = updatedCredits - currentCredits[j];
			if(currencyDelta >= 0){
				playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> receives <span class='posScoreDelta'>+"+currencyDelta+"</span> credits");
			} else {
				playerObjs[k].addGameLogEntry("<span style='color:"+playerObjs[j].playerData.color+"'>"+playerObjs[j].playerData.playerName+"</span> loses <span class='negScoreDelta'>+"+currencyDelta+"</span> credits");
			}
		}
	}
}
