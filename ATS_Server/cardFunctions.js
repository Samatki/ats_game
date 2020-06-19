var reactorArray = ["B0R_X_MR4","B0R_X_MR3","B0R_X_MR2","B0R_X_MR1","B0R_X_MR0","B0R_X_PR4","B0R_X_PR3","B0R_X_PR2","B0R_X_PR1","B0R_X_PR0","B0R_X_VR4","B0R_X_VR3","B0R_X_VR2","B0R_X_VR1","B0R_X_VR0","B0R_X_ER4","B0R_X_ER3","B0R_X_ER2","B0R_X_ER1","B0R_X_ER0"];
var cL = require('./cardlibrary');

var placementScoringCost = function(playerObjs,j,data){
	for(var i = 0; i<data.updatedGrid.length; i++){
		var cardIndex = data.updatedGrid[i][0];
		var cardid = data.updatedGrid[i][1];
		var cardObj = cL.getCardObj(cardid);
		if(cardid[2] != "R"){
			playerObjs[j].currentPointsChange(placementScoring(cardObj,playerObjs[j],cardIndex));
			if(cardid == "B0B_Y_C" || cardid == "B0B_Y_EM"){
				playerObjs[j].currencyChange(placementCurrencyGain(cardid,cardIndex,playerObjs[j]));
			} else if (cardid == "B0S_Y_GB"){
				playerObjs[j].currencyYearlyChange(1);
			}
			playerObjs[j].currencyChange((-1)*cardObj.cardCreditCost);
		}
	}
}

function placementScoring(cardObj,playerObj,cardIndex,cardid){
	var cardMode = cardObj.cardEndGame;
	var cardIGScore = cardObj.im_score;
	var cardId = cardObj.cardId;
	var cardScore = 0;

	if(cardMode){
		cardScore = cardIGScore;
	}else{
		cardScore = cardIGScoring(playerObj,cardId,cardIGScore,cardIndex);
	}
	console.log(playerObj.playerData.playerName + ": " + cardObj.cardTitle + "  - Placement Score  = " + cardScore);
	return cardScore;
}

function placementCurrencyGain(cardid,cardIndex,playerObj){
	var currencyDelta = 0;
	var gridX = playerObj.playerStationArray.parameters.x;
	var gridA = playerObj.playerStationArray;
	var grid = gridA.grid;
	if(cardid == "B0B_Y_C"){
		currencyDelta = customsCurrency(cardIndex, gridX, grid);
	} else if (cardid = "B0B_Y_EM"){
		currencyDelta = energyMarketCurrency(cardIndex,grid)
	} else {
		currencyDelta = 0;
	}
	return currencyDelta;
}

