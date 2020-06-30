var rF = require('./randomFunction');
var cL = require('./cardlibrary');
var cF = require('./cardFunctions');

var objectiveList = [{
    Objective_Title: "First Line of Defense",
    Objective_Description: "Build the most red locations",
    Objective_Points: 5,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_001"
}, {
    Objective_Title: "Accelerated Construction",
    Objective_Description: "Be the first to reach 50 (I) VP (before the end of the 4th year)<br><i>In case more than 1 players reach them at the same round, the bonus goes to the one who went higher - in case of a tie no bonus is given</i>",
    Objective_Points: 4,
    Objective_Set: "Base",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_002"
}, {
    Objective_Title: "Energy Optimisation",
    Objective_Description: "Be the first to have 3 Power Reactors that do not contain any power",
    Objective_Points: 4,
    Objective_Set: "Promo",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_P_001"
}, {
    Objective_Title: "Intergalactic Trade",
    Objective_Description: "Build the most yellow locations",
    Objective_Points: 5,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_003"
}, {
    Objective_Title: "War Preparations",
    Objective_Description: "Be the first player to build 4 different red locations in your station",
    Objective_Points: 4,
    Objective_Set: "Ambassadors",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_A_001"
}, {
    Objective_Title: "Peace Among the Stars",
    Objective_Description: "Build the most green locations",
    Objective_Points: 5,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_004"
}, {
    Objective_Title: "Marvels in Space",
    Objective_Description: "Build the most locations (without counting Power Reactors)<br>x = The difference between the number of locations from the next player",
    Objective_Points: "2X",
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_005"
}, {
    Objective_Title: "Well Organised",
    Objective_Description: "Build the most blue locations",
    Objective_Points: 5,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_006"
}, {
    Objective_Title: "On Budget",
    Objective_Description: "Have the most credits at the end of the game",
    Objective_Points: 3,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_007"
}, {
    Objective_Title: "Grand Attractions",
    Objective_Description: "Build the most purple locations",
    Objective_Points: 5,
    Objective_Set: "Base",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_B_008"
}, {
    Objective_Title: "Fully Operational",
    Objective_Description: "Build at least 12 different Basic Locations<br><i>This objective may be completed by more than one player</i>",
    Objective_Points: 7,
    Objective_Set: "ETA",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: Infinity,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_001"
}, {
    Objective_Title: "Multi-Purpose",
    Objective_Description: "Be the first to build 2 locations of each type<br><i>If on the same turn, more than two players complete this Objective, no bonus is given</i>",
    Objective_Points: 4,
    Objective_Set: "ETA",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: Infinity,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_002"
}, {
    Objective_Title: "Something for Everyone",
    Objective_Description: "Build at least 8 different Special Locations<br><i>This objective may be completed by more than 1 player</i>",
    Objective_Points: 6,
    Objective_Set: "ETA",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: Infinity,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_003"
}, {
    Objective_Title: "No Delays",
    Objective_Description: "Build the most locations with immediate abilities",
    Objective_Points: 5,
    Objective_Set: "ETA",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_004"
}, {
    Objective_Title: "Reach for the Stars",
    Objective_Description: "Build the location with the greatest distance from the Main Reactor",
    Objective_Points: 4,
    Objective_Set: "ETA",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_005"
}, {
    Objective_Title: "Cover All Needs",
    Objective_Description: "Build at least 3 locations of each location type<br><i>This objective may be completed by more than 1 player</i>",
    Objective_Points: 3,
    Objective_Set: "YOP",
    Objective_EG_Mode: false,
    Objective_Claimed_Status: false,
    Objective_Claimees: Infinity,
    Objective_Owner: [],
    Objective_ID: "OBJ_Y_001"
}, {
    Objective_Title: "Energy Efficient",
    Objective_Description: "Build the least power reactors",
    Objective_Points: 4,
    Objective_Set: "ETA",
    Objective_EG_Mode: true,
    Objective_Claimed_Status: false,
    Objective_Claimees: 1,
    Objective_Owner: [],
    Objective_ID: "OBJ_E_006"
}]

