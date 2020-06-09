//	var cardArrayDijkstra = playerObj.playerStationArray;

function getAvailablePowerIndeces(arrayGrid, placedCardLocation){
	var powerCount = 0;
	var powerPlacedArray = [];
	var cardArray = playerObj.playerStationArray.grid;
	var availableArray = [];

	for(var i = 0; i < powerArray.length; i++){
		for(var j=0; j<cardArray.length; j++){
			if(cardArray[j] == powerArray[i]){
				powerPlacedArray.push(j);
			}
		}
	}
	for(var i = 0; i<powerPlacedArray.length; i++){
		if(dijkstraAlgo(cardArrayDijkstra,placedIndex,powerPlacedArray[i]) < 3){
			availableArray.push(powerPlacedArray[i])
		}
	}
	return availableArray
}

function getCardObj(cardid){
	var cardObj = {};
	var powerTransferred = 2;
	if(cardid[2] == "B"){
		cardObj = cardList.cards.basic_locations.find(x => x.cardId === cardid);
	} else if (cardid[2] == "S"){
		cardObj = cardList.cards.s_locations.find(x => x.cardId === cardid);			
	} else if (cardid[2] == "R") {
		cardObj = cardList.cards.reactors.find(x => x.cardId === cardid.slice(0,8));
		powerTransferred = parseInt(cardid[cardid.length - 1]);
	} else if (cardid[2] == "C"){
		cardObj = cardList.cards.s_locations.find(x => x.cardId === cardid);					
	}
}