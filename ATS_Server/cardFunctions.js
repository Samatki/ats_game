function placementScoringCost(playerObjs,j,data){
	for(var i = 0; i<data.updatedGrid.length; i++){
		var cardIndex = data.updatedGrid[0];
		var cardid = data.updatedGrid[1];
		
		var cardObj = getCardObj("cardid")
		
		var checkedGrid = playerObjs[j].playerStationArray.grid;
		var gridX = playerObjs[j].playerStationArray.parameters.x;
		
		if(cardid[2] != "R"){
				playerObjs[j].currentPointsChange(placementScoring(cardObj,checkedGrid,gridX,cardIndex,cardid));
				playerObjs[j].currencyChange(placementCurrencyGain(cardObj,checkedGrid,gridX,cardIndex,cardid));
				playerObjs[j].currencyChange((-1)*cardObj.cardCreditCost);
		}
	}
}

function placementScoring(playedCardData){
	var cardMode = playedCardData.cardEndGame;
	var cardIGScore = playedCardData.im_score;
	var cardId = playedCardData.cardId;

	if(cardMode){
		cardScore = cardIGScore;
	}else{
		cardScore = cardIGScoring(cardId,cardIGScore)
	}
	return cardScore;
}

function placementCurrencyGain(cardid,cardIndex){
	var currencyDelta = 0;
	if(cardid == "B0B_Y_C"){
		currencyDelta = customsCurrency(cardIndex);
	} else if (cardid = "B0B_Y_EM"){
		currencyDelta = energyMarketCurrency(cardIndex)
	}
}

function cardIGScoring(cardid,cardIGScore,playerGrid,excess_energy_count = 0){
	var deltaScore = 0;
	switch(cardId){
		case "B0B_R_SG":
			deltaScore = shieldGeneratorScoring(excess_energy_count);
			break;
		case "B0B_P_G":
			deltaScore = gardenScoring(placedCardindex);
			break;
		case "B0B_P_HDA":
			deltaScore = hgaScoring(placedCardindex);
			break;
		case "B0B_P_R":
			deltaScore = restaurantScoring();
			break;
		case "B0B_G_AQ":
			deltaScore = aqScoring(placedCardindex);
			break;			
		case "B0B_G_EO":
			deltaScore = eoScoring(chosenPlayerStatus,chosenPlayer);
			break;
		case "B0B_B_CQ":
			deltaScore = cqScoring(placedCardIndex);
			break;
		case "B0B_B_DB":
			deltaScore = dbScoring(placedCardIndex);
			break;	
		case "B0B_B_MF":
			deltaScore = medicalFacilityScoring(placedCardIndex);
			break;
		case "B0B_B_TP":
		case "B0S_B_TP":
			deltaScore = transportationPlatformScoring();
			break;
		case "B0S_R_HIC":
			deltaScore = hicScoring();
			break;
		case "B0S_R_PTA":
			deltaScore = ptaScoring();
			break;
		case "B0S_Y_TUH":
			deltaScore = tuhScoring();
			break;
		case "B0S_P_SA":
			deltaScore = sportsArenaScoring();
			break;
		case "B0S_G_GRC" :
			// COMPLICATED 
			break;
		case "B0S_G_SoAC" :
			// COMPLICATED 
			break;
		case "B0S_B_BR" :
			deltaScore = backupReactorScoring(placedCardIndex);
			break;
		case "B0S_B_CH"
			deltaScore = cargoHoldScoring(placedCardIndex);
			break;
		default:
			break;
	}	
	return cardIGScore + deltaScore;
}