function generateObjectives(noPlayers,bannedObjectives){
	var objectivesInGame = [];
	var objectives = objectiveList;
	
	for(var i = 0; i < bannedObjectives.length; i++){
		for(var j = objectives.length - 1; j>=0; j--){
			if(objectives[j].Objective_ID == bannedObjectives[i]){
				objectives = objectives.splice(j,1);
			}
		}
	}
	
	objectives = rF(objectives)
	for(var i = 0; i<noPlayers; i++){
		objectivesInGame.push(objectives[i]);
	}
	
	return	objectivesInGame;	
}


module.exports.generateObjectives = generateObjectives;

function objectiveScorer(playerObjs, objectives){
	for(var i = 0; i<playerObjs.length; i++){
		playerObjs[i].playerData.obj_score = 0;
	}
	for(var i = 0; i <objectives.length; i++){
		switch(objectives[i].Objective_ID){
			case "OBJ_A_001":
				ObjWarPrep(playerObjs, objectives[i]);
				break;
			case "OBJ_B_001": 
				ObjFLOD(playerObjs, objectives[i]);
				break;	
			case "OBJ_B_002": 
				ObjAC(playerObjs, objectives[i]);
				break;
			case "OBJ_B_003":
				ObjIT(playerObjs, objectives[i]);			
				break;	
			case "OBJ_B_004":
				ObjPATS(playerObjs, objectives[i]);				
				break;
			case "OBJ_B_005":
				ObjMIS(playerObjs, objectives[i]);			
				break;					
			case "OBJ_B_006":
				ObjWO(playerObjs, objectives[i]);				
				break;
			case "OBJ_B_007": 
				ObjOB(playerObjs, objectives[i]);	
				break;	
			case "OBJ_B_008": 
				ObjGA(playerObjs, objectives[i]);	
				break;
			case "OBJ_E_001":
				ObjFO(playerObjs, objectives[i]);				
				break;	
			case "OBJ_E_002":
				ObjMP(playerObjs, objectives[i]);			
				break;
			case "OBJ_E_003": 
				ObjSFE(playerObjs, objectives[i]);		
				break;	
			case "OBJ_E_004":
				ObjND(playerObjs, objectives[i]);				
				break;
			case "OBJ_E_005":
				ObjRFTS(playerObjs, objectives[i]);			
				break;
			case "OBJ_E_006":
				ObjEE(playerObjs, objectives[i]);			
				break;				
			case "OBJ_P_001": 
				ObjEO(playerObjs, objectives[i]);					
				break;
			case "OBJ_Y_001": 
				ObjCAN(playerObjs, objectives[i]);		
				break;	
			default:
				break;
		}
		
	}
	for(var i = 0; i<playerObjs.length; i++){
		playerObjs[i].gameData.objectives = objectives;
	}
}

module.exports.objectiveScorer = objectiveScorer;

function ObjWarPrep(playerObjs, objective){
	// Be the first player to build 4 different red locations in your station
	if(objective.Objective_Claimed_Status == false){
		var objTracker = [];
		for(var i = 0; i<playerObjs.length; i++){
			var gridCount = [];
			for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
				if (playerObjs[i].playerStationArray.grid[j][4] == "R" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					gridCount.push(playerObjs[i].playerStationArray.grid[j]);
				}
			}
			gridCount = [...new Set(gridCount)];
			if(gridCount.length >= 4){
				objTracker.push([playerObjs[i].playerData.playerName,i]);
			}
		}
		if(objTracker.length == 1){
			objective.Objective_Claimed_Status = true;
			objective.Objective_Owner = objTracker[0][0];
			playerObjs[objTracker[0][1]].playerData.obj_score = playerObjs[objTracker[0][1]].playerData.obj_score + (objective.Objective_Points);
			var msg = "<span style='color:"+playerObjs[objTracker[0][1]].playerData.color+"'>"+playerObjs[objTracker[0][1]].playerData.playerName+"</span> has achieved the War Preparations Objective!";	
			objective.Objective_Owner = objTracker
		} else if(objTracker.length > 1){
			objective.Objective_Claimed_Status = true;
			var msg = "Multiple players achieved the War Preparations Objective, no points awarded";
		}
		if(objTracker.length >= 1){
			for(var i = 0; i< playerObjs.length; i++){
				playerObjs[i].addGameLogEntry(msg);
			}
		}
	} else {
		if(objective.Objective_Owner.length == 1){
			playerObjs[objective.Objective_Owner[0][1]].playerData.obj_score = playerObjs[objective.Objective_Owner[0][1]].playerData.obj_score + objective.Objective_Points;		
		}
	}
}

