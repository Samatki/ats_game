var playerColourStyles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];
const OtherPlayersObj = {OtherPlayers : [{character:"zehuti"},{character:"humareen"},{character:"vak"}]}
var tempGrid;
var handMouseDown = false;
var copiedElement;

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
		main_reactor_color : "blue"
    },
    playerHand: ["B0S_B_CB","B0B_R_FLB"],
    playerStationArray: {
        parameters: {
            x: 6,
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
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
            false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
            false,
			false,
            "B0B_R_FLB",
            false,
            "B0B_R_FLB", 
			"B0S_B_CB",
			"B0S_P_OD",
            false,
            false,
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
		    cards: ["B0S_B_CB","B0S_B_CB"]
		
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

    var testm = this.props.grid.map(function (card, index) {
	   var newRowStyle = (index % gridX) == 0 ? "newRowStyle" : "";
		
      if (card) {
		 var cardObj = {};
		 if(card[2] == "B"){
			cardObj = cardList.cards.basic_locations.find(x => x.cardId === card);
		} else if (card[2] == "S"){
			cardObj = cardList.cards.s_locations.find(x => x.cardId === card);			
		} else if (card[2] == "R") {
			cardObj = cardList.cards.reactors.find(x => x.cardId === card);	
		}
		  
		var xx  = {__html : cardPrinter(cardObj,"game_card_board")}
        return React.createElement("div", { className: "stationCardSpace stationCardPlaced " + newRowStyle, "data-index": index, dangerouslySetInnerHTML : xx});
      }
    });
    return (
      React.createElement("div", { className: "otherGridContainer", Style: "transform:scale(1); display:none;", "data-player":this.props.playerNo},
      testm))//);
}}

class PlayGrid extends React.Component {

  render() {
    var gridX = this.props.parameters.x;
    var gridSize = this.props.grid.length;
    var gridStorage = this.props.grid;

    var testm = this.props.grid.map(function (card, index) {
    var newRowStyle = (index % gridX) == 0 ? "newRowStyle" : "";
      if (card) {
		 var cardObj = {};
		 if(card[2] == "B"){
			cardObj = cardList.cards.basic_locations.find(x => x.cardId === card);
		} else if (card[2] == "S"){
			cardObj = cardList.cards.s_locations.find(x => x.cardId === card);			
		} else if (card[2] == "R") {
			cardObj = cardList.cards.reactors.find(x => x.cardId === card);	
		}
		  
		var xx  = {__html : cardPrinter(cardObj,"game_card_board")}
        return React.createElement("div", { className: "stationCardSpace stationCardPlaced " + newRowStyle, "data-index": index, dangerouslySetInnerHTML : xx});
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
      testm))//);
}}

class GameReactHandler extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = playerDataObj;
	}

	componentDidMount() {
		tempGrid = this.state;
		discardListGen(this.state.discardPile.cards);
		handGen(this.state.playerHand);
	}

	componentWillUnmount() {
		console.log("TEST2");
	}

	render() {
		var other_player_stations = this.state.otherPlayersData.otherPlayers.map(function(playerItem){
			return React.createElement(OtherPlayGrid, {...playerItem.playerStationArray, playerNo : playerItem.playerNo}, null)
		});
		
		return React.createElement("div", null,
	
		React.createElement("div", { id: "topBarFlexContainer" },
		React.createElement(PlayerMat,  {...this.state.otherPlayersData} )),
	
		React.createElement("div", { id: "gridReset" },"Reset Grid"),
		React.createElement(OwnPlayerMat, {...this.state.playerData, turnOrder : playerDataObj.gameData.turnOrder}),
		React.createElement("div", { id: "playGridroot", className: "gameMat" }, 
		React.createElement(PlayGrid, {...this.state.playerStationArray}), 
		other_player_stations),
		
		React.createElement("div", { id: "playerHandModal" }, null)
		);
  }}

ReactDOM.render(React.createElement(GameReactHandler, null), document.getElementById('reactContainer'));

var displayedArea = 0;

