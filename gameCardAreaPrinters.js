var counter = 0
var cardPrint = ""
while (counter < 6){
	cardPrint = cardPrint + cardPrinter(cardList.cards.basic_locations[counter], "game_card_hand");
	counter++;
}			
		document.getElementById("playerHandModal").innerHTML = cardPrint; 

// Card List Page Generator
cardPrint = ""
cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Basic Location Cards</span></div>"

for(var i = 0; i < cardList.cards.basic_locations.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.basic_locations[i], "game_card_list")
}
cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Special Location Cards</span></div>"
for(var i = 0; i < cardList.cards.s_locations.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.s_locations[i], "game_card_list")
}
(cardList.cards.conflict.length !=0)? cardList = cardList + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Conflict Cards</span></div>":""
for(var i = 0; i < cardList.cards.conflict.length; i++){
	cardPrint = cardPrint + cardPrinter(cardList.cards.conflict[i], "game_card_list")
}
document.getElementById("cardListArea").innerHTML = cardPrint; 
//End

// Discard List Generator
cardPrint = ""
cardPrint = cardPrint + "<div style='width:100%; text-align:center; margin-top:30px; margin-bottom:30px;'><span class='cardListHeader'>Discard Pile</span></div>"

for(var i = 0; i < discardList.cards.length; i++){
	cardPrint = cardPrint + cardPrinter(discardList.cards[i], "game_card_list")
}

document.getElementById("discardArea").innerHTML = cardPrint; 
// End