function ObjFLOD(playerObjs, objective){
	// Build the most red locations
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "R" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the First Line of Defence Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
	} else {	
		var msg = "Multiple players achieved the First Line of Defence Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}

function ObjAC(playerObjs, objective){
	//Be the first to reach 50 VP (before the end of the 4th year)<br><i>In case more than 1 players reach them at the same round, the bonus goes to the one who went higher - in case of a tie no bonus is given
	if(objective.Objective_Claimed_Status == false && playerObjs[0].gameData.round != false){
		var objTracker = [];
		for(var i = 0; i<playerObjs.length; i++){
			if (playerObjs[i].playerData.curr_score >= 50){
				objTracker.push([i,playerObjs[i].playerData.curr_score]);
			}
		}
		if(objTracker.length == 1){
			objective.Objective_Claimed_Status = true;
			objective.Objective_Owner = playerObjs[objTracker[0][0]].playerData.playerName;
			playerObjs[objTracker[0][0]].playerData.obj_score = playerObjs[objTracker[0][0]].playerData.obj_score + (objective.Objective_Points);
			var msg = "<span style='color:"+playerObjs[objTracker[0][0]].playerData.color+"'>"+playerObjs[objTracker[0][0]].playerData.playerName+"</span> has achieved the Accelerated Construction Objective!";	
			objective.Objective_Owner = objTracker
		} else if(objTracker.length > 1){
			var score = 0;
			var duplicateCheck = false;
			for(var m = 0; m<objTracker.length; m++){
				if(objTracker[m][1] == score){
					duplicateCheck = true;
				} else if(objTracker[m][1] > score){
					score = objTracker[m][1];
					duplicateCheck = false;
					var CheckFlag = objTracker[m][0];
				}
			}
			if(duplicateCheck){
				var msg = "Multiple players achieved the Accelerated Construction Objective, no points awarded";
			} else {
				var msg = "<span style='color:"+playerObjs[CheckFlag].playerData.color+"'>"+playerObjs[CheckFlag].playerData.playerName+"</span> has achieved the Accelerated Construction Objective!";				
			}
			objective.Objective_Claimed_Status = true;
		}
		if(objTracker.length >= 1){
			for(var i = 0; i< playerObjs.length; i++){
				playerObjs[i].addGameLogEntry(msg);
			}
		}
	} else {
		if(objective.Objective_Owner.length == 1){
			playerObjs[objective.Objective_Owner[0][0]].playerData.obj_score = playerObjs[objective.Objective_Owner[0][0]].playerData.obj_score + objective.Objective_Points;		
		}
	}


}

function ObjIT(playerObjs, objective){
	//Build the most yellow locations
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "Y" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Intergalactic Trade Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]]
	} else {	
		var msg = "Multiple players achieved the Intergalactic Trade Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}

function ObjPATS(playerObjs, objective){
	//Build the most green locations
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "G" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Peace Among the Stars Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
	} else {	
		var msg = "Multiple players achieved the Peace Among the Stars Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}

function ObjWO(playerObjs, objective){
	//Build the most blue locations
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "B" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Well Organised Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
	} else {	
		var msg = "Multiple players achieved the Well Organised Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}

function ObjOB(playerObjs, objective){
	//Have the most credits at the end of the game
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		objTracker.push(playerObjs[i].playerData.currency);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the On Budget Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
	} else {	
		var msg = "Multiple players achieved the On Budget Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}

function ObjGA(playerObjs, objective){
	//Build the most purple locations
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "P" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Grand Attractions Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]]
	} else {	
		var msg = "Multiple players achieved the Grand Attractions Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}
}

function ObjFO(playerObjs, objective){
	//Build at least 12 different Basic Locations. This objective may be completed by more than one player
	for(var i = 0; i < playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][2] == "B"){
				count++;
			}
		}
		if(count >= 12){
			playerObjs[i].playerData.obj_score = playerObjs[i].playerData.obj_score + objective.Objective_Points;			
			if(!objective.Objective_Owner.includes([playerObjs[i].playerData.playerName,i])){
				var msg = "<span style='color:"+playerObjs[i].playerData.color+"'>"+playerObjs[i].playerData.playerName+"</span> has achieved the Fully Operational Objective!"
				objective.Objective_Owner.push([playerObjs[i].playerData.playerName,i]);
				for(var j = 0; j< playerObjs.length; j++){
					playerObjs[j].addGameLogEntry(msg);
				}	
			}			
		}
	}	
}	