document.getElementById("playGridroot").addEventListener('wheel',function(e){
	if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				var elementS = document.getElementsByClassName("otherGridContainer")[i];	
			}
		}	    
	}else{
		var elementS = document.getElementById("gridContainer");
	}		
  mouseDown = false;
  elementS.style.cursor = ""
  e.preventDefault();;
  m = elementS.style.transform.split('').slice(6,-1).join('');
  var newScale = ((m/1 - Math.sign(e.deltaY)*0.2) < 0.2)? 0.2:(m/1 - Math.sign(e.deltaY)*0.2);
  elementS.style.transform = "scale("+ (newScale).toString() +")";
  initialgridPositionX = elementS.getBoundingClientRect().left;
  initialgridPositionY = elementS.getBoundingClientRect().top;
})

var mouseDown;
var gridPositionX;
var initialgridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
var initialgridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;

document.getElementById("playGridroot").addEventListener('mousedown',function(e){
	if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				var elementS = document.getElementsByClassName("otherGridContainer")[i];	
			}
		}	    
	}else{
		var elementS = document.getElementById("gridContainer");
	}	
  elementS.style.cursor = "grabbing";
  var gridPositionXStore = elementS.style.left;
  var gridPositionYStore = elementS.style.top;
  elementS.style.left = 0
  elementS.style.top = 0;
  initialgridPositionX = elementS.getBoundingClientRect().left;
  initialgridPositionY = elementS.getBoundingClientRect().top;
  elementS.style.left = gridPositionXStore;
  elementS.style.top = gridPositionYStore;
  
  initialPositionX = e.clientX;
  initialPositionY = e.clientY;
  gridPositionX = elementS.getBoundingClientRect().left;
  gridPositionY = elementS.getBoundingClientRect().top;

  mouseDown = true;
});

document.body.addEventListener('mouseup',function(e){
  mouseDown = false;
  if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				document.getElementsByClassName("otherGridContainer")[i].style.cursor = "";	
			}
		}	  
  } else {
	document.getElementById("gridContainer").style.cursor = "";
  }
});

document.body.addEventListener('mouseleave',function(e){
  mouseDown = false;
  if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				document.getElementsByClassName("otherGridContainer")[i].style.cursor = "";			
			}
		}	  
  } else {
	document.getElementById("gridContainer").style.cursor = "";
  }
  if(handMouseDown){
	transferredCard = "";
	document.getElementById("draggableCardArea").style.top = "200vh";
	document.getElementById("draggableCardArea").style.left = "200vw;"
	document.body.style.cursor = "";
	for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
		document.getElementsByClassName("game_card_hand")[l].style.display = "block";
	}
  }
  handMouseDown = false;
});

document.getElementById("playGridroot").addEventListener('mousemove',function(e){
  if(mouseDown){
	if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				document.getElementsByClassName("otherGridContainer")[i].style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
				document.getElementsByClassName("otherGridContainer")[i].style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";				
			}
		}
	} else {
    document.getElementById("gridContainer").style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
    document.getElementById("gridContainer").style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";
	}
  }
  if(handMouseDown){
	document.getElementById("gridContainer").style.cursor = "none";  
  } else {
	document.getElementById("gridContainer").style.cursor = ""; 	  
  }
  e.preventDefault();
})

for (var l=0; l<document.getElementsByClassName("playerBox").length; l++){
	document.getElementsByClassName("playerBox")[l].addEventListener("click", function(e){
	for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
		document.getElementsByClassName("otherGridContainer")[i].style.display = "none";		
	}
	var gameFind = e.target.closest('.playerBox').dataset.player;
	document.getElementById("gridContainer").style.display = "none";
	for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
		if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == gameFind){
			document.getElementsByClassName("otherGridContainer")[i].style.display = "block";
			displayedArea = gameFind;
		}
	}	
	}, false);
}

document.getElementById("ownPlayerBoxCharacterBox").addEventListener("click", function(e){
	for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
		document.getElementsByClassName("otherGridContainer")[i].style.display = "none";		
	}
	document.getElementById("gridContainer").style.display = "block";
	displayedArea = 0;
	}, false);