function cardEGScoring(cardId,playerGrid,cardIndex,gridX){
	var deltaScore = 0;
	switch(cardId){
		case "B0B_R_T":
		case "B0S_R_T":
			deltaScore = turretScoring();
			break;
		case "B0B_Y_AB":
			deltaScore = bazaarScoring(placedCardindex);
			break;
		case "B0B_G_CR":
			deltaScore = councilRoomScoring();
			break;	
		case "B0B_B_CC":
			deltaScore = commandCentreScoring();
			break;
		case "B0B_B_SS":
			deltaScore = securityStationScoring(placedCardIndex);
			break;
		case "B0S_R_AFB":
			deltaScore = afbScoring();
			break;
		case "B0S_R_WR":
			deltaScore = warRoomScoring();
			break;
		case "B0S_P_GR":
			deltaScore = galacticResortScoring();
			break;
		case "B0S_P_OH":
			deltaScore = operaHouseScoring();
			break;	
		case "B0S_G_AT":
			deltaScore = alienTempleScoring();
			break;
		case "B0S_G_AH":
			deltaScore = allianceHQScoring();
			break;
		case "B0S_B_CB":
			deltaScore = communicationsBeaconScoring(placedCardIndex);
			break;
		case "B0S_B_LSS":
			deltaScore = lifeSupportSystemsScoring();
			break;					
		default:
			break;
	}	
	return deltaScore;
}

function locationCount(){
	locType = "colour", "named"
}

function shieldGeneratorScoring(excess_energy_count){
	var deltaScore = Math.min(2*excess_energy_count,4);
	return deltaScore;
}

function energyMarketCurrency(cardIndex){
	// for each power reactor on station, +1 currency, max 3
}

function customsCurrency(cardIndex){
	// for each adjacent yellow location, +1 currency
}

function gardenScoring(placedCardindex){
	//+1VP if there is no red location within 3
	//+1 VP if there is no power station within 2
}

function hgaScoring(placedCardindex){
	//+1VP for each adjacent location
}

function restaurantScoring(){
	//+1VP for every location type in the station
}

function aqScoring(placedCardindex){
	//+1VP if next to green location
	//OR
	//+2 if next to EO;
}

function eoScoring(chosenPlayerStatus,chosenPlayer){
// you gain +2, chosen player gains +1;
}

function cqScoring(placedCardIndex){
	//+2 if placed next to another Crew Quarters
}

function dbScoring(placedCardIndex){
	//+1VP for each location BETWEEN docking bay and main reactor, max +4VP
}

function medicalFacilityScoring(placedCardIndex){
	// +1 for each power reactor within 3 of medical facility (max +4)
}

function transportationPlatformScoring(){
	// +1 for each transporation platform on station (including self, include S card);
}

function hicScoring(){
	//+2 if there are 3 or more power reactors on station
}

function ptaScoring(placedCardindex){
	//+1VP if next to red location
	//OR
	//+2 if next to FLB;
}

function tuhScoring(){
// +1 for each yellow location on the station, max 5
}

function sportsArenaScoring(){
	//+1 for each year remaining
}

function backupReactorScoring(placedCardIndex){
	// add one energy to main reactor;
	// +1 if placed next to main reactor;
}

function cargoHoldScoring(placedCardIndex){
	//+1VP if next to blue location
	//OR
	//+2 if next to docking bay;
}

function turretScoring(){
// +1 for every turret on the station
}

function bazaarScoring(placedCardIndex){
	// + 2 if there are 3 or more Green locations within 2
}

function councilRoomScoring(){
	//+1 for each other station that does not contain a council room
}

function commandCentreScoring(){
	//+1 for each blue location on the station, max +8
}

function securityStationScoring(placedCardIndex){
	//+1 if security station has 4 adjacent locations
}

function afbScoring(){
	// +2 if you have more red locations than green ones
}

function warRoomScoring(){
	// + 1 for each red location on the station, max +5
}

function galacticResortScoring(){
	// + 1 for each purple location on the station, max +5
}

function operaHouseScoring(){
	// + 1 for different adjacent location type
}

function alienTempleScoring(){
	// + 1 for each green location on the station, max +5
}

function alienHQScoring(){
	// + 1 for each station with more red locations than yours
}

function communicationsBeaconScoring(placedCardIndex){
	// +2 if communications beacon is the location furthest from the main reactor
}

function lifeSupportSystems(){
	// +1 for every three locations in the station
}

module.exports.placementScoringCost = placementScoringCost;