function ObjRFTS(playerObjs, objective){
	//Build the location with the greatest distance from the Main Reactor
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var maxDistance = 0;
		var playerGrid = playerObjs[i].playerStationArray;
		var MRLocation;
		for(var j = 0; j<playerGrid.grid.length; j++){
			if(playerGrid.grid[j].toString().substring(0,8) == "B0R_X_MR" || playerGrid.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				MRLocation = j;
				break;
			}
		}
		for(var j = 0; j<playerGrid.grid.length; j++){
			var distance = cF.dijkstraAlgo(playerGrid,MRLocation,j);
			if(distance >= maxDistance && distance != Infinity){
				maxDistance = distance;
			}
		}
		objTracker.push(maxDistance);
	}
	var objTracker2 = [...objTracker];
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Reach for the Stars Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]]
	} else {	
		var msg = "Multiple players achieved the Reach for the Stars Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}
}	

function ObjMP(playerObjs, objective){
	//Be the first to build 2 locations of each type. If on the same turn, more than two players complete this Objective, no bonus is given
	if(objective.Objective_Claimed_Status == false){
		var objTracker = [];
		for(var i = 0; i<playerObjs.length; i++){
			var checkFlag = true;
			var count = 0;
			for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
				if(playerObjs[i].playerStationArray.grid[j][4] == "G" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					count = count + 1;
				}
			}
			if(count < 2){
				checkFlag = false;
			}
			count = 0;
			for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
				if(playerObjs[i].playerStationArray.grid[j][4] == "R" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					count = count + 1;
				}
			}
			if(count < 2){
				checkFlag = false;
			}			
			count = 0;		
			for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
				if(playerObjs[i].playerStationArray.grid[j][4] == "Y" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					count = count + 1;
				}
			}
			if(count < 2){
				checkFlag = false;			
			}			
			count = 0;		
			for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
				if(playerObjs[i].playerStationArray.grid[j][4] == "B" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					count = count + 1;
				}
			}
			if(count < 2){
				checkFlag = false;	
			}			
			count = 0;		
			for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
				if(playerObjs[i].playerStationArray.grid[j][4] == "P" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
					count = count + 1;
				}
			}
			if(count < 2){
				checkFlag = false;
			}			
			objTracker.push(checkFlag);
		}
		var resultCount = 0;
		for(var i = 0; i<objTracker.length; i++){
			if(objTracker[i] == true){
				resultCount++
			}
		}	
		if(resultCount == 1){
			objective.Objective_Claimed_Status = true;
			var playerIndex = objTracker.indexOf(true);
			objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + (objective.Objective_Points);
			var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Multi-Purpose Objective!";	
		} else if (resultCount > 1){
			objective.Objective_Claimed_Status = true;
			var msg = "Multiple players achieved the Multi-Purpose Objective, no points awarded";
		} 
		if(resultCount >= 1){
			for(var i = 0; i< playerObjs.length; i++){
				playerObjs[i].addGameLogEntry(msg);
			}
		}
	} else {
		if(objective.Objective_Owner.length == 1){
			playerObjs[objective.Objective_Owner[0][0]].playerData.obj_score = playerObjs[objective.Objective_Owner[0][0]].playerData.obj_score + (objective.Objective_Points);
		}
	}
}	

