var cL = require('./cardlibrary');
var rF = require('./randomFunction');
var cF = require('./cardFunctions');

var races = ['zehuti','humareen','qualeen','minireen','gaarn','sheptas','sissaurian','vak'];
var playerColourStyles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];
var playerColourReactorStyles = [{ color: "red" }, { color: "blue" }, { color: "purple" }, { color: "green" }, { color: "yellow" }, { color: "" }];

class playerObj{
	constructor(noPlayers,objectives,raceAbilities,playerName,playerKey,playerRace,playerNo,gridInitial){
		var gridA = [];
		if(gridInitial[0] == false){
			for(var i = 0; i < (gridInitial[1] * gridInitial[2]); i++){
				gridA.push(false);
			} 
		} else {
			gridA = [false,false,false,false,
					(playerRace == "vak" && raceAbilities)?"B0R_X_VR2":"B0R_X_MR2",
					false,false,false,false]
		}
		this.gameData = {
				round: 1,
				turn: 1,
				turnOrder : false
				};
		this.playerData = {
				playerName: playerName,
				playerKey: playerKey,
				playerNo : playerNo,
				curr_score: 0,
				eg_score: 0,
				currency: 	(playerRace == "zehuti" && raceAbilities)?13:10,
				secret_obj: null,
				ability_available: null,
				abilities: raceAbilities,
				player_race: playerRace,
				color : playerColourStyles[playerNo - 1].color,
				main_reactor_color : playerColourReactorStyles[playerNo - 1],
				player_currency_turn_increase:	(playerRace == "zehuti" && raceAbilities)?13:10,
				player_currency_discard_value: 	((playerRace=="zehuti" && raceAbilities) ? 0:(playerRace == "sheptas" && raceAbilities)?4:3),
				boCard_credit_value : 0,
				};
		this.playerHand = [];		
		this.playerStationArray = {
				parameters: {
					x: gridInitial[0] ? 3 : gridInitial[1],
					infinite: gridInitial[0],
					grid_transform_string : "transform : translate(0px,0px) scale(1)"
				},
				grid: gridA
				};
		this.discardPile = {cards: []};
		this.otherPlayersData = {numberOther : noPlayers - 1,
								otherPlayers : []
								};
		this.gameLog = [];
		this.addGameLogTurnHeader()
		this.updateEGScoring();
	}
	
	addOtherPlayer(otherPlayerNumber,otherPlayerName,otherPlayerCurrency,otherPlayerAbility,otherPlayerRace,currentScore,eg_score,gridM=false,xVal=3){
		var gridP = [];
		var newOtherPlayerObj = new otherPlayerDataObject(otherPlayerNumber,otherPlayerName,otherPlayerCurrency,otherPlayerAbility,otherPlayerRace,currentScore,eg_score);
		newOtherPlayerObj.playerStationArray.parameters.infinite = this.playerStationArray.parameters.infinite;
		if(gridM){
			gridP = gridM;
			newOtherPlayerObj.playerStationArray.parameters.x = xVal;
		} else if (!this.playerStationArray.parameters.infinite){
			gridP = this.playerStationArray.grid;
			newOtherPlayerObj.playerStationArray.parameters.x = this.playerStationArray.parameters.x;			
		} else {
			gridP = [false,false,false,false,
					(otherPlayerRace == "vak" && this.playerData.abilities)?"B0R_X_VR2":"B0R_X_MR2",
					false,false,false,false]
					newOtherPlayerObj.playerStationArray.parameters.x = 3;
		}
		newOtherPlayerObj.playerStationArray.grid = gridP;
		this.otherPlayersData.otherPlayers.push(newOtherPlayerObj);
	}
	
	updateEGScoring(){
		this.playerData.eg_score = 0;
		var checkedGrid = this.playerStationArray.grid;
		var gridX = this.playerStationArray.parameters.x;

		for(var i = 0; i < checkedGrid.length; i++){
			if(checkedGrid[i]){
				var cardObj = cL.getCardObj(checkedGrid[i]);
				if(cardObj.cardEndGame){
					this.playerData.eg_score = this.playerData.eg_score + cF.cardEGScoring(cardObj.cardId,i,this.playerStationArray,this.otherPlayersData);					
				} else if (checkedGrid[i] == "B0R_X_VR0" || checkedGrid[i] == "B0R_X_MR0" || checkedGrid[i] == "B0R_X_ER0" || checkedGrid[i] == "B0R_X_PR0"){
					this.playerData.eg_score = this.playerData.eg_score + 1;
				}
			}
		}
		if(this.playerData.player_race == "sheptas" && this.playerData.abilities){
			if(this.playerData.currency <= 10){
				this.playerData.eg_score = this.playerData.eg_score + Math.floor(this.playerData.currency / 2);		
			} else {
				this.playerData.eg_score = this.playerData.eg_score + 5 + Math.floor((this.playerData.currency - 10) / 3)
			}
		}else{
			this.playerData.eg_score = this.playerData.eg_score + Math.floor(this.playerData.currency / 3);
		}
		
		if(this.playerData.player_race == "humareen" && this.playerData.abilities){
			//Humareen Ability - count the number of location types that you have the least, then gain that many in points + 1 (max 5VP)
			this.playerData.eg_score = this.playerData.eg_score;
		}
		
	}