function cardIGScoring(playerObj,cardId,cardIGScore,cardIndex){
	var deltaScore = 0;
	var gridX = playerObj.playerStationArray.parameters.x;
	var gridA = playerObj.playerStationArray;
	var grid = gridA.grid;
	switch(cardId){
		case "B0B_P_G":
			deltaScore = gardenScoring(gridA,cardIndex);
			break;
		case "B0B_P_HDA":
			deltaScore = hgaScoring(cardIndex, gridX, grid);
			break;
		case "B0B_P_R":
			deltaScore = restaurantScoring(grid);
			console.log("Restaurant score " + deltaScore)
			break;
		case "B0B_G_AQ":
			deltaScore = aqScoring(cardIndex, gridX, grid);
			break;			
/*
		case "B0B_G_EO":
			deltaScore = eoScoring(chosenPlayerStatus,chosenPlayer);
			break;
*/
		case "B0B_B_CQ":
			deltaScore = cqScoring(cardIndex, gridX, grid);
			break;
		case "B0B_B_DB":
			deltaScore = dbScoring(gridA,cardIndex);
			break;	
		case "B0B_B_MF":
			deltaScore = medicalFacilityScoring(gridA,cardIndex);
			break;
		case "B0B_B_TP":
		case "B0S_B_TP":
			deltaScore = transportationPlatformScoring(grid);
			break;
		case "B0S_R_HIC":
			deltaScore = hicScoring(grid);
			break;
		case "B0S_R_PTA":
			deltaScore = ptaScoring(cardIndex, gridX, grid);
			break;
		case "B0S_Y_TUH":
			deltaScore = tuhScoring(grid);
			break;
		case "B0S_P_SA":
			deltaScore = sportsArenaScoring(playerObj);
			break;
		case "B0S_G_GRC" :
			// COMPLICATED			
			break;
		case "B0S_G_SoAC" :
			// COMPLICATED 
			break;
		case "B0S_B_BR" :
			deltaScore = backupReactorScoring(cardIndex, gridX, grid);
			break;
		case "B0S_B_CH" :
			deltaScore = cargoHoldScoring(cardIndex, gridX, grid);
			break;
		default:
			break;
	}	
	return cardIGScore + deltaScore;
}
//cardId,cardIndex,this.playerStationArray,this.otherPlayersData
var cardEGScoring = function(cardId,cardIndex,playerStationArray,otherPlayersData){
	var deltaScore = 0;
//	console.log('*****');
//	console.log(playerStationArray);
	var gridX = playerStationArray.parameters.x;
	var gridA = playerStationArray;
	var grid = gridA.grid;
	
	switch(cardId){
		case "B0B_R_T":
		case "B0S_R_T":
			deltaScore = turretScoring(grid,cardIndex);
			break;
		case "B0B_Y_AB":
			deltaScore = bazaarScoring(gridA,cardIndex);
			break;
		case "B0B_G_CR":
			deltaScore = councilRoomScoring(otherPlayersData.otherPlayers);
			break;	
		case "B0B_B_CC":
			deltaScore = commandCentreScoring(grid);
			break;
		case "B0B_B_SS":
			deltaScore = securityStationScoring(cardIndex, gridX, grid);
			break;
		case "B0S_R_AFB":
			deltaScore = afbScoring(grid);
			break;
		case "B0S_R_WR":
			deltaScore = warRoomScoring(grid);
			break;
		case "B0S_P_GR":
			deltaScore = galacticResortScoring(grid);
			break;
		case "B0S_P_OH":
			deltaScore = operaHouseScoring(cardIndex, gridX, grid);
			break;	
		case "B0S_G_AT":
			deltaScore = alienTempleScoring(grid);
			break;
		case "B0S_G_AH":
			deltaScore = allianceHQScoring(grid,otherPlayersData.otherPlayers);
			break;
		case "B0S_B_CB":
			deltaScore = communicationsBeaconScoring(cardIndex,gridA,cardIndex);
			break;
		case "B0S_B_LSS":
			deltaScore = lifeSupportSystemsScoring(grid);
			break;					
		default:
			break;
	}	
	return deltaScore;
}

/* Handled Elsewhere
function shieldGeneratorScoring(excess_energy_count){
	var deltaScore = Math.min(2*excess_energy_count,4);
	return deltaScore;
}
*/
function energyMarketCurrency(cardIndex,grid){
	// for each power reactor on station, +1 currency, max 3
	var count = 0;
	for(var j = 0; j<grid.length; j++){
		for(var i = 0; i<reactorArray.length; i++){
			if(grid[j] == reactorArray[i]){
				count = count + 1;
			}
			if(count>=3){
				break;
			}
		}
		if(count>=3){
			break;
		}
	}
	return(Math.min(count,3));
}

function customsCurrency(cardIndex, gridX, grid){
	// for each adjacent yellow location, +1 currency
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	var count = 0;
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]][5] == "Y" || grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return count;
}

function gardenScoring(gridA,startIndex){
	//+1VP if there is no red location within 3
	//+1 VP if there is no power station within 2
	//Note: gridA is playerStationArray
	var count = 2;
	for(var i = 0; i < gridA.grid.length; i++){
		if(gridA.grid[i][5] == "R" || gridA.grid[i].toString().substring(0,8) == "B0R_X_VR"){
			if(dijkstraAlgo(gridA,startIndex,i)<=3){
				count = count - 1;
				break;
			}
		}
	}
	for(var i = 0; i < gridA.grid.length; i++){
		if(gridA.grid[i][2] == "R"){
			if(dijkstraAlgo(gridA,startIndex,i)<=2){
				count = count - 1;
				break;
			}
		}
	}
	return count;	
}

