// Card List Page Generator
cardPrint = ""
cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Basic Location Cards</span></div>"

for(var i = 0; i < cardList.cards.basic_locations.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.basic_locations[i], "game_card_list");
}
cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Special Location Cards</span></div>"
for(var i = 0; i < cardList.cards.s_locations.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.s_locations[i], "game_card_list");
}

cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Reactor Cards</span></div>"
for(var i = 0; i < cardList.cards.reactors.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.reactors[i], "game_card_list");
}

(cardList.cards.conflict.length !=0)? cardList = cardList + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Conflict Cards</span></div>":""
for(var i = 0; i < cardList.cards.conflict.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.conflict[i], "game_card_list");
}
document.getElementById("cardListArea").innerHTML = cardPrint; 
// End

// Discard List Generator
function discardListGen(cardDiscardList){
	cardPrint = ""
	cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Discard Pile</span></div>";
	
	var cardDiscardObjList = [];
	cardDiscardList.forEach(function(card){
		if(card[2] == "B"){
			cardDiscardObjList.push(cardList.cards.basic_locations.find(function(x){
				if(x.cardId === card){return x}
			}));
		} else if (card[2] == "S"){
			cardDiscardObjList.push(cardList.cards.s_locations.find(x => x.cardId === card));			
		} else if (card[2] == "R") {
			cardDiscardObjList.push(cardList.cards.reactors.find(x => x.cardId === card));	
		} else if (card[2] == "C") {
			return null;
		}
	});
	
	for(var i = 0; i < cardDiscardObjList.length; i++){
		cardPrint = cardPrint + cardPrinter(cardDiscardObjList[i], "game_card_list");
	}
	document.getElementById("discardArea").innerHTML = cardPrint; 
}
// End

function handGen(cardHandList){
	var cardHandObjList = [];
	cardHandList.forEach(function(card){
		if(card[2] == "B"){
			cardHandObjList.push(cardList.cards.basic_locations.find(function(x){
				if(x.cardId === card){return x}
			}));
		} else if (card[2] == "S"){
			cardHandObjList.push(cardList.cards.s_locations.find(x => x.cardId === card));			
		} else if (card[2] == "R") {
			cardHandObjList.push(cardList.cards.reactors.find(x => x.cardId === card.slice(0,8)));	
		} else if (card[2] == "C") {
			return null;
		}
	});

	var cardPrint = "";
	for(var i = 0; i < cardHandObjList.length; i++){
		cardPrint = cardPrint + cardPrinter(cardHandObjList[i], "game_card_hand");
	}
	document.getElementById("playerHandModal").innerHTML = cardPrint; 
}
// End