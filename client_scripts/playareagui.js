var playerColourStyles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];
const OtherPlayersObj = {OtherPlayers : [{character:"zehuti"},{character:"humareen"},{character:"vak"}]}
var tempGrid;

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
        currency: 0,
        secret_obj: null,
        ability_available: null,
        player_race: "qualeen",
		color : "lime"
    },
    playerHand: ["B0S_B_CB","B0S_B_CB"],
    playerStationArray: {
        parameters: {
            x: 3,
//           y: 3,
            infinite: true,
			grid_transform_string : null
        },
        grid: [
            false,
            false,
            false,
            false, 
			"B0S_B_CB",
			"B0S_B_CB",
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
				color : "red"
			} , 
			{
				playerNo : 3,
				playerName : "b",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "vak",
				color : "cyan"
			} , 
			{
				playerNo : 4,
				playerName : "c",
				playerScore : 0,
				eg_score : 0,
				currency:0,
				ability_available : null,
				player_race : "humareen",
				color : "SeaShell"
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
    React.createElement("div", { className: "playerBox", id: "other_player_box_" + (i + 1) },
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

class PlayGrid extends React.Component {

  render() {
    var gridX = this.props.parameters.x;
//    var gridY = this.state.parameters.y;
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
			return null;
		} else if (card[2] == "C") {
			return null;
		}
		  
		  
		var xx  = {__html : cardPrinter(cardObj,"game_card_board")}
        return React.createElement("div", { className: "stationCardSpace stationCardPlaced " + newRowStyle, "data-index": index, dangerouslySetInnerHTML : xx});
      }

      var placeable = neighbourCheck(index, gridX, gridSize);
      var visibility = false;

      for (var z = 0; z < placeable.length; z++) {
        if (gridStorage[placeable[z]]) {
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
      React.createElement("div", { id: "playGridroot", className: "gameMat" } ,
      React.createElement("div", { id: "gridContainer", Style: "transform:scale(1);" },
      testm)));

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
		return React.createElement("div", null,
	
		React.createElement("div", { id: "topBarFlexContainer" },
		React.createElement(PlayerMat,  {...this.state.otherPlayersData} )),
	
		React.createElement("div", { id: "gridReset" },"Reset Grid"),
		React.createElement(OwnPlayerMat, {...this.state.playerData, turnOrder : playerDataObj.gameData.turnOrder}),
		React.createElement(PlayGrid, {...this.state.playerStationArray}));
  }}

ReactDOM.render(React.createElement(GameReactHandler, null), document.getElementById('reactContainer'));

document.getElementById("playGridroot").addEventListener('wheel',function(e){
  mouseDown = false;
  document.getElementById("gridContainer").style.cursor = ""
  e.preventDefault();
  var containerZoom = document.getElementById("gridContainer");
  m = containerZoom.style.transform.split('').slice(6,-1).join('');
  var newScale = ((m/1 - Math.sign(e.deltaY)*0.2) < 0.2)? 0.2:(m/1 - Math.sign(e.deltaY)*0.2);
  containerZoom.style.transform = "scale("+ (newScale).toString() +")";
  initialgridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
  initialgridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;
})

var mouseDown;
var gridPositionX;
var initialgridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
var initialgridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;

/*
window.addEventListener('resize', function(){
  console.log("GG"+Math.random());
  var gridPositionXStore = document.getElementById("gridContainer").style.left;
  var gridPositionYStore = document.getElementById("gridContainer").style.top;
  document.getElementById("gridContainer").style.left = 0
  document.getElementById("gridContainer").style.top = 0;
  initialgridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
  initialgridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;
  document.getElementById("gridContainer").style.left = gridPositionXStore;
  document.getElementById("gridContainer").style.top = gridPositionYStore;
});
*/

document.getElementById("playGridroot").addEventListener('mousedown',function(e){
  
  document.getElementById("gridContainer").style.cursor = "grabbing";
  var gridPositionXStore = document.getElementById("gridContainer").style.left;
  var gridPositionYStore = document.getElementById("gridContainer").style.top;
  document.getElementById("gridContainer").style.left = 0
  document.getElementById("gridContainer").style.top = 0;
  initialgridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
  initialgridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;
  document.getElementById("gridContainer").style.left = gridPositionXStore;
  document.getElementById("gridContainer").style.top = gridPositionYStore;
  
  initialPositionX = e.clientX;
  initialPositionY = e.clientY;
  gridPositionX = document.getElementById("gridContainer").getBoundingClientRect().left;
  gridPositionY = document.getElementById("gridContainer").getBoundingClientRect().top;
  mouseDown = true;
});

document.body.addEventListener('mouseup',function(e){
  mouseDown = false;
  document.getElementById("gridContainer").style.cursor = "";
});

document.body.addEventListener('mouseleave',function(e){
  mouseDown = false;
  document.getElementById("gridContainer").style.cursor = "";
});

document.getElementById("playGridroot").addEventListener('mousemove',function(e){
  if(mouseDown){
    document.getElementById("gridContainer").style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
    document.getElementById("gridContainer").style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";
  }
  e.preventDefault();
})