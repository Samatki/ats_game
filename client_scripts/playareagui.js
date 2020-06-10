var playerColourStyles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];

var playerDataObj2 = {
    gameData: {
        round: 1,
        turn: 1,
		turnOrder : false
    },
    playerData: {
		playerName: "Sam00",
		playerNo : 1,
        curr_score: 0,
        eg_score: 0,
        currency: 5,
        secret_obj: null,
        ability_available: null,
        player_race: "qualeen",
		color : "lime",
		main_reactor_color : "blue"
    },
    playerHand: ["B0S_B_CB","B0B_R_FLB","B0R_X_MR2"],
    playerStationArray: {
        parameters: {
            x: 3,
            infinite: true,
			grid_transform_string : null
        },
        grid: [
            false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false			
        ],
        gridSchema: {
            cardPresence: false,
            card_obj: {}
        }
    },
	otherPlayersData : {
		numberOther : 3,
		otherPlayers : [
			{
				playerNo : 2,
				playerName : "a",
				playerScore : 0,
				currency:0,
				eg_score : 0,
				ability_available : null,
				player_race : "zehuti",
				color : "red",
				main_reactor_color : "red",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						false,
						false,
						false
					]
				}
			}, 
			{
				playerNo : 3,
				playerName : "b",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "vak",
				color : "cyan",
				main_reactor_color : "vak",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						false,
						false,
						false
					]
				}
			} , 
			{
				playerNo : 4,
				playerName : "c",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "humareen",
				color : "SeaShell",
				main_reactor_color : "green",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						"B0B_R_FLB",
						false,
						false
					]
				}
			}
		
		]
	},
	discardPile : {
		    cards: ["B0S_B_CB","B0S_B_CB"]
		
	}
};

var playerDataObj = {
    gameData: {
        round: 1,
        turn: 1,
		turnOrder : false
    },
    playerData: {
		playerName: "Sam00",
		playerNo : 1,
        curr_score: 0,
        eg_score: 0,
        currency: 10,
        secret_obj: null,
        ability_available: null,
        player_race: "qualeen",
		color : "lime",
		main_reactor_color : "blue",
		player_currency_turn_increase: 10,
		player_currency_discard_value: 3
    },
    playerHand: ["B0S_B_CB","B0B_R_SG"],
    playerStationArray: {
        parameters: {
            x: 3,
            infinite: true,
			grid_transform_string : null
        },
        grid: [
            false,
            "B0R_X_MR3",
            false,
			false,
			false,
			false,
            false, 
			"B0R_X_MR0",
			"B0B_B_TP",
			false, 
			false,
			"B0B_B_TP",
			false, 
			false,
			"B0B_B_TP",
			false, 
			"B0R_X_PR2",
			false,
			false, 
			"B0R_X_PR3",
			false,			
        ],
        gridSchema: {
            cardPresence: false,
            card_obj: {}
        }
    },
	otherPlayersData : {
		numberOther : 3,
		otherPlayers : [
			{
				playerNo : 2,
				playerName : "a",
				playerScore : 0,
				currency:0,
				eg_score : 0,
				ability_available : null,
				player_race : "zehuti",
				color : "red",
				main_reactor_color : "red",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						false,
						false,
						false
					]
				}
			}, 
			{
				playerNo : 3,
				playerName : "b",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "vak",
				color : "cyan",
				main_reactor_color : "vak",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						false,
						false,
						false
					]
				}
			} , 
			{
				playerNo : 4,
				playerName : "c",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "humareen",
				color : "SeaShell",
				main_reactor_color : "green",
				playerStationArray: {
					parameters: {
						x: 3,
						infinite: true,
						grid_transform_string : null
					},
					grid: [
						false,
						"B0B_R_FLB",
						false,
						"B0B_R_FLB", 
						"B0S_B_CB",
						"B0S_P_OD",
						false,
						false,
						false
					]
				}
			}
		
		]
	},
	discardPile : {
		    cards: ["B0S_B_CB","B0S_B_CB","B0S_P_OD"]
	}
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
    React.createElement("div", { className: "playerBoxScoreCount" }, props.otherPlayers[i].playerScore))),


    React.createElement("div", { className: "playerBoxRight" },
    React.createElement("div", { className: "playerBoxCharacterBox", 'data-character': props.otherPlayers[i].player_race, Style:"background-image:url('ATS_Images/Character_Mats/cs_"+props.otherPlayers[i].player_race+"_reduced.png')"}),
    React.createElement("div", { className: "playerBoxCharacterActionStatus"})),

    React.createElement("div", { className: "playerStation" })));

  }
  return playerMatHTML;
}

