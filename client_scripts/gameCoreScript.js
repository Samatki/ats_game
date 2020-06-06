// RightClick Zoom Functions
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

//Viewer Unload
document.addEventListener("click", function(e){
    if(window.getComputedStyle(document.getElementById("rCModal"),null).getPropertyValue("display") == "block"){
		document.getElementById("rCModal").style.display = "";
	}
}, false);

//List Card Viewer
for (var i=0; i<document.getElementsByClassName("game_card_list").length; i++){
	document.getElementsByClassName("game_card_list")[i].addEventListener("contextmenu", function(e){
		document.getElementById("rCModal").innerHTML = "";
		document.getElementById("rCModal").style.display = "block";			
		var closestElement = e.target.closest(".game_card_list").cloneNode(true);
		closestElement.style.transform = "scale(1.33)";
		document.getElementById("rCModal").appendChild(closestElement);
	}, false);
}

//Hand Card Viewer
for (var i=0; i<document.getElementsByClassName("game_card_hand").length; i++){
	document.getElementsByClassName("game_card_hand")[i].addEventListener("contextmenu", function(e){
		var closestElement = e.target.closest(".game_card_hand").cloneNode(true);
		document.getElementById("rCModal").style.display = "block";
		closestElement.classList.remove("game_card_hand");
		closestElement.classList.add("game_card_list") ;
		document.getElementById("rCModal").innerHTML = "";		
		closestElement.style.transform = "scale(1.33)";
		document.getElementById("rCModal").appendChild(closestElement);
	}, false);
}

//Board Card Viewer
for (var i=0; i<document.getElementsByClassName("stationCardPlaced").length; i++){
	document.getElementsByClassName("stationCardPlaced")[i].addEventListener("contextmenu", function(e){
		var closestElement = e.target.closest(".game_card_board").cloneNode(true);
		document.getElementById("rCModal").style.display = "block";
		closestElement.classList.remove("game_card_board");
		closestElement.classList.add("game_card_list") ;
		document.getElementById("rCModal").innerHTML = "";		
		closestElement.style.transform = "scale(1.33)";
		document.getElementById("rCModal").appendChild(closestElement);
	}, false);
}

//Other Player Character Mat Expander
for (var i=0; i<document.getElementsByClassName("playerBoxCharacterBox").length; i++){
	document.getElementsByClassName("playerBoxCharacterBox")[i].addEventListener("contextmenu", function(e){
		document.getElementById("rCModal").style.display = "block";
		document.getElementById("rCModal").innerHTML = `
			<div id="displayedPlayerMat" style="background-image:url(${'ATS_Images/Character_Mats/cs_'+e.target.dataset.character+'.png'})"></div>	
		`;		
	}, false);
}
// End

//Own Player Character Mat Expander
document.getElementById("ownPlayerBoxCharacterBox").addEventListener("contextmenu", function(e){
		document.getElementById("rCModal").style.display = "block";
		document.getElementById("rCModal").innerHTML = `
			<div id="displayedPlayerMat" style="background-image:url(${'ATS_Images/Character_Mats/cs_'+e.target.dataset.character+'.png'})"></div>	
		`;		
}, false);
// End

// Artwork Only Toggle

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'm') {
	  artworktoggle = artworktoggle ? false : true;
	  if(artworktoggle){
		Array.from(document.querySelectorAll(".game_card_list div")).forEach((item)=>item.style.opacity = 0);
		Array.from(document.querySelectorAll(".game_card_hand div")).forEach((item)=>item.style.opacity = 0);
     	Array.from(document.querySelectorAll(".game_card_board div")).forEach((item)=>item.style.opacity = 0);
		Array.from(document.querySelectorAll(".card_image")).forEach((x) => x.style.opacity = 1);
	  } else {
	  	Array.from(document.querySelectorAll(".game_card_list div")).forEach((item)=>item.style.opacity = "");
		Array.from(document.querySelectorAll(".game_card_hand div")).forEach((item)=>item.style.opacity = "");
     	Array.from(document.querySelectorAll(".game_card_board div")).forEach((item)=>item.style.opacity = "");		
		Array.from(document.querySelectorAll(".card_image")).forEach((x) => x.style.opacity = "");
	 }
  }
});

//End

//Player Hand Drag
for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
	document.getElementsByClassName("game_card_hand")[l].addEventListener("mousedown", function(e){
		if(!displayedArea && !cardPlaced){
		handMouseDown = true;
			var closestCopiedElement = e.target.closest(".game_card_hand").cloneNode(true);
			var copiedElement = e.target.closest(".game_card_hand");
			transferredCard = e.target.closest(".game_card_hand").dataset.cardid;
			copiedElement.style.display = "none";
			closestCopiedElement.classList.remove("game_card_hand");
			closestCopiedElement.classList.add("game_card_list") ;
			document.getElementById("draggableCardArea").innerHTML = "";		
			closestCopiedElement.style.transform = "scale(0.5)";
			document.getElementById("draggableCardArea").appendChild(closestCopiedElement);
			document.getElementById("draggableCardArea").style.top = "200vh";
			document.getElementById("draggableCardArea").style.left = "200vw;"
			document.getElementById("draggableCardArea").style.display = "block";
			document.body.style.cursor = "none";
			document.getElementById("draggableCardArea").style.top = e.clientY -75 +"px";
			document.getElementById("draggableCardArea").style.left = e.clientX -75 +"px";
		}
	}, false);

}