function ObjSFE(playerObjs, objective){
	//Build at least 8 different Special Locations. This objective may be completed by more than 1 player
	for(var i = 0; i < playerObjs.length; i++){
		var sGrid = [];
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][2] == "S"){
				sGrid.push(playerObjs[i].playerStationArray.grid[j]);
			}
		}
		if([...new Set(sGrid)].length >= 8){
			playerObjs[i].playerData.obj_score = playerObjs[i].playerData.obj_score + objective.Objective_Points;			
			if(!objective.Objective_Owner.includes([playerObjs[i].playerData.playerName, i])){
				var msg = "<span style='color:"+playerObjs[i].playerData.color+"'>"+playerObjs[i].playerData.playerName+"</span> has achieved the Something For Everyone Objective!"
				objective.Objective_Owner.push([playerObjs[i].playerData.playerName,i]);
				for(var j = 0; j< playerObjs.length; j++){
					playerObjs[j].addGameLogEntry(msg);
				}	
			}			
		}
	}	
}

function ObjND(playerObjs, objective){
	//Build the most locations with immediate abilities	
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if(cL.getCardObj(playerObjs[i].playerStationArray.grid[j])){
				if (cL.getCardObj(playerObjs[i].playerStationArray.grid[j]).cardEndGame == false && playerObjs[i].playerStationArray.grid[j][4] != "X"){
					count ++;
				}
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the No Delays Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]]
	} else {	
		var msg = "Multiple players achieved the No Delays Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}
}

function ObjMIS(playerObjs, objective){
	//Build the most locations (without counting Power Reactors), scores 2x. x = The difference between the number of locations from the next player
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j] && playerObjs[i].playerStationArray.grid[j][4] != "X"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort().reverse();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + 2*(objTracker2[0] - objTracker2[1]);
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Marvels in Space Objective!"
		if(objective.Objective_Owner != [[playerObjs[playerIndex].playerData.playerName,playerIndex]]){
			for(var i = 0; i< playerObjs.length; i++){
				playerObjs[i].addGameLogEntry(msg);
				objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]]
			}
		}			
	} else {	
		var msg = "Multiple players achieved the Marvels in Space Objective, no points awarded"
		objective.Objective_Owner = [];
		for(var i = 0; i< playerObjs.length; i++){
			playerObjs[i].addGameLogEntry(msg);
		}	
	}
}	

function ObjEO(playerObjs, objective){
	//Be the first to have 3 Power Reactors that do not contain any power	
	if(objective.Objective_Claimed_Status == false){
		var objTracker = [];
		for(var i = 0; i<playerObjs.length; i++){
			var gridCount = [];
			for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
				if (playerObjs[i].playerStationArray.grid[j][4] == "X" && playerObjs[i].playerStationArray.grid[j][8] == "0"){
					gridCount.push(playerObjs[i].playerStationArray.grid[j]);
				}
			}
			if(gridCount.length >= 3){
				objTracker.push([playerObjs[i].playerData.playerName,i]);
			}
		}
		if(objTracker.length == 1){
			objective.Objective_Claimed_Status = true;
			objective.Objective_Owner = objTracker[0][0];
			playerObjs[objTracker[0][1]].playerData.obj_score = playerObjs[objTracker[0][1]].playerData.obj_score + (objective.Objective_Points);
			var msg = "<span style='color:"+playerObjs[objTracker[0][1]].playerData.color+"'>"+playerObjs[objTracker[0][1]].playerData.playerName+"</span> has achieved the Energy Optimisation Objective!";	
			objective.Objective_Owner = objTracker
		} else if(objTracker.length > 1){
			objective.Objective_Claimed_Status = true;
			var msg = "Multiple players achieved the Energy Optimisation Objective, no points awarded";
		}
		if(objTracker.length >= 1){
			for(var i = 0; i< playerObjs.length; i++){
				playerObjs[i].addGameLogEntry(msg);
			}
		}
	} else {
		if(objective.Objective_Owner.length == 1){
			playerObjs[objective.Objective_Owner[0][1]].playerData.obj_score = playerObjs[objective.Objective_Owner[0][1]].playerData.obj_score + objective.Objective_Points;		
		}
	}
}