class OwnPlayerMat extends React.Component {
render(){
  var returnedHTML = [];
  returnedHTML.push(
  React.createElement("div", { id: "playerScoreArea" },
  React.createElement("div", { id: "ownPlayerBox" },
  React.createElement("div", { id: "turnOrderIcon", className : this.props.turnOrder ? "flipped" : ""}),
  React.createElement("div", { id: "ownPlayerNameBox" },
  React.createElement("div", { id: "ownPlayerName", Style : "color:" + this.props.color }, this.props.playerName )),

  React.createElement("div", { id: "ownPlayerBoxTop" },
  React.createElement("div", { id: "ownPlayerBoxMoney" },
  React.createElement("div", { id: "ownPlayerBoxMoneyCount" }, this.props.currency )),

  React.createElement("div", { id: "ownPlayerBoxScore" },
  React.createElement("div", { id: "ownPlayerBoxScoreCount" }, this.props.curr_score))),


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

      if (visibility) {
        return React.createElement("div", { className: "stationCardSpace stationCardPlaceable "+ newRowStyle, "data-index": index }, index);
      } else {
        return React.createElement("div", { className: "stationCardSpace stationCardInvisible "+ newRowStyle, "data-index": index }, index);
      }

    });
    return (
      React.createElement("div", { id: "gridContainer", Style: "transform:scale(1);" },
      cardMap));
}}

class GameReactHandler extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = playerDataObj;
		this.state.render = 0;
	}

	componentDidMount() {
		playerDataObj = this.state;
		discardListGen(this.state.discardPile.cards);
		handGen(this.state.playerHand);
	}

	componentWillUnmount() {
		console.log("TEST2");
	}
	
	processPlacement(e){
		if(cardPlaced){
			var cardObj = getCardObj(transferredCard);
			accessiblePowerArray = getAvailablePowerIndeces(playerDataObj.playerStationArray, e.target.closest(".stationCardPlaceable").dataset.index);
			requiredPowerSpend = cardObj.cardPowerCost;
			console.log(cardObj);
			console.log(transferredCard);
			console.log(e.target.closest(".stationCardPlaceable").dataset.index);
			if(requiredPowerSpend != 0){
				for(var i = 0; i < accessiblePowerArray.length; i++){
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].addEventListener('click',removePower,true);
					document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "lime thick solid";
				}
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
			if(this.state.playerData.currency <= 1){
				console.log("Not enough money");
				document.getElementById("discardForPowerBox").innerHTML = "";
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
			optionMode = 2;
			confirmationBoxFlag = true;
			confirmationBoxLoader();
		}
	}
	
	endEarlyButton2(e){
		endEarlyButton();
	}

	cancelButton(e){
		this.setState({render: this.state.render + 1});
		confirmationBoxFlag = false;
		confirmationBoxLoader();
	}
	
	componentDidUpdate(){
		playerDataObj = this.state;
		handGen(this.state.playerHand);
		discardListGen(this.state.discardPile.cards);
		generateListeners();
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
		powerSpendArray = [];
		accessiblePowerArray = [];
		confirmationBoxFlag = false;
		endEarly = false;
	}

	render() {

		var other_player_stations = this.state.otherPlayersData.otherPlayers.map(function(playerItem){
			return React.createElement(OtherPlayGrid, {...playerItem.playerStationArray, playerNo : playerItem.playerNo}, null)
		});
		
		return React.createElement("div", null,
/*
		React.createElement("div", { id : "turnResolutionScreen", className : "gameMat"},		
		React.createElement("div", { id : "turnConfirmationBox" }, 
		React.createElement("div", { id : "turnConfirmationBoxInnerText" }, "Placeholder" ),
		React.createElement("button", { id : "turnConfirmationBoxConfirmation", className : "confirmationBox" }, "Confirm" ),
		React.createElement("button", { id : "turnConfirmationBoxCancel", onClick : this.cancelButton.bind(this), className : "confirmationBox"}, "Cancel" )
		),),
*/
		React.createElement("div", { id : "endEarlyButton", onClick :  this.endEarlyButton2.bind(this)}, "Finish Selection"),
		React.createElement("div", { id : "turnConfirmationScreen", className : "gameMat"},		
		React.createElement("div", { id : "turnConfirmationBox" }, 
		React.createElement("div", { id : "turnConfirmationBoxInnerText" }, "Placeholder" ),
		React.createElement("button", { id : "turnConfirmationBoxConfirmation", className : "confirmationBox" }, "Confirm" ),
		React.createElement("button", { id : "turnConfirmationBoxCancel", onClick : this.cancelButton.bind(this), className : "confirmationBox"}, "Cancel" )
		),),
	
		React.createElement("div", { id: "topBarFlexContainer" },
		React.createElement(PlayerMat,  {...this.state.otherPlayersData} )),
	
		React.createElement("div", { id: "gridReset" },"Reset Grid"),
		React.createElement(OwnPlayerMat, {...this.state.playerData, turnOrder : playerDataObj.gameData.turnOrder}),
		React.createElement("div", { key : (parseInt(Math.random()*1000000000)).toString(), id: "playGridroot", className: "gameMat", onMouseUp : this.processPlacement.bind(this) }, 
		React.createElement(PlayGrid, {...this.state.playerStationArray}), 
		other_player_stations),

		React.createElement("div", { key : (parseInt(Math.random()*1000000000)), id : "discardForPowerBox", className : "discardBox", onMouseUp : this.powerDiscard.bind(this)}, "Discard for Reactor"),
		React.createElement("div", { key : (parseInt(Math.random()*1000000000)), id : "discardForCurrencyBox", className : "discardBox", onMouseUp : this.currencyDiscard.bind(this)}, "Discard for Currency"),

		React.createElement("div", { id: "playerHandModal" }, null)
		);
  }}

ReactDOM.render(React.createElement(GameReactHandler, null), document.getElementById('reactContainer'));