function hgaScoring(cardIndex, gridX, grid){
	//+1VP for each adjacent location
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	var count = 0;
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]]){
		count = count + 1;
		}
	}
	return count;
}

function restaurantScoring(grid){
	//+1VP for every location type in the station
	var count = 0;
	var reducedGrid = grid.map(function(item){
		if(item){
			if (item.substring(0,8) == "B0R_X_VR"){
				count = 5;
			} else if (item){
				return item[4];
			} else {
				return null
			}
		}
	});
	if(count == 5){
		return 5;
	} else {
		reducedGrid = [...new Set(reducedGrid)];
		reducedGrid = reducedGrid.filter(function(item){
			if(item != "X" && item != null){
				return item;
			}
		});
		return Math.min(reducedGrid.length,5);
	}
}

function aqScoring(cardIndex, gridX, grid){
	//+1VP if next to green location
	//OR
	//+2 if next to EO;
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]][4] == "G" || grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR"){
			count = 1;
			break;
		}
	}
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]] == "B0B_G_EO"){
			count = 2;
			break;
		}
	}
	return count;
}
/*
function eoScoring(chosenPlayerStatus,chosenPlayer){
// you gain +2, chosen player gains +1;
}
*/
function cqScoring(cardIndex, gridX, grid){
	//+2 if placed next to another Crew Quarters
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);	
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]] == "B0B_B_CQ"){
			count = 2;
			break;
		}
	}
	return count;
}

function dbScoring(gridA,startIndex){
	//+1VP for each location BETWEEN docking bay and main reactor, max +4VP
	var mainIndex = null;
	for(var i = 0; i<gridA.grid.length; i++){
		if(gridA.grid[i].toString().substring(0,8) == "B0R_X_MR" || gridA.grid[i].toString().substring(0,8) == "B0R_X_VR"){
			mainIndex = i;
			break;
		}
	}
	var distance = dijkstraAlgo(gridA,startIndex,mainIndex) - 1;
	return Math.min(distance, 4);
}

function medicalFacilityScoring(gridA,startIndex){
	// +1 for each power reactor within 3 of medical facility (max +4)
	var powerIndeces = [];
	var grid = gridA.grid;
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "X"){
			powerIndeces.push(i);
		}
	}
	
	for(var i = 0; i<powerIndeces.length; i++){
		if(dijkstraAlgo(gridA,startIndex,powerIndeces[i])<=3){
			count = count + 1;
		}
	} 
	return Math.min(count,4);
}

function transportationPlatformScoring(grid){
	// +1 for each transporation platform on station (including self, include S card);
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i] == "B0B_B_TP" || grid[i] == "B0S_B_TP"){
			count = count + 1;
		}
	}
	return count;
}

function hicScoring(grid){
	//+2 if there are 3 or more power reactors on station
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "X"){
			count = count + 1;
		}
	}
	if(count >= 3){
		return 2
	} else {
		return 0
	}
}

function ptaScoring(cardIndex, gridX, grid){
	//+1VP if next to red location
	//OR
	//+2 if next to FLB;
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]][4] == "R" || grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR"){
			count = 1;
			break;
		}
	}
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]] == "B0B_R_FLB"){
			count = 2;
			break;
		}
	}
	return count;
}

function tuhScoring(grid){
// +1 for each yellow location on the station, max 5
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][5] == "Y" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return Math.min(count,5);
}

function sportsArenaScoring(playerObj){
	//+1 for each year remaining
	return 4 - playerObj.gameData.turn;
}

function backupReactorScoring(cardIndex, gridX, grid){
	// add one energy to main reactor;
	// +1 if placed next to main reactor;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR" || grid[neighbours[i]].toString().substring(0,8) == "B0R_X_MR"){
			count = 1;
			break;
		}
	}
	return count;
}

function cargoHoldScoring(cardIndex, gridX, grid){
	//+1VP if next to blue location
	//OR
	//+2 if next to docking bay
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]][4] == "B" || grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR"){
			count = 1;
			break;
		}
	}
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]] == "B0B_B_DB"){
			count = 2;
			break;
		}
	}
	return count;
}

