var rF = require('./randomFunction');
var cL = require('./cardlibrary');

/*
			cardTitle: "Dispute (Green)",
			cardDescription: "Choose another player and count the number of green location in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_001"
		},{
			cardTitle: "Dispute (Red)",
			cardDescription: "Choose another player and count the number of red location in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_002"
		},{
			cardTitle: "Dispute (Yellow)",
			cardDescription: "Choose another player and count the number of yellow location in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",			
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_003"
		},{
			cardTitle: "Dispute (Blue)",
			cardDescription: "Choose another player and count the number of blue location in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",			
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_004"
		},{
			cardTitle: "Dispute (Purple)",
			cardDescription: "Choose another player and count the number of purple location in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",			
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_005"
		},{
			cardTitle: "Dispute (Reactors)",
			cardDescription: "Choose another player and count the number of Power Reactors in each of your Space Stations. If you have more, gain VP equal to the difference. They lose the same amount",
			cardCost: 1,
			cardDeck: "Base",
			type : "Conflict",			
			conflictType: "Dispute",
			cardMax: "3",
			cardId: "B0C_D_006"
*/

var conflictAddition = function(noPlayers,gameDeck){
	var conflictLibrary  = [...cL.cardList.cards.conflict_cards];
	var conflictArray = rF(conflictLibrary).concat(rF(conflictLibrary)).concat(rF(conflictLibrary));
	conflictArray = conflictLibrary.slice(0,3*noPlayers);
	conflictArray = conflictArray.map(function(item){return item.cardId});
	return rF(gameDeck.concat(conflictArray));
}

var conflictResolver = function(card,playerObj,targetplayerObj){
	var playerScoreDelta;
	var targetScoreDelta;
	var conflictDelta;
	var conflictCardObj = cL.getCardObj(card);
	
	switch(card){
		case "B0C_D_001":
			// G
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"G"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;
			break;
		case "B0C_D_002":
			// R
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"R"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;			
			break;
		case "B0C_D_003":
			// Y
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"Y"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;				
			break;			
		case "B0C_D_004":
			// B
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"B"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;				
			break;		
		case "B0C_D_005":
			// P
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"P"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;		
			break;
		case "B0C_D_006":
			// Reactors
			conflictDelta = Math.min(conflictCalc(playerObj.playerStationArray.grid,targetplayerObj.playerStationArray.grid,"X"),conflictCardObj.cardMax);
			targetScoreDelta = (-1)*conflictDelta;
			playerScoreDelta = conflictDelta;					
			break;
		default:
			console.log("Unidentified Conflict Card Attempted - " + card);
			targetScoreDelta = 0;
			playerScoreDelta = 0;
			break;	
	}
	return [playerScoreDelta, targetScoreDelta]
}

module.exports.conflictAddition = conflictAddition;
module.exports.conflictResolver = conflictResolver;

function conflictCalc(playerGrid,otherPlayerGrid,identifier){
	var value = 0;
	var playerCount = 0;
	var otherPlayerCount = 0;

	for(var i = 0; i < playerGrid.length; i++){
		if(identifier == "X" && playerGrid[i][4] == "X"){
			playerCount = playerCount + 1;
		} else if(playerGrid[i][4] == identifier || playerGrid[i].toString().substring(0,8) == "B0R_X_VR" ){
			playerCount = playerCount + 1;
		}
	}
	
	for(var i = 0; i < otherPlayerGrid.length; i++){
		if(identifier == "X" && otherPlayerGrid[i][4] == "X"){
			otherPlayerCount = otherPlayerCount + 1;
		} else if(otherPlayerGrid[i][4] == identifier || otherPlayerGrid[i].toString().substring(0,8) == "B0R_X_VR" ){
			otherPlayerCount = otherPlayerCount + 1;
		}
	}

	if(playerCount > otherPlayerCount){
		value = playerCount - otherPlayerCount;
	}
	
	return value;
}