function ObjCAN(playerObjs, objective){
	//Build at least 3 locations of each location type. This objective may be completed by more than 1 player
	for(var i = 0; i < playerObjs.length; i++){
		var checkFlag = true;
		var count = 0;
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][4] == "G" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count++;
			}
		}
		if(count < 3){
			checkFlag = false;
		}		
		count = 0;
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][4] == "R" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count++;
			}
		}
		if(count < 3){
			checkFlag = false;
		}		
		count = 0;		
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][4] == "Y" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count++;
			}
		}
		if(count < 3){
			checkFlag = false;
		}		
		count = 0;		
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][4] == "B" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count++;
			}
		}
		if(count < 3){
			checkFlag = false;
		}
		count = 0;		
		for(var j = 0; j < playerObjs[i].playerStationArray.grid.length; j++){
			if(playerObjs[i].playerStationArray.grid[j][4] == "P" || playerObjs[i].playerStationArray.grid[j].toString().substring(0,8) == "B0R_X_VR"){
				count++;
			}
		}
		if(count < 3){
			checkFlag = false;
		}		
		if(checkFlag){
			playerObjs[i].playerData.obj_score = playerObjs[i].playerData.obj_score + objective.Objective_Points;			
			if(!objective.Objective_Owner.includes([playerObjs[i].playerData.playerName,i])){
				var msg = "<span style='color:"+playerObjs[i].playerData.color+"'>"+playerObjs[i].playerData.playerName+"</span> has achieved the Cover All Needs Objective!"
				objective.Objective_Owner.push([playerObjs[i].playerData.playerName,i]);
				for(var j = 0; j< playerObjs.length; j++){
					playerObjs[j].addGameLogEntry(msg);
				}	
			}			
		}
	}
}

function ObjEE(playerObjs, objective){
	//Build the least power reactors
	var objTracker = [];
	for(var i = 0; i<playerObjs.length; i++){
		var count = 0;
		for(var j = 0; j<playerObjs[i].playerStationArray.grid.length; j++){
			if (playerObjs[i].playerStationArray.grid[j][4] == "X"){
				count ++;
			}
		}
		objTracker.push(count);
	}
	var objTracker2 = [...objTracker]
	objTracker2.sort();
	if(objTracker2[0] != objTracker2[1]){
		var playerIndex = objTracker.indexOf(objTracker2[0]);
			playerObjs[playerIndex].playerData.obj_score = playerObjs[playerIndex].playerData.obj_score + objective.Objective_Points;
		var msg = "<span style='color:"+playerObjs[playerIndex].playerData.color+"'>"+playerObjs[playerIndex].playerData.playerName+"</span> has achieved the Energy Efficient Objective!"
		objective.Objective_Owner = [[playerObjs[playerIndex].playerData.playerName,playerIndex]];
	} else {	
		var msg = "Multiple players achieved the Energy Efficient Objective, no points awarded"
		objective.Objective_Owner = [];
	}
	for(var i = 0; i< playerObjs.length; i++){
		playerObjs[i].addGameLogEntry(msg);
	}	
}