function turretScoring(grid,cardIndex){
// +1 for every other turret on the station
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(i != parseInt(cardIndex)){
			if(grid[i] == "B0B_R_T" || grid[i] == "B0S_R_T" ){
				count = count + 1;
			}
		}
	}
	return count;
}

function bazaarScoring(gridA,startIndex){
	// + 2 if there are 3 or more Green locations within 2
	var count = 0;
	for(var i = 0; i < gridA.grid.length; i++){
		if(gridA.grid[i][4] == "G"){
			if(dijkstraAlgo(gridA,startIndex,i)<=2){
				count = count + 1;
			}
		}
	}
	if(count>=3){
		return 2;
	}else{
		return 0;
	}
}

function councilRoomScoring(otherPlayers){
	//+1 for each other station that does not contain a council room
	var count = otherPlayers.length;
	for(var i = 0; i < otherPlayers.length; i++){
		for(var j = 0; j < otherPlayers[i].playerStationArray.grid.length; j++){
			if(otherPlayers[i].playerStationArray.grid[j] == "B0B_G_CR"){
				count = count - 1;
				break;
			} 
		}
	}
	return count;
}

function commandCentreScoring(grid){
	//+1 for each blue location on the station, max +8
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "B" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return Math.min(count,8);
}

function securityStationScoring(cardIndex, gridX, grid){
	//+1 if security station has 4 adjacent locations
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i<neighbours.length; i++){
		if(grid[neighbours[i]]){
			count = count + 1;
		}
	}
	if(count == 4){
		return 1;
	} else {
		return 0;
	}
}

function afbScoring(grid){
	// +2 if you have more red locations than green ones
	var gcount = 0;
	var rcount = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "G"){
			gcount = gcount + 1;
		} 		
		if(grid[i][4] == "R"){
			rcount = rcount + 1;
		}
	}
	if(rcount > gcount){
		return 2;
	} else {
		return 0;
	}
}

function warRoomScoring(grid){
	// + 1 for each red location on the station, max +5
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "R" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return Math.min(count,5);
}

function galacticResortScoring(grid){
	// + 1 for each purple location on the station, max +5
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "P" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return Math.min(count,5);	
}

function operaHouseScoring(cardIndex, gridX, grid){
	// + 1 for different adjacent location type
	var typeGrid = ["R","G","B","P","Y"];
	var count = 0;
	var neighbours = neighbourCheck(cardIndex, gridX, grid.length);
	for(var i = 0; i < neighbours.length; i++){
		if(grid[neighbours[i]].toString().substring(0,8) == "B0R_X_VR"){
			return 5;
		} 
	}
	for(var j = 0; j<typeGrid.length; j++){
		for(var i = 0; i < neighbours.length; i++){
			if(grid[neighbours[i]][4] == typeGrid[j]){
				count = count + 1;
				break;
			} 
		}
	}
	return count;
}

function alienTempleScoring(grid){
	// + 1 for each green location on the station, max +5
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "G" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			count = count + 1;
		}
	}
	return Math.min(count,5);	
}

function allianceHQScoring(grid,otherPlayers){
	// + 1 for each station with more red locations than yours
	var owncount = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i][4] == "R" || grid[i].toString().substring(0,8) == "B0R_X_VR"){
			owncount = owncount + 1;
		}
	}
	var otherPlayerCount = otherPlayers.length;
	for(var i = 0; i < otherPlayerCount; i++){
		var redcounter = 0;
		for(var j = 0; j < otherPlayers[i].playerStationArray.grid.length; j++){
			if(otherPlayers[i].playerStationArray.grid[j][4] == "R" || otherPlayers[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				redcounter = redcounter + 1;
			}
			if(redcounter > owncount){
				otherPlayerCount = otherPlayerCount - 1;
				break;
			}
		}
	}
	return otherPlayerCount;
}

