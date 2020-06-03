var styles = [{ color: "red" }, { color: "cyan" }, { color: "Magenta" }, { color: "SeaShell" }, { color: "Coral" }, { color: "Lime" }];
const OtherPlayersObj = {OtherPlayers : [{character:"zehuti"},{character:"humareen"},{character:"vak"}]}

var playerDataObj = {
  playerStationArray: {
    parameters: {
      x: 3,
      y: 3,
      infinite: true },

    grid: [
    false,
    false,
    false,
    false,
    { card_obj: {}, a: "Finish" },
    false,
    false,
    false,
    false],

    gridSchema: { cardPresence: false, card_obj: {} } } };

function PlayerMat(props) {
  var playerMatHTML = [];
  for (var i = 0; i < props.OtherPlayers.length; i++) {
    playerMatHTML.push(
    React.createElement("div", { className: "playerBox", id: "other_player_box_" + (i + 1) },
    React.createElement("div", { className: "playerBoxLeft" },
    React.createElement("div", { className: "playerBoxName" }, React.createElement("p", { style: styles[i], className: "playerBoxNameInner" }, "SAM00")),
    React.createElement("div", { className: "playerBoxMoney" },
    React.createElement("div", { className: "playerBoxMoneyCount" }, "5")),

    React.createElement("div", { className: "playerBoxScore" },
    React.createElement("div", { className: "playerBoxScoreCount" }, "5"))),


    React.createElement("div", { className: "playerBoxRight" },
    React.createElement("div", { className: "playerBoxCharacterBox", 'data-character': props.OtherPlayers[i].character, Style:"background-image:url('ATS_Images/Character_Mats/cs_"+props.OtherPlayers[i].character+"_reduced.png')"}),
    React.createElement("div", { className: "playerBoxCharacterActionStatus"})),

    React.createElement("div", { className: "playerStation" })));

  }
  return playerMatHTML;
}

function OwnPlayerMat(props) {
  var returnedHTML = [];
  returnedHTML.push(
  React.createElement("div", { id: "playerScoreArea" },
  React.createElement("div", { id: "ownPlayerBox" },
  React.createElement("div", { id: "turnOrderIcon" }),
  React.createElement("div", { id: "ownPlayerNameBox" },
  React.createElement("div", { id: "ownPlayerName" }, "Sam00")),

  React.createElement("div", { id: "ownPlayerBoxTop" },
  React.createElement("div", { id: "ownPlayerBoxMoney" },
  React.createElement("div", { id: "ownPlayerBoxMoneyCount" }, "5")),

  React.createElement("div", { id: "ownPlayerBoxScore" },
  React.createElement("div", { id: "ownPlayerBoxScoreCount" }, "5"))),


  React.createElement("div", { id: "ownPlayerBoxBottom" },
  React.createElement("div", { id: "ownPlayerBoxCharacterBox" }),
  React.createElement("div", { id: "ownPlayerBoxCharacterActionStatus" })))));

  return returnedHTML;
}

class PlayGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = playerDataObj;
  }

  componentDidMount() {
    console.log("TEST1");
  }

  componentWillUnmount() {
    console.log("TEST2");
  }

  render() {
    var gridX = this.state.playerStationArray.parameters.x;
    var gridY = this.state.playerStationArray.parameters.y;
    var gridSize = this.state.playerStationArray.grid.length;
    var gridStorage = this.state.playerStationArray.grid;

    var testm = this.state.playerStationArray.grid.map(function (item, index) {
	   var newRowStyle = (index % gridX) == 0 ? "newRowStyle" : "";

      if (item) {
        return React.createElement("div", { className: "stationCardSpace gameCardBoard " + newRowStyle, "data-index": index }, index);
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

  render() {
    return React.createElement("div", null,
	
    React.createElement("div", { id: "topBarFlexContainer" },
    React.createElement(PlayerMat,  OtherPlayersObj )),
	
	React.createElement("div", { id: "gridReset" },"Reset Grid"),
    React.createElement(OwnPlayerMat, null),
    React.createElement(PlayGrid, null));

  }}

ReactDOM.render(React.createElement(GameReactHandler, null), document.getElementById('reactContainer'));

document.getElementById("playGridroot").addEventListener('wheel',function(e){
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
  console.log("GGG");
  
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
  console.log(gridPositionY);
  mouseDown = true;
});

document.body.addEventListener('mouseup',function(e){
  mouseDown = false;
});

document.body.addEventListener('mouseleave',function(e){
  mouseDown = false;
});

document.getElementById("playGridroot").addEventListener('mousemove',function(e){
  if(mouseDown){
    document.getElementById("gridContainer").style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
    document.getElementById("gridContainer").style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";
  }
  e.preventDefault();
})