	updatePlayerHand(cardArray,message = false,person = "deck"){
		this.playerHand = cardArray;
		
		if(message){
			var messageText = "<span style='color:"+this.playerData.color+"'>"+this.playerData.playerName+"</span> receives ";
			for(var i = 0; i<cardArray.length; i++){
				var cardObjIter = cL.getCardObj(cardArray[i])
				if (cardArray.length == 1){
					messageText = messageText + "<span class='logCard' data-cardid='"+cardObjIter.cardId+"'>" + cardObjIter.cardTitle + "</span>"
				} else if(i == cardArray.length - 1){
					messageText = messageText + "and <span class='logCard' data-cardid='"+cardObjIter.cardId+"'>" + cardObjIter.cardTitle + "</span>";
				} else {
					messageText = messageText + "<span class='logCard' data-cardid='"+cardObjIter.cardId+"'>" + cardObjIter.cardTitle + "</span>" + ", ";
				}
			}
			if (person == "deck"){
				messageText = messageText + " from the deck"
			} else {
				messageText = messageText + " " + "from <span style='color:"+person[1]+"'>" + person[0] + "</span>";
			}
			this.addGameLogEntry(messageText)
		}
	}
	
	addGameLogEntry(data){
		this.gameLog.push(data)
	}
	
	gridResizer(){
		var arrayObj = this.playerStationArray;
		if(leftCheck(arrayObj)){
			var arrLength = arrayObj.grid.length;
			var yval = arrLength / arrayObj.parameters.x;
			for(var i = 1; i <= yval; i++){
				arrayObj.grid.splice(arrLength - i * (arrayObj.parameters.x),0,false)
			}
			arrayObj.parameters.x = arrayObj.parameters.x + 1;
		}	
		if(rightCheck(arrayObj)){
			var arrLength = arrayObj.grid.length;
			var yval = arrLength / arrayObj.parameters.x;
			for(var i = 0; i < yval; i++){
				arrayObj.grid.splice(arrLength - i * (arrayObj.parameters.x),0,false)
			}
			arrayObj.parameters.x = arrayObj.parameters.x + 1;
		}
		if (bottomCheck(arrayObj)){
			for(var i = 0; i < arrayObj.parameters.x; i++){
				arrayObj.grid.push(false);
			}
		}
		if (topCheck(arrayObj)){
			for(var i = 0; i < arrayObj.parameters.x; i++){
				arrayObj.grid.unshift(false);
			}
		}
	}

	addGameLogTurnHeader(){
		if(this.gameData.round == 6 && this.gameData.turn == 4){
			this.gameLog.push("Game Over");
		} else {	
			this.gameLog.push('<span class="logHeader">YEAR ' + this.gameData.turn + " : ROUND " + this.gameData.round + "</span>");	
		}		
	}		

	updateGrid(newCards){
		for(var i = 0; i < newCards.length; i++){
			if(newCards[i][0] != null){
				this.playerStationArray.grid[newCards[i][0]] = newCards[i][1];
			}
		}
		
	}
	currencyYearlyChange(delta){
		if(this.playerData.ability_available && this.playerData.player_race == "zehuti"){
			this.playerData.player_currency_turn_increase = 0;
		} else {
			this.playerData.player_currency_turn_increase = this.playerData.player_currency_turn_increase  + delta;
		}
	}
	
	currencyChange(delta){
		this.playerData.currency = this.playerData.currency + delta;
	}
	
	currentPointsChange(delta){
		this.playerData.curr_score = this.playerData.curr_score + delta;		
	}

	incrementTurn(){
		if(this.gameData.round == 6 && this.gameData.turn == 4){
			//End Game Check
			this.gameData.round = false,
			this.gameData.turn = false;
			this.playerHand = [];
			this.playerData.currency = this.playerData.currency + this.playerData.boCard_credit_value;
//			if(this.playerData.boCard_credit_value){
//				this.addGameLogEntry('You receive ' + this.boCard_credit_value + ' credits from Business Offices');
//			}
			this.playerData.boCard_credit_value = 0;

		} else if(this.gameData.round && this.gameData.turn){
			// Needs to be updated if conflict cards included (7 turns)
			this.gameData.round = this.gameData.round +1;
			if (this.gameData.round > 6){
				this.gameData.round = 1;
				this.gameData.turn = this.gameData.turn + 1;
				this.playerHand = [];
				this.playerData.currency = (this.playerData.player_race == 'zehuti' && this.playerData.abilities)? this.playerData.player_currency_turn_increase : this.playerData.currency + this.playerData.player_currency_turn_increase + this.playerData.boCard_credit_value;	
//				if(this.playerData.boCard_credit_value){
//					this.addGameLogEntry('You receive ' + this.boCard_credit_value + ' credits from Business Offices');
//				}
				this.playerData.boCard_credit_value = 0;
				this.gameData.turnOrder = this.gameData.turnOrder ? false : true;
				if(this.playerData.abilities){
					this.playerData.ability_available = true;
				}
/*	
				if(this.playerData.player_race == 'zehuti' && this.playerData.abilities){
					this.addGameLogEntry('Your credits are set to 13 (Zehuti ability)');
				} else {
					this.addGameLogEntry('You receive ' + this.playerData.player_currency_turn_increase + 'credits');
				} 
*/
			} else {
				
			}
			this.updateEGScoring();
		}
	}
	