document.body.addEventListener('mousemove',function(e){
	if(handMouseDown){
		document.getElementById("draggableCardArea").style.top = e.clientY -75 +"px";
		document.getElementById("draggableCardArea").style.left = e.clientX -75 +"px";
		if(e.target.classList.contains("stationCardPlaceable") && !positionCheck(transferredCard,e.target.dataset.index,playerDataObj)){
			if(tilePlaceHelper){e.target.style.backgroundColor = "red";}
		} else {
			for (var l=0; l<document.getElementsByClassName("stationCardPlaceable").length; l++){
			document.getElementsByClassName("stationCardPlaceable")[l].style.backgroundColor = "";	
			};
		}
	}
});


document.body.addEventListener('mouseup',function(e){
	if(handMouseDown){
		handMouseDown = false;
		document.getElementById("draggableCardArea").style.display = "none";
		document.body.style.cursor = "";
		for (var l=0; l<document.getElementsByClassName("stationCardPlaceable").length; l++){
			document.getElementsByClassName("stationCardPlaceable")[l].style.backgroundColor = "";	
		};
		if(e.target.classList.contains("stationCardPlaceable")&&positionCheck(transferredCard,e.target.dataset.index,playerDataObj)){
			var cardObj = {};
			 if(transferredCard[2] == "B"){
				cardObj = cardList.cards.basic_locations.find(x => x.cardId === transferredCard);
			} else if (transferredCard[2] == "S"){
				cardObj = cardList.cards.s_locations.find(x => x.cardId === transferredCard);			
			} else if (transferredCard[2] == "R") {
				cardObj = cardList.cards.reactors.find(x => x.cardId === transferredCard);	
			}
			e.target.innerHTML = cardPrinter(cardObj,"game_card_board");
			e.target.addEventListener("contextmenu", function(e){
				var closestElement = e.target.closest(".game_card_board").cloneNode(true);
				document.getElementById("rCModal").style.display = "block";
				closestElement.classList.remove("game_card_board");
				closestElement.classList.add("game_card_list") ;
				document.getElementById("rCModal").innerHTML = "";		
				closestElement.style.transform = "scale(1.33)";
				document.getElementById("rCModal").appendChild(closestElement);
			}, false);
			cardPlaced = true;
		} else {
			document.getElementById("draggableCardArea").style.display = "none";
			document.getElementById("draggableCardArea").innerHTML = "";
		    for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
				document.getElementsByClassName("game_card_hand")[l].style.display = "block";
			}
		}
	}
});

function positionCheck(cardid,placedIndex,playerObj){	
	var result = false;
	
    var cardObj = {};
	 if(cardid[2] == "B"){
		cardObj = cardList.cards.basic_locations.find(x => x.cardId === cardid);
	} else if (cardid[2] == "S"){
		cardObj = cardList.cards.s_locations.find(x => x.cardId === cardid);			
	} else if (cardid[2] == "R") {
		cardObj = cardList.cards.reactors.find(x => x.cardId === cardid);	
	}
	var cardEndGame = cardObj.cardEndGame;
	var cardImScore = cardObj.im_score; 
	var cardCreditCost = cardObj.cardCreditCost; //
	var cardPowerCost = cardObj.cardPowerCost; //
	var cardMaxPlayable = cardObj.cardMaxPlayable; //
	var cardLocationRestriction = cardObj.cardLocationRestriction;
	var currPlayerCredits = playerObj.playerData.currency; //
	var cardArray = playerObj.playerStationArray.grid;

	if(arrayCounter(cardArray, cardid) < cardMaxPlayable){
		if(cardCreditCost <= currPlayerCredits){
			var powerCount = 0;
			var powerPlacedArray = [];
			for(var i = 0; i < powerArray.length; i++){
				for(var j=0; j<cardArray.length; j++){
					if(cardArray[j] == powerArray[i]){
						powerPlacedArray.push(j);
					}
				}
			}
			for(var i = 0; i<powerPlacedArray.length; i++){
				if(dijkstraAlgo(cardArray,placedIndex,powerPlacedArray[i]) < 3){
					powerCount = powerCount + parseInt(cardArray.powerPlacedArray[i].slice(-1));
				}
			}
			if(powerCount >= cardPowerCost){
				if(cardLocationRestriction.length == 0){
					result = true;
				}
				for(var i = 0; i < cardLocationRestriction.length; i++){
					for(var j=0; j<cardArray.length; j++){
						if(cardArray[j] == cardLocationRestriction[i][0]){
							if(dijkstraAlgo(cardArray,placedIndex,j) >= cardLocationRestriction[i][1]){
								result = true;
							}
						}
					}
				}
			}
		}
	}
	return result;
}

function arrayCounter(array, searchTerm){
	return array.reduce((n,x) => n + (x === searchTerm),0);
}