function communicationsBeaconScoring(placedCardIndex,gridA,startIndex){
	// +2 if communications beacon is the location furthest from the main reactor;
	var mainIndex = null;
	for(var i = 0; i<gridA.grid.length; i++){
		if(gridA.grid[i].toString().substring(0,8) == "B0R_X_MR" || gridA.grid[i].toString().substring(0,8) == "B0R_X_VR"){
			mainIndex = i;
			break;
		}
	}	
	var commsdistance = dijkstraAlgo(gridA,startIndex,mainIndex);
	var distanceArray = [];
	var check = true;
	for(var i = 0; i<gridA.grid.length; i++){
		if(gridA.grid[i]){
			var distance = dijkstraAlgo(gridA,i,mainIndex);
			if(distance !=Infinity && distance > commsdistance){
				check = false;
				break;
			}
		}
	}
	if(check){
		return 2;
	} else {
		return 0;
	}	
}

function lifeSupportSystemsScoring(grid){
	// +1 for every three locations in the station
	var count = 0;
	for(var i = 0; i<grid.length; i++){
		if(grid[i]){
			count = count + 1;
		}
	}
	return Math.floor(count/3);	
}

module.exports.placementScoringCost = placementScoringCost;
module.exports.cardEGScoring = cardEGScoring;

//findNExtMinCell -> neighbourCheck -> +1 to currentCell Value, update neighbours if less than their current. -> mark currentCell as visited -> FINISH CRITERIA OR REPEAT.

// **************** DIJKSTRA ALGO **************//

function dijkstraAlgo(gridA,startIndex,finishIndex){
	var visitedFlag = true;
	var reachedFlag = true;

	var dijkstraGrid = gridA.grid.map(function(x, i){
			if(x){
				return [i,false,Infinity]
			} else {
				return [i,true,Infinity]
			}
		});
		
	var pathLength = 1;
	
	dijkstraGrid[startIndex][2] = 0;
	dijkstraGrid[startIndex][1] = false;
	
	while (visitedFlag && reachedFlag){

		var currentCell = findNextMinCell(dijkstraGrid);
		
		if(currentCell == null){return Infinity}
		dijkstraGrid[currentCell][1] = true;
		
		var currentCellValue = dijkstraGrid[currentCell][2];
		var neighbourInspectValue = currentCellValue + pathLength;
				
		var neighbours = neighbourCheck(currentCell,gridA.parameters.x,dijkstraGrid.length);

		for(var i = 0; i< neighbours.length; i++){
			if(dijkstraGrid[neighbours[i]][1] == false && dijkstraGrid[neighbours[i]][2] > neighbourInspectValue){
				dijkstraGrid[neighbours[i]][2] = neighbourInspectValue;
			}
		}
		if (findNextMinCell(dijkstraGrid) == finishIndex){
			reachedFlag = false;
		}else{
			for(var i = 0; i < dijkstraGrid.length; i++){
				if(dijkstraGrid[i][1]){continue}else{break} 
				visitedFlag = false;
			} 
		}	
	}
	return dijkstraGrid[finishIndex][2];
}

function findNextMinCell(arr) {
//	console.log(arr);
	var filteredArr = arr.filter(function(item){if(item[1] != true){return item}});
	if(filteredArr.length == 0){return null};
	var kArray = filteredArr.map(function(item2){return item2[2]});
	let i = kArray.indexOf(Math.min(...kArray));
	return filteredArr[i][0]
}

function neighbourCheck(currentCell, gridX, gridSize){
	if (parseInt(currentCell) % parseInt(gridX) == parseInt(gridX) - 1){
		var neighbourGrid = [
		parseInt(currentCell) - parseInt(gridX),
		parseInt(currentCell) - 1,
		parseInt(currentCell) + parseInt(gridX)
		];
	} else if (parseInt(currentCell) % parseInt(gridX) == 0){
		var neighbourGrid = [
		parseInt(currentCell) - parseInt(gridX),
		parseInt(currentCell) + 1,
		parseInt(currentCell) + parseInt(gridX)
		];
	} else {
		var neighbourGrid = [
		parseInt(currentCell) - parseInt(gridX),
		parseInt(currentCell) - 1,
		parseInt(currentCell) + 1,
		parseInt(currentCell) + parseInt(gridX)
		];
	}
//	console.log(neighbourGrid);
	neighbourGrid = neighbourGrid.filter(item => item >= 0);
	neighbourGrid = neighbourGrid.filter(item => item < parseInt(gridSize));
//	console.log(neighbourGrid);
	return neighbourGrid;
}