	businessOfficeCurrency(delta){
		this.playerData.boCard_credit_value = this.playerData.boCard_credit_value + delta;		
	}
	
}	

class otherPlayerDataObject{
	constructor(playerNumber,playerName,playerCurrency,playerAbility,playerRace,playerScore,playerEGScore){
		this.playerNo = playerNumber,
		this.playerName = playerName,
		this.playerScore = playerScore,
		this.currency = playerCurrency,
		this.eg_score = playerEGScore,
		this.ability_available = playerAbility,
		this.player_race = playerRace,
		this.color = playerColourStyles[playerNumber - 1].color,
		this.main_reactor_color = playerColourReactorStyles[playerNumber - 1],
		this.playerStationArray = {
			parameters: {
				x: null,
				infinite: null,
				grid_transform_string : "transform : translate(0px,0px) scale(1)"
			},
			grid: []
		}		
	}
}
		
var initiate = function(noPlayers,objectives,playerAbilities,players){
//Generate player Objects
	var race_list = rF(races);
	var playersShuffled = rF(players);
//	console.log(players);
	var playerArray = [];
	for(var i=0; i<players.length; i++){
		playerArray.push(new playerObj(noPlayers,objectives,playerAbilities,playersShuffled[i].username,playersShuffled[i].playerKey,race_list[i],(i+1),[true,null,null]));
	}
	for(var i = 0; i<playerArray.length; i++){
		for(var j = i + 1; j< i + playerArray.length; j++){
			var	currentOtherPlayerObj = playerArray[(j % playerArray.length + playerArray.length) % playerArray.length];
			playerArray[i].addOtherPlayer(currentOtherPlayerObj.playerData.playerNo,currentOtherPlayerObj.playerData.playerName,currentOtherPlayerObj.playerData.currency,currentOtherPlayerObj.playerData.abilities,currentOtherPlayerObj.playerData.player_race, currentOtherPlayerObj.playerData.curr_score, currentOtherPlayerObj.playerData.eg_score);
		}
	}
	return playerArray;
}

function generateDeck(noPlayers,bannedCards){
	var cardsInGame = [];
	var basic_cards = cL.cardList.cards.basic_locations;
	var special_cards = cL.cardList.cards.s_locations;
	var specialCardsArray = [];
	var cardListNames = []

	for(var i = 0; i < bannedCards.length; i++){
		for(var j = special_cards.length - 1; j>=0; j--){
			if(special_cards[j].cardId == bannedCards[i]){
				special_cards = special_cards.splice(j,1);
			}
		}
	}
	for(var i = 0; i< special_cards.length; i++){
		for(var j = 0; j< special_cards[i].cardQuantity; j++){
			specialCardsArray.push(special_cards[i]);
		}				
	}
	if(noPlayers == 3){
		for(var i = 0; i<3; i++){
			basic_cards.forEach(function(i){cardsInGame.push(i)});
		}
		rF(specialCardsArray).slice(0,18).forEach(function(i){cardsInGame.push(i)});
	} else if (noPlayers == 2 || noPlayers == 4){
		for(var i = 0; i<4; i++){
			basic_cards.forEach(function(i){cardsInGame.push(i)});
		}
		rF(specialCardsArray).slice(0,24).forEach(function(i){cardsInGame.push(i)})
	}
	cardListNames = cardsInGame.map(function(card){return card.cardId})
	return	rF(cardListNames);	
}

module.exports.generateDeck = generateDeck;
module.exports.initiate = initiate;

function leftCheck(arrayObj){ return Boolean(arrayObj.grid.reduce(function(a,b,c,d){
    if(c%arrayObj.parameters.x == 0){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
	},0))
};
	
function rightCheck(arrayObj) {return Boolean(arrayObj.grid.reduce(function(a,b,c,d){
    if(c%arrayObj.parameters.x == (arrayObj.parameters.x - 1)){
        return Boolean(a) + Boolean(b);
	}else{
		return (Boolean(a));
	}
	},0));
};

function topCheck(arrayObj) { return Boolean(arrayObj.grid.slice(0,arrayObj.parameters.x).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};
	
function bottomCheck(arrayObj) { return Boolean(arrayObj.grid.slice(arrayObj.grid.length - arrayObj.parameters.x - 1,arrayObj.grid.length - 1).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};
