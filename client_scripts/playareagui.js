var playerColourStyles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];

var playerDataObj = {
    gameData: {
        round: null,
        turn: null,
		turnOrder : false,
		objectives:[]
    },
    playerData: {
		playerName: "",
		playerNo : 1,
        curr_score: 0,
		obj_score: 0,
        eg_score: 0,
        currency: 0,
        secret_obj: null,
        ability_available: null,
        player_race: "qualeen",
		color : "lime",
		main_reactor_color : "blue",
		player_currency_turn_increase: 10,
		player_currency_discard_value: 3
    },
    playerHand: [],
    playerStationArray: {
        parameters: {
            x: 0,
            infinite: true,
			grid_transform_string : null
        },
        grid: [],
        gridSchema: {
            cardPresence: false,
            card_obj: {}
        }
    },
	otherPlayersData : {
		numberOther : 0,
		otherPlayers : []
	},
	discardPile : {
		    cards: []
	},
	gameLog : []
};

function PlayerMat(props) {
  var playerMatHTML = [];
  for (var i = 0; i < props.otherPlayers.length; i++) {
    playerMatHTML.push(
    React.createElement("div", { className: "playerBox", id: "other_player_box_" + (i + 1), 'data-player' : props.otherPlayers[i].playerNo },
    React.createElement("div", { className: "playerBoxLeft" },
    React.createElement("div", { className: "playerBoxName" }, React.createElement("p", { Style : "color : " +props.otherPlayers[i].color, className: "playerBoxNameInner" }, props.otherPlayers[i].playerName)),
    React.createElement("div", { className: "playerBoxMoney" },
    React.createElement("div", { className: "playerBoxMoneyCount" }, props.otherPlayers[i].currency)),

    React.createElement("div", { className: "playerBoxScore" },
    React.createElement("div", { className: "playerBoxScoreCount" }, props.otherPlayers[i].playerScore + props.otherPlayers[i].eg_score + props.otherPlayers[i].obj_score))),


    React.createElement("div", { className: "playerBoxRight" },
    React.createElement("div", { className: "playerBoxCharacterBox", 'data-character': props.otherPlayers[i].player_race, Style:"background-image:url('ATS_Images/Character_Mats/cs_"+props.otherPlayers[i].player_race+"_reduced.png')"}),
    React.createElement("div", { className: "playerBoxCharacterActionStatus"})),

    React.createElement("div", { className: "playerStation" })));

  }
  return playerMatHTML;
}

class TurnTracker extends React.Component {
render(){
	return (
  React.createElement("div", { id: "gameProgressBox" },
  React.createElement("div", { className: "gameProgressBoxInner" },"Year: " + this.props.turn),
  React.createElement("div", { className: "gameProgressBoxInner" },"Round: " + this.props.round)
  ))
}	
}


class OwnPlayerMat extends React.Component {
render(){
	console.log(this.props.turnOrder);
  var returnedHTML = [];
  returnedHTML.push(
  React.createElement("div", { id: "playerScoreArea" },
  React.createElement("div", { id: "ownPlayerBox" },
  React.createElement("div", { id: "turnOrderIcon", className : (this.props.turnOrder ? "flipped" : "")}),
  React.createElement("div", { id: "ownPlayerNameBox" },
  React.createElement("div", { id: "ownPlayerName", Style : "color:" + this.props.color }, this.props.playerName )),

  React.createElement("div", { id: "ownPlayerBoxTop" },
  React.createElement("div", { id: "ownPlayerBoxMoney" },
  React.createElement("div", { id: "ownPlayerBoxMoneyCount", key : (parseInt(Math.random()*1000000000)) }, this.props.currency )),

  React.createElement("div", { id: "ownPlayerBoxScore" },
  React.createElement("div", { id: "ownPlayerBoxScoreCount",key : (parseInt(Math.random()*1000000000)) }, (this.props.curr_score + this.props.eg_score + this.props.obj_score)),
  React.createElement("div", { id: "ownPlayerBoxScoreHoverContainer"},
  React.createElement("div", { id: "ownPlayerBoxScoreHoverContainerArrow" }, null),
  React.createElement("div", { id: "ownPlayerBoxScoreHoverContainerBlock"}, 
  React.createElement("div", { className: "ownPlayerScoreBoxHoverInner"}, "I : " + this.props.curr_score),
  React.createElement("div", { className: "ownPlayerScoreBoxHoverInner"}, "E : " + this.props.eg_score),
  React.createElement("div", { className: "ownPlayerScoreBoxHoverInner"}, "O : " + this.props.obj_score)
  )))),


  React.createElement("div", { id: "ownPlayerBoxBottom" },
  React.createElement("div", { id: "ownPlayerBoxCharacterBox", 'data-character': this.props.player_race, Style: "background-image:url('ATS_Images/Character_Mats/cs_"+this.props.player_race+"_reduced.png')"}),
  React.createElement("div", { id: "ownPlayerBoxCharacterActionStatus" })))));

  return returnedHTML;
}
}

