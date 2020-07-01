function cardPrinter(cardData, cardSet, cardPowerCount = 2){
	
	if(cardData.type=="S" || cardData.type=="basic"){
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
		
		if (cardData.cardMaxAdditionalPoints != Infinity || cardData.cardMaxPlayable != Infinity){
			maxBoxHTML = '<div class="maxbox"><div class="maxBoxInner ' + cardMode + '"></div><b>MAX</b>'
			if (cardData.cardMaxAdditionalPoints != Infinity){
				maxBoxHTML = maxBoxHTML + '<div class="maxPoints">+' + cardData.cardMaxAdditionalPoints + '</div>' 
			}
			if (cardData.cardMaxPlayable != Infinity){
				maxBoxHTML = maxBoxHTML + '<div class="maxPlayable">' + cardData.cardMaxPlayable + '</div>'			
			}
			maxBoxHTML = maxBoxHTML + '</div>'
		}
		
		var category_HTML = ""
		if (cardData.type == "S"){
			category_HTML = '<div class="card_category">'+cardData.type+'</div>'
		}
		
		var cardHTML =  `	
			<div class="${cardSet}" tabindex="-1" data-cardId="${cardData.cardId}" >
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
		

	} else if (cardData.type == "R"){
		var cardColour = "grey"
		if(cardData.cardId=="B0R_X_VR"){
			cardColour = "multi"
		}
		
		var cCostHTML = ""
		if(cardData.cardCreditCost){
			cCostHTML = '<div class="card_ccost">'+cardData.cardCreditCost+'</div>'
		}
		
		var availablePower = ""
		for(var i = 0; i<cardPowerCount; i++){
			var availablePower = availablePower + '<div class="availPower"></div>'
		}
			
		var cardHTML =  `	
			<div class="${cardSet}" tabindex="-1" data-cardId="${cardData.cardId + cardPowerCount.toString()}" >
				<div class="${cardColour}_card" ></div>
				<div class="card_classification ${cardColour}_class"></div>
				<div class="card_title"><b>${cardData.cardTitle}</b></div>
				${cCostHTML}
				<div class="card_image" style="background-image:url('ATS_Images/Artwork/Cards/${cardData.cardImage.toLowerCase()}')"></div>
				<div class="powerElements">
					${availablePower}
				</div>
				<div class="desc_box card_igmode"></div>
				<div class="power_description"><div>${cardData.cardDescription}</div></div>
			</div>`
	} else if (cardData.type == "Conflict"){
	
		var cCostHTML = ""
		if(cardData.cardCreditCost){
			cCostHTML = '<div class="card_ccost">'+cardData.cardCreditCost+'</div>'
		}
		
		var maxBoxHTML = "";
		if (cardData.cardMax != Infinity){
			maxBoxHTML = '<div class="maxbox conflictMaxBox"><div class="maxBoxInner card_igmode"></div><b>MAX</b>'
			if (cardData.cardMax != Infinity){
				maxBoxHTML = maxBoxHTML + '<div class="maxPoints">+' + cardData.cardMax + '</div>' 
			}
			maxBoxHTML = maxBoxHTML + '</div>'
		}

		var cardHTML =  `	
			<div class="${cardSet}" tabindex="-1" data-cardId="${cardData.cardId}" >
				<div class="conflict_card" ></div>
				<div class="card_classification white_class"></div>
				<div class="card_title conflict_card_title"><b>${cardData.cardTitle}</b></div>
				${cCostHTML}
				<div class="card_image" style="background-image:url('ATS_Images/Artwork/Cards/conflict.png')"></div>
				${maxBoxHTML?maxBoxHTML:""}
				<div class="desc_box card_igmode conflict_desc_box"></div>
				<div class="conflict_description"><div>${cardData.cardDescription}</div></div>
			</div>`
	}
	return cardHTML;
}