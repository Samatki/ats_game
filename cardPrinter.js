function cardPrinter(cardData, cardSet){
	var pCostHTML = ""
	for(var i = 0; i<cardData.cardPowerCost;i++){
		pCostHTML = pCostHTML + '<div class="card_pcost"></div>'
	}
	
	var cardMode = cardData.cardEndGame ? "card_egmode" : "card_igmode";

	var cardColour = ""
	switch(cardData.cardColour){
		case "R":
			cardColour = "red"
			break;
		case "G":
			cardColour = "green"
			break;
		case "P":
			cardColour = "purple"
			break;
		case "B":
			cardColour = "blue"
			break;
		case "Y":
			cardColour = "yellow"
			break;
		default:
			break;
	}
	
	var maxBoxHTML = ""
/*
					<div class="max_cards"></div>
					<div class="max_vpgain"></div>
*/	
	if (cardData.cardMaxAdditionalPoints || cardData.cardMaxPlayable){
		maxBoxHTML = '<div class="maxbox"><div class="maxBoxInner ' + cardMode + '"></div><b>MAX</b>'
		if (cardData.cardMaxAdditionalPoints){
			maxBoxHTML = maxBoxHTML + '<div class="maxPoints">+' + cardData.cardMaxAdditionalPoints + '</div>' 
		}
		if (cardData.cardMaxPlayable){
			maxBoxHTML = maxBoxHTML + '<div class="maxPlayable">' + cardData.cardMaxPlayable + '</div>'			
		}
		maxBoxHTML = maxBoxHTML + '</div>'
	}
	
	var category_HTML = ""
	if (cardData.type == "S"){
		category_HTML = '<div class="card_category">'+cardData.type+'</div>'
	}

	
	var cardHTML =  `	
		<div class="${cardSet}" tabindex="-1">
			<div class="${cardColour}_card" ></div>
			<div class="card_classification ${cardColour}_class"></div>
			<div class="card_title"><b>${cardData.cardTitle}</b></div>
			<div class="card_ccost">${cardData.cardCreditCost}</div>
			${pCostHTML}
			<div class="card_image" style="background-image:url('ATS_Images/Artwork/Cards/${cardData.cardImage.toLowerCase()}')"></div>
			${maxBoxHTML?maxBoxHTML:""}
			<div class="desc_box ${cardMode}"></div>
			<div class="card_vp">${cardData.im_score}</div>
			${category_HTML}
			<div class="card_description"><div>${cardData.cardDescription}</div></div>
		</div>
	`
	
	return cardHTML
}