class OtherPlayGrid extends React.Component {

  render() {
    var gridX = this.props.parameters.x;
    var gridSize = this.props.grid.length;
    var gridStorage = this.props.grid;

    var cardMap = this.props.grid.map(function (card, index) {
		var newRowStyle = (index % gridX) == 0 ? "newRowStyle" : "";
		if (card) {
		 var powerAvail = null;
		 var cardObj = {};
		 if(card[2] == "B"){
			cardObj = cardList.cards.basic_locations.find(x => x.cardId === card);
		 } else if (card[2] == "S"){
			cardObj = cardList.cards.s_locations.find(x => x.cardId === card);			
		 } else if (card[2] == "R") {
			cardObj = cardList.cards.reactors.find(x => x.cardId === card.slice(0,8));
			powerAvail = parseInt(card[card.length - 1]);
		 }
			  
		 var xx  = {__html : cardPrinter(cardObj,"game_card_board",powerAvail)}
		 return React.createElement("div", { className: "stationCardSpace stationCardPlaced " + newRowStyle, "data-index": index, dangerouslySetInnerHTML : xx});
		} else {
			return React.createElement("div", { className: "stationCardSpace stationCardInvisible " + newRowStyle, "data-index": index});
		}
    });
    return (
      React.createElement("div", { className: "otherGridContainer", Style: "transform:scale(1); display:none;", "data-player":this.props.playerNo},
      cardMap));
}}

class PlayGrid extends React.Component {
	
  render() {
    var gridX = this.props.parameters.x;
    var gridSize = this.props.grid.length;
    var gridStorage = this.props.grid;

    var cardMap = this.props.grid.map(function (card, index) {
    var newRowStyle = (index % gridX) == 0 ? "newRowStyle" : "";
	var powerAvail = 0;
      if (card) {
		 var cardObj = {};
		 if(card[2] == "B"){
			cardObj = cardList.cards.basic_locations.find(x => x.cardId === card);
		} else if (card[2] == "S"){
			cardObj = cardList.cards.s_locations.find(x => x.cardId === card);			
		} else if (card[2] == "R") {
			cardObj = cardList.cards.reactors.find(x => x.cardId === card.slice(0,8));
			powerAvail = parseInt(card[card.length - 1]);	
		}
		  
		var xx  = {__html : cardPrinter(cardObj,"game_card_board",powerAvail)}
        return React.createElement("div", { className: "stationCardSpace stationCardPlaced " + newRowStyle, "data-index": index, dangerouslySetInnerHTML : xx})
      }

      var placeable = neighbourCheck(index, gridX, gridSize);
      var visibility = false;
	  var observationDomeCheck = true;

      for (var z = 0; z < placeable.length; z++) {
        if (gridStorage[placeable[z]] == "B0S_P_OD") {
		  observationDomeCheck = false;
          break;
        }
	  }
	  
      for (var z = 0; z < placeable.length; z++) {
        if (gridStorage[placeable[z]] && observationDomeCheck) {
          visibility = true;
          break;
        }
      }

      if (visibility && this.props.gameState) {
        return React.createElement("div", { className: "stationCardSpace stationCardPlaceable "+ newRowStyle, "data-index": index },null);
      } else {
        return React.createElement("div", { className: "stationCardSpace stationCardInvisible "+ newRowStyle, "data-index": index },null);
      }

    }.bind(this));
    return (
      React.createElement("div", { id: "gridContainer", Style: "transform:scale(1);" },
      cardMap));
}}

class GameReactHandler extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = playerDataObj;
	}
	
	componentWillMount(){
		socket.emit('pageLoader',{"playerKey": playerKey});
		socket.on('pageLoader',function(data){
			console.log("This data received from server :")
			console.log(data);
			this.setState(data);
		}.bind(this))
	}

	componentDidMount() {
		playerDataObj = this.state;
		discardListGen(this.state.discardPile.cards);
		handGen(this.state.playerHand);
	}

	componentWillUnmount() {

	}
	
	processPlacement(e){
		if(cardPlaced){
			var cardObj = getCardObj(transferredCard);
			requiredPowerSpend = cardObj.cardPowerCost;
			if(requiredPowerSpend != 0){
				accessiblePowerArray = getAvailablePowerIndeces(playerDataObj.playerStationArray, e.target.closest(".stationCardPlaceable").dataset.index,powerArray,2);
				for(var i = 0; i < accessiblePowerArray.length; i++){
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].addEventListener('click',removePower,true);
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "lime thick solid";
				}
			} else if(transferredCard == "B0S_B_SP") {
				accessiblePowerArray = getAvailablePowerIndeces(playerDataObj.playerStationArray, e.target.closest(".stationCardPlaceable").dataset.index,powerArray2,1);				
				for(var i = 0; i < accessiblePowerArray.length; i++){
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].addEventListener('click',addPower,true);
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "lime thick solid";
				}
			} else if(transferredCard == "B0S_B_BR") {
				accessiblePowerArray = getAvailablePowerIndeces(playerDataObj.playerStationArray, e.target.closest(".stationCardPlaceable").dataset.index,mainPowerArray,Infinity);				
				for(var i = 0; i < accessiblePowerArray.length; i++){
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].addEventListener('click',addPower,true);
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "lime thick solid";
				}
			} else if(transferredCard == "B0B_G_EO"){
				document.getElementById("embassyOfficeScreen").style.display = "flex";						
			} else if(transferredCard == "B0S_Y_BO" && this.state.playerData.currency > 1){
				document.getElementById("businessOfficeScreen").style.display = "flex";					
			} else {
				optionMode = 1;
				confirmationBoxFlag = true;
				confirmationBoxLoader();
			}
			if(transferredCard[2] == "R"){
				optionMode = 3;
				confirmationBoxFlag = true;
				confirmationBoxLoader();
			}
			cardPlaced = false;
			handLock = true;
		}
		copiedElement = null;
	}
	
	powerDiscard(e){
		transferredCard2 = transferredCard;	
		if(cardPowerDiscard && transferredCard[2] != "R" && e.button == 0){		
			if(this.state.playerData.currency < 1){
				console.log("Not enough money");
				document.getElementById("discardForPowerBox").innerHTML = "";
				document.getElementById("discardForPowerBox").style.display = "";				
				handGen(this.state.playerHand,"game_card_hand");
				generateListeners();
			} else {
				console.log("Discarded card "+transferredCard+ " for power");
				cardForDiscard = transferredCard;
				cardPlaced = false;
				handMouseDown = false;	
				handGen(["B0R_X_PR"],"game_card_hand")
				generateListeners();
			}
		}
	}

	currencyDiscard(e){
		if(cardCurrencyDiscard && transferredCard[2] != "R" && e.button == 0){
			console.log("Discarded card " + transferredCard +  " for currency")
			handMouseDown = false;
			handLock = true;
			cardForDiscard = transferredCard;
			confirmationBoxFlag = true;
			if(optionMode == null){
				optionMode = 2;
				confirmationBoxLoader();
			}
		}
	}

	playConflict(e){
		if(conflictCardPlace && transferredCard[2] == "C" && e.button == 0){
			if(this.state.playerData.currency < 1){
				document.getElementById("conflictCardPlaceBox").innerHTML = "";
				document.getElementById("conflictCardPlaceBox").style.display = "";				
				handGen(this.state.playerHand,"game_card_hand");
				generateListeners();
			} else {
				handMouseDown = false;
				handLock = true;
				confirmationBoxFlag = true;
				if(optionMode == null){
					optionMode = 8;
					document.getElementById("conflictScreen").style.display = "flex";						
				}
			} 
		}
	}
	
	boConfirmation(e){
		businessOfficesExtraSpend = parseInt(document.getElementById("businessOfficeRange").value);
		document.getElementById("businessOfficeScreen").style.display = "";
		optionMode = 6;
		confirmationBoxFlag = true;
		confirmationBoxLoader();		
	}
	
	eoConfirmation(e){
		embassyOfficePlayerSelect = document.querySelector('input[name="playerRadioSelect"]:checked').value;
		document.getElementById("embassyOfficeScreen").style.display = "";
		optionMode = 7;
		confirmationBoxFlag = true;
		confirmationBoxLoader();		
	}
	
	conflictConfirmation(e){
		conflictPlayerSelect = document.querySelector('input[name="conflictPlayerRadioSelect"]:checked').value;
		if(conflictPlayerSelect){
			document.getElementById("conflictScreen").style.display = "";
			optionMode = 8;
			confirmationBoxFlag = true;
			confirmationBoxLoader();				
		}
	}

	boSlider(e){
		document.getElementById("businessOfficeRangeValue").innerHTML = document.getElementById("businessOfficeRange").value;
	}

	endEarlyButton2(e){
		endEarlyButton();
	}

	cancelButton(e){
		this.setState({render: this.state.render + 1 || 1});
		optionMode = null;
		confirmationBoxFlag = false;
//		confirmationBoxLoader();
		document.getElementById('waitingBox').style.display = '';
		document.getElementById("ownPlayerBoxMoneyCount").innerHTML = this.state.playerData.currency;
		document.getElementById("ownPlayerBoxScoreCount").innerHTML = (this.state.playerData.curr_score + this.state.playerData.eg_score);	
	}
	
	submitTurnButton(e){
		socket.emit('submitTurnData',turnObject);
		document.getElementById('waitingBox').style.display = 'block';
		document.getElementById('turnConfirmationScreen').style.display = '';
		document.getElementById("ownPlayerBoxMoneyCount").innerHTML = (this.state.playerData.currency + parseInt(currencyDelta));
		document.getElementById("ownPlayerBoxScoreCount").innerHTML = (this.state.playerData.curr_score + this.state.playerData.eg_score + this.state.playerData.obj_score) + scoreDelta;				
	}
		
	componentDidUpdate(){
		currencyDelta = 0;
		conflictCardPlace = false;
		optionMode = null;
		playerDataObj = this.state;
		handGen(this.state.playerHand);
		discardListGen(this.state.discardPile.cards);
		renderGameLog(this.state.gameLog);
		confirmationBoxLoader();
		playerDataObj = this.state;
		cardForDiscard = null;
		cardPlaced = false;
		cardPowerDiscard = false;
		cardCurrencyDiscard = false;
		transferredCard = "";
		handMouseDown = false;
		copiedElement = null;
		displayedArea = 0;
		handLock = false;
		requiredPowerSpend = 0;
		conflictPlayerSelect = "";
		powerSpendArray = [];
		accessiblePowerArray = [];
		confirmationBoxFlag = false;
		endEarly = false;
		powerAddArray = [];
		businessOfficesExtraSpend = 0;
		embassyOfficePlayerSelect = "";
        placedCardIndex = null;
		scoreDelta = '';
		turnObject = {};
		if(this.state.playerHand.length == 0){
			document.getElementById('waitingBox').style.display = 'block';
		} else {
			document.getElementById('waitingBox').style.display = '';			
		}
		if(this.state.gameData.round == false){
			document.getElementById('waitingBox').style.display = 'none';
			document.getElementsByClassName('gameProgressBoxInner')[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;GAME OVER";
			document.getElementsByClassName('gameProgressBoxInner')[1].innerHTML = "";
		}		

		document.getElementById('turnConfirmationScreen').style.display = '';
		document.getElementById("ownPlayerBoxMoneyCount").innerHTML = this.state.playerData.currency;
		document.getElementById("ownPlayerBoxScoreCount").innerHTML = this.state.playerData.curr_score + this.state.playerData.eg_score + this.state.playerData.obj_score;

		generateListeners();
		ObjPrinter(this.state.gameData.objectives);
	}

	render() {

		var other_player_stations = this.state.otherPlayersData.otherPlayers.map(function(playerItem){
			return React.createElement(OtherPlayGrid, {...playerItem.playerStationArray, playerNo : playerItem.playerNo}, null)
		});
		
		var gameStatus = Boolean(this.state.gameData.round) && Boolean(this.state.playerHand.length);
		var messageFlag = Boolean(this.state.playerHand.length) ? '' : 'display :none';
		
		var other_player_selectors = this.state.otherPlayersData.otherPlayers.map(function(playerItem){
			return React.createElement("div", {className:"playerRadioContainer"},
				React.createElement("div", {className:"playerRadioImage"},null),
				React.createElement("label", {htmlfor:((playerItem.playerName).toString() + playerItem.playerNo.toString()), className:"playerRadioNameLabel"},playerItem.playerName),
				React.createElement("input", {type:"radio", name:"playerRadioSelect", id:((playerItem.playerName).toString() + playerItem.playerNo.toString()), value:playerItem.playerNo},null)
			)	
		})
		
		other_player_selectors.push(React.createElement("div", {className:"playerRadioContainer"},
				React.createElement("div", {className:"playerRadioImage"},null),
				React.createElement("label", {htmlfor:"none", className:"playerRadioNameLabel"},"None"),
				React.createElement("input", {type:"radio", name:"playerRadioSelect", id:"None", value:"None", checked:"checked"},null)
			)	
		);
		
		var conflict_player_selectors = this.state.otherPlayersData.otherPlayers.map(function(playerItem){
			return React.createElement("div", {className:"playerRadioContainer"},
				React.createElement("div", {className:"playerRadioImage"},null),
				React.createElement("label", {htmlfor:((playerItem.playerName).toString() + playerItem.playerNo.toString()), className:"playerRadioNameLabel"},playerItem.playerName),
				React.createElement("input", {type:"radio", name:"conflictPlayerRadioSelect", id:("C"+(playerItem.playerName).toString() + playerItem.playerNo.toString()), value:playerItem.playerNo},null)
			)	
		})
		
		return React.createElement("div", null,

		React.createElement("div", { id : "conflictScreen", className : "gameMat modalScreen"},		
		React.createElement("div", { id : "conflictDialogueBox", className : "dialogueBox"  }, 
		React.createElement("div", { id : "conflictText",  className : "dialogueBoxInnerText"}, "Choose another player to play Conflict Card against" ),
		conflict_player_selectors,
		React.createElement("button", { id : "conflictConfirmation", className : "confirmationBox", onClick : this.conflictConfirmation.bind(this)}, "Confirm" ),
		),null),
	
		React.createElement("div", { id : "embassyOfficeScreen", className : "gameMat modalScreen"},		
		React.createElement("div", { id : "embassyOfficeDialogueBox", className : "dialogueBox"  }, 
		React.createElement("div", { id : "embassyOfficeText",  className : "dialogueBoxInnerText"}, "Choose another player to gain +1VP. If you do so, you gain +2VP." ),
		other_player_selectors,
		React.createElement("button", { id : "embassyOfficeConfirmation", className : "confirmationBox", onClick : this.eoConfirmation.bind(this)}, "Confirm" ),
		),null),

		React.createElement("div", { id : "businessOfficeScreen", className : "gameMat modalScreen"},		
		React.createElement("div", { id : "businessOfficeDialogueBox", className : "dialogueBox"  }, 
		React.createElement("div", { id : "businessOfficeText",  className : "dialogueBoxInnerText"}, "Place up to 6 credits on card, +1 VP for every  2 credits on card (retrieve at end of year)" ),
		React.createElement("input", { type:"range", id : "businessOfficeRange", min : "0", max : (Math.min(this.state.playerData.currency - 1,6)).toString(), onChange:this.boSlider.bind(this), defaultValue:"0" } ),
		React.createElement("div", {id:"businessOfficeRangeValue" }, 0 ),
		React.createElement("button", { id : "businessOfficeConfirmation", className : "confirmationBox", onClick : this.boConfirmation.bind(this)}, "Confirm" ),
		),),

		React.createElement("div", { id : "endEarlyButton", onClick :  this.endEarlyButton2.bind(this)}, "Finish Selection"),
		
		React.createElement("div", { id : "turnConfirmationScreen", className : "gameMat modalScreen"},		
		React.createElement("div", { id : "turnConfirmationBox", className : "dialogueBox" }, 
		React.createElement("div", { id : "turnConfirmationBoxInnerText", className : "dialogueBoxInnerText"}, "Placeholder" ),
		React.createElement("button", { id : "turnConfirmationBoxConfirmation", className : "confirmationBox", onClick :this.submitTurnButton.bind(this)}, "Confirm" ),
		React.createElement("button", { id : "turnConfirmationBoxCancel", onClick : this.cancelButton.bind(this), className : "confirmationBox"}, "Cancel" )
		),),

		React.createElement("div", { id : "waitingBox", Style:messageFlag},"Waiting for other players..."),
		React.createElement(TurnTracker, {...this.state.gameData}),
	
		React.createElement("div", { id: "topBarFlexContainer" },
		React.createElement(PlayerMat,  {...this.state.otherPlayersData} )),
	
		React.createElement("div", { id: "gridReset" },"Reset Grid"),
		React.createElement(OwnPlayerMat, {...this.state.playerData, turnOrder : this.state.gameData.turnOrder}),
		React.createElement("div", { key : (parseInt(Math.random()*1000000000)).toString(), id: "playGridroot", className: "gameMat", onMouseUp : this.processPlacement.bind(this) }, 
		React.createElement(PlayGrid, {gameState:gameStatus, ...this.state.playerStationArray}), 
		other_player_stations),

		React.createElement("div", { key : (parseInt(Math.random()*1000000000)), id : "conflictCardPlaceBox", className : "discardBox", onMouseUp : this.playConflict.bind(this)}, "Play Conflict"),
		React.createElement("div", { key : (parseInt(Math.random()*1000000000)), id : "discardForPowerBox", className : "discardBox", onMouseUp : this.powerDiscard.bind(this)}, "Discard for Reactor"),
		React.createElement("div", { key : (parseInt(Math.random()*1000000000)), id : "discardForCurrencyBox", className : "discardBox", onMouseUp : this.currencyDiscard.bind(this)}, "Discard for Currency"),

		React.createElement("div", { id: "playerHandModal" }, null)
		);
  }}

ReactDOM.render(React.createElement(GameReactHandler, null), document.getElementById('reactContainer'));
