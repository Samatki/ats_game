// RightClick Zoom Functions

document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true);

function touch2Mouse(e){
//  e.preventDefault();
  var theTouch = e.changedTouches[0];
  var mouseEv;

  document.getElementById('mapZoomIn').style.display = "block";
  document.getElementById('mapZoomOut').style.display = "block";

  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown"; break;  
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;
    default: return;
  }
  
  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);
}

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

function generateListeners(){

//Log Card Viewer
	for (var i=0; i<document.getElementsByClassName("logCard").length; i++){
		document.getElementsByClassName("logCard")[i].addEventListener("contextmenu", function(e){
			document.getElementById("rCModal").style.display = "block";
			document.getElementById("rCModal").innerHTML = "";		
			document.getElementById("rCModal").innerHTML = cardPrinter(getCardObj(e.currentTarget.dataset.cardid),"game_card_list game_card_log");		
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

//Player Hand Drag
	for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
		document.getElementsByClassName("game_card_hand")[l].addEventListener("mousedown", function(e){
			if(!displayedArea && !cardPlaced && e.button == 0 && !handLock){
				handMouseDown = true;
				var closestCopiedElement = e.target.closest(".game_card_hand").cloneNode(true);
				copiedElement = e.target.closest(".game_card_hand");
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
				if(cardPowerDiscard){
					document.getElementById("discardForPowerBox").style.display = "inline-block";
				} else if (cardCurrencyDiscard){	
					document.getElementById("discardForCurrencyBox").style.display = "inline-block";
				} else if (conflictCardPlace){
					document.getElementById("conflictCardPlaceBox").style.display = "inline-block";					
				} else {
					document.getElementById("discardForPowerBox").style.display = "inline-block";
					document.getElementById("discardForCurrencyBox").style.display = "inline-block";
					if(transferredCard[2] == "C"){
						document.getElementById("conflictCardPlaceBox").style.display = "inline-block";
					}
				}
			}
		}, false);
	}
	
	document.getElementById('mapZoomOut').addEventListener('click',function(e){
		if(displayedArea){
			for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
				if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
					var elementS = document.getElementsByClassName("otherGridContainer")[i];	
				}
			}	    
		}else{
			var elementS = document.getElementById("gridContainer");
		}		
	  mouseDown = false;
	  elementS.style.cursor = "";
	  e.preventDefault();
	  m = elementS.style.transform.split('').slice(6,-1).join('');
	  var newScale = ((m/1 - 0.2) < 0.2)? 0.2:(m/1 - 0.2);
	  elementS.style.transform = "scale("+ (newScale).toString() +")";
	  initialgridPositionX = elementS.getBoundingClientRect().left;
	  initialgridPositionY = elementS.getBoundingClientRect().top;
	});
	
	document.getElementById('mapZoomIn').addEventListener('click',function(e){
		if(displayedArea){
			for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
				if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
					var elementS = document.getElementsByClassName("otherGridContainer")[i];	
				}
			}	    
		}else{
			var elementS = document.getElementById("gridContainer");
		}		
	  mouseDown = false;
	  elementS.style.cursor = "";
	  e.preventDefault();
	  m = elementS.style.transform.split('').slice(6,-1).join('');
	  var newScale = m/1 + 0.2;
	  elementS.style.transform = "scale("+ (newScale).toString() +")";
	  initialgridPositionX = elementS.getBoundingClientRect().left;
	  initialgridPositionY = elementS.getBoundingClientRect().top;
	});
	
	document.getElementById("playGridroot").addEventListener('wheel',function(e){
		if(displayedArea){
			for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
				if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
					var elementS = document.getElementsByClassName("otherGridContainer")[i];	
				}
			}	    
		}else{
			var elementS = document.getElementById("gridContainer");
		}		
	  mouseDown = false;
	  elementS.style.cursor = "";
	  e.preventDefault();
	  m = elementS.style.transform.split('').slice(6,-1).join('');
	  var newScale = ((m/1 - Math.sign(e.deltaY)*0.2) < 0.2)? 0.2:(m/1 - Math.sign(e.deltaY)*0.2);
	  elementS.style.transform = "scale("+ (newScale).toString() +")";
	  initialgridPositionX = elementS.getBoundingClientRect().left;
	  initialgridPositionY = elementS.getBoundingClientRect().top;
	})

	document.querySelector("#playGridroot").addEventListener('mousedown',function(e){
		if(displayedArea){
			for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
				if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
					var elementS = document.getElementsByClassName("otherGridContainer")[i];	
				}
			}	    
		}else{
			var elementS = document.getElementById("gridContainer");
		}	
	  elementS.style.cursor = "grabbing";
	  var gridPositionXStore = elementS.style.left;
	  var gridPositionYStore = elementS.style.top;
	  elementS.style.left = 0
	  elementS.style.top = 0;
	  initialgridPositionX = elementS.getBoundingClientRect().left;
	  initialgridPositionY = elementS.getBoundingClientRect().top;
	  elementS.style.left = gridPositionXStore;
	  elementS.style.top = gridPositionYStore;
	  
	  initialPositionX = e.clientX;
	  initialPositionY = e.clientY;
	  gridPositionX = elementS.getBoundingClientRect().left;
	  gridPositionY = elementS.getBoundingClientRect().top;

	  mouseDown = true;
	});

	document.getElementById("playGridroot").addEventListener("touchmove", touch2Mouse, true);
	document.getElementById("playGridroot").addEventListener('mousemove',function(e){
	  if(mouseDown){
		if(displayedArea){
			for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
				if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
					document.getElementsByClassName("otherGridContainer")[i].style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
					document.getElementsByClassName("otherGridContainer")[i].style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";				
				}
			}
		} else {
		document.getElementById("gridContainer").style.left = ((gridPositionX - initialgridPositionX) + (e.clientX - initialPositionX)).toString() + "px";
		document.getElementById("gridContainer").style.top = ((gridPositionY - initialgridPositionY) + (e.clientY - initialPositionY)).toString() + "px";
		}
	  }
	  if(handMouseDown){
		document.getElementById("gridContainer").style.cursor = "none";  
	  } else {
	//	document.getElementById("gridContainer").style.cursor = ""; 	  
	  }
	  e.preventDefault();
	})

	for (var l=0; l<document.getElementsByClassName("playerBox").length; l++){
		document.getElementsByClassName("playerBox")[l].addEventListener("click", function(e){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			document.getElementsByClassName("otherGridContainer")[i].style.display = "none";		
		}
		var gameFind = e.target.closest('.playerBox').dataset.player;
		document.getElementById("gridContainer").style.display = "none";
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == gameFind){
				document.getElementsByClassName("otherGridContainer")[i].style.display = "block";
				displayedArea = gameFind;
			}
		}	
		}, false);
	}

	document.getElementById("ownPlayerBoxCharacterBox").addEventListener("click", function(e){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			document.getElementsByClassName("otherGridContainer")[i].style.display = "none";		
		}
		document.getElementById("gridContainer").style.display = "block";
		displayedArea = 0;
		}, false);	
}

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
		document.getElementById("draggableCardArea").style.display = "";
		document.body.style.cursor = "";
		for (var l=0; l<document.getElementsByClassName("stationCardPlaceable").length; l++){
			document.getElementsByClassName("stationCardPlaceable")[l].style.backgroundColor = "";	
		};
		if(e.target.classList.contains("stationCardPlaceable")&&positionCheck(transferredCard,e.target.dataset.index,playerDataObj)){
			var cardObj = {};
			placedCardIndex = e.target.dataset.index;
			var powerTransferred = 2;
			if(transferredCard[2] == "B"){
				cardObj = cardList.cards.basic_locations.find(x => x.cardId === transferredCard);
			} else if (transferredCard[2] == "S"){
				cardObj = cardList.cards.s_locations.find(x => x.cardId === transferredCard);			
			} else if (transferredCard[2] == "R") {
				cardObj = cardList.cards.reactors.find(x => x.cardId === transferredCard.slice(0,8));
				powerTransferred = parseInt(transferredCard[transferredCard.length - 1]);
			}
			e.target.innerHTML = cardPrinter(cardObj,"game_card_board",powerTransferred);
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
		} else if (e.target.classList.contains("discardBox")){
			if(e.target.id == "discardForCurrencyBox" && !cardCurrencyDiscard && !cardPowerDiscard && !conflictCardPlace){
				cardCurrencyDiscard = true;
				document.getElementById("draggableCardArea").style.display = "";
				document.getElementById("draggableCardArea").innerHTML = "";
				document.getElementById("discardForPowerBox").style.display = "";
				document.getElementById("conflictCardPlaceBox").style.display = "";
				var cardObj = {};
				if(transferredCard[2] == "B"){
					cardObj = cardList.cards.basic_locations.find(x => x.cardId === transferredCard);
				} else if (transferredCard[2] == "S"){
					cardObj = cardList.cards.s_locations.find(x => x.cardId === transferredCard);			
				} else if (transferredCard[2] == "C"){
					cardObj = cardList.cards.conflict_cards.find(x => x.cardId === transferredCard);			
				}
				e.target.innerHTML = cardPrinter(cardObj,"game_card_discard");
				e.target.classList.add("discardBoxPlaced");
				e.target.addEventListener("contextmenu", function(e){
					var closestElement = e.target.closest(".game_card_discard").cloneNode(true);
					document.getElementById("rCModal").style.display = "block";
					closestElement.classList.remove("game_card_board");
					closestElement.classList.add("game_card_list") ;
					document.getElementById("rCModal").innerHTML = "";		
					closestElement.style.transform = "scale(1.33)";
					document.getElementById("rCModal").appendChild(closestElement);
				}, false)				
			} else if (e.target.id == "discardForPowerBox" && !conflictCardPlace && !cardCurrencyDiscard && !cardPowerDiscard && playerDataObj.playerData.currency >= 1){
				cardPowerDiscard = true;
				console.log("Discarding for power");		
				document.getElementById("draggableCardArea").style.display = "";
				document.getElementById("draggableCardArea").innerHTML = "";	
				document.getElementById("discardForCurrencyBox").style.display = "";
				document.getElementById("conflictCardPlaceBox").style.display = "";				
				var cardObj = {};
				if(transferredCard[2] == "B"){
					cardObj = cardList.cards.basic_locations.find(x => x.cardId === transferredCard);
				} else if (transferredCard[2] == "S"){
					cardObj = cardList.cards.s_locations.find(x => x.cardId === transferredCard);			
				} else if (transferredCard[2] == "C"){
					cardObj = cardList.cards.conflict_cards.find(x => x.cardId === transferredCard);			
				}
				e.target.innerHTML = cardPrinter(cardObj,"game_card_discard");
				e.target.classList.add("discardBoxPlaced");
				e.target.addEventListener("contextmenu", function(e){
					var closestElement = e.target.closest(".game_card_discard").cloneNode(true);
					document.getElementById("rCModal").style.display = "block";
					closestElement.classList.remove("game_card_board");
					closestElement.classList.add("game_card_list") ;
					document.getElementById("rCModal").innerHTML = "";		
					closestElement.style.transform = "scale(1.33)";
					document.getElementById("rCModal").appendChild(closestElement);
				}, false)								
			} else if(e.target.id == "conflictCardPlaceBox" && transferredCard[2] == "C" && !conflictCardPlace && !cardCurrencyDiscard && !cardPowerDiscard && playerDataObj.playerData.currency >= 1){
				conflictCardPlace = true;
				document.getElementById("draggableCardArea").style.display = "";
				document.getElementById("draggableCardArea").innerHTML = "";
				document.getElementById("discardForPowerBox").style.display = "";
				document.getElementById("discardForCurrencyBox").style.display = "";				
				var cardObj = {};
				cardObj = cardList.cards.conflict_cards.find(x => x.cardId === transferredCard);			
				e.target.innerHTML = cardPrinter(cardObj,"game_card_discard");
				e.target.classList.add("discardBoxPlaced");
				e.target.addEventListener("contextmenu", function(e){
					var closestElement = e.target.closest(".game_card_discard").cloneNode(true);
					document.getElementById("rCModal").style.display = "block";
					closestElement.classList.remove("game_card_board");
					closestElement.classList.add("game_card_list") ;
					document.getElementById("rCModal").innerHTML = "";		
					closestElement.style.transform = "scale(1.33)";
					document.getElementById("rCModal").appendChild(closestElement);
				}, false)							
			} else {
				for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
					document.getElementsByClassName("game_card_hand")[l].style.display = "block";
				}
			}
		} else {
			if(!cardCurrencyDiscard){
				document.getElementById("discardForCurrencyBox").style.display = "";
			}
			if(!cardPowerDiscard){
				document.getElementById("discardForPowerBox").style.display = "";
			}
			if(!conflictCardPlace){
				document.getElementById("conflictCardPlaceBox").style.display = "";
			}
			document.getElementById("draggableCardArea").style.display = "";
			document.getElementById("draggableCardArea").innerHTML = "";
		    for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
				document.getElementsByClassName("game_card_hand")[l].style.display = "block";
			}
		}
	}
});

document.body.addEventListener('mouseup',function(e){
  mouseDown = false;
  if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				document.getElementsByClassName("otherGridContainer")[i].style.cursor = "";	
			}
		}	  
  } else {
	document.getElementById("gridContainer").style.cursor = "";
  }
});

document.body.addEventListener('mouseleave',function(e){
  mouseDown = false;
  if(displayedArea){
		for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
			if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
				document.getElementsByClassName("otherGridContainer")[i].style.cursor = "";			
			}
		}	  
  } else {
	document.getElementById("gridContainer").style.cursor = "";
  }
  if(handMouseDown){
	transferredCard = "";
	document.getElementById("draggableCardArea").style.top = "200vh";
	document.getElementById("draggableCardArea").style.left = "200vw;"
	document.body.style.cursor = "";
	for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
		document.getElementsByClassName("game_card_hand")[l].style.display = "block";
	}
  }
  handMouseDown = false;
});

function positionCheck(cardid,placedIndex,playerObj){	
	var result = false;
	var powerTransferred = 0;
    var cardObj = {};
	 if(cardid[2] == "B"){
		cardObj = cardList.cards.basic_locations.find(x => x.cardId === cardid);
	} else if (cardid[2] == "S"){
		cardObj = cardList.cards.s_locations.find(x => x.cardId === cardid);			
	} else if (cardid[2] == "R") {
		cardObj = cardList.cards.reactors.find(x => x.cardId === transferredCard.slice(0,8));
		powerTransferred = parseInt(transferredCard[transferredCard.length - 1]);
	}
	var cardCreditCost = cardObj.cardCreditCost; 
	var cardPowerCost = cardObj.cardPowerCost; 
	var cardMaxPlayable = cardObj.cardMaxPlayable; 
	var cardLocationRestriction = cardObj.cardLocationRestriction;
	var currPlayerCredits = playerObj.playerData.currency; 
	var cardArray = playerObj.playerStationArray.grid;
	var cardArrayDijkstra = playerObj.playerStationArray;

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
				if(dijkstraAlgo(cardArrayDijkstra,placedIndex,powerPlacedArray[i]) < 3){
					powerCount = powerCount + parseInt(cardArray[powerPlacedArray[i]].slice(-1));
				}
			}
			if(powerCount >= cardPowerCost){			
				if(cardLocationRestriction.length == 0){
					result = true;
				} else if(cardid == "B0S_B_SP"){
					for(var i = 0; i < cardLocationRestriction.length; i++){
						for(var j=0; j<cardArray.length; j++){
							if(cardArray[j] == cardLocationRestriction[i][0]){
								if(dijkstraAlgo(cardArrayDijkstra,placedIndex,j) <= cardLocationRestriction[i][1]){
									result = true;
								}
							}
						}
					}					
				} else {
					for(var i = 0; i < cardLocationRestriction.length; i++){
						for(var j=0; j<cardArray.length; j++){
							if(cardArray[j] == cardLocationRestriction[i][0]){
								if(dijkstraAlgo(cardArrayDijkstra,placedIndex,j) > cardLocationRestriction[i][1]){
									result = true;
								}
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

function getAvailablePowerIndeces(arrayGrid, placedCardLocation,arraypower,radius){
	var powerCount = 0;
	var powerPlacedArray = [];
	var cardArray = arrayGrid.grid;
	var availableArray = [];

	for(var i = 0; i < arraypower.length; i++){
		for(var j=0; j<cardArray.length; j++){
			if(cardArray[j] == arraypower[i]){
				powerPlacedArray.push(j);
			}
		}
	}
	for(var i = 0; i<powerPlacedArray.length; i++){
		if(dijkstraAlgo(arrayGrid,placedCardLocation,powerPlacedArray[i]) <= radius){
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
		cardObj = cardList.cards.conflict_cards.find(x => x.cardId === cardid);					
	}
	return cardObj;
}

function removePower(event){
	var targetCard = event.currentTarget;
	var targetCardId = event.currentTarget.firstElementChild.dataset.cardid;
	var powerAvailable = parseInt(targetCardId[8]);
	if(powerAvailable != 0){
		targetCard.innerHTML = "";
		targetCard.innerHTML = cardPrinter(getCardObj(targetCardId.slice(0,8)),"game_card_board",powerAvailable-1);
		requiredPowerSpend--;
		powerSpendArray.push([event.currentTarget.dataset.index,event.currentTarget.firstElementChild.dataset.cardid]);
	}
	if(requiredPowerSpend == 0 && transferredCard != "B0B_R_SG"){
		for(var i = 0; i < accessiblePowerArray.length; i++){
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].removeEventListener('click',removePower,true);
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "";
		}
		optionMode = 1;
		confirmationBoxFlag = true;
		confirmationBoxLoader();
	} else if(requiredPowerSpend == -2 && transferredCard == "B0B_R_SG"){
		for(var i = 0; i < accessiblePowerArray.length; i++){
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].removeEventListener('click',removePower,true);
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "";
		}
		document.getElementById("endEarlyButton").style.display = "";
		optionMode = 4;
		confirmationBoxFlag = true;
		confirmationBoxLoader();		
	}else if(requiredPowerSpend <= 0 && transferredCard == "B0B_R_SG"){
		document.getElementById("endEarlyButton").style.display = "block";
	}	
}

function addPower(event){
	var targetCard = event.currentTarget;
	var targetCardId = event.currentTarget.firstElementChild.dataset.cardid;
	var powerAvailable = parseInt(targetCardId[8]);
		targetCard.innerHTML = "";
		targetCard.innerHTML = cardPrinter(getCardObj(targetCardId.slice(0,8)),"game_card_board",powerAvailable+1);
		powerAddArray.push([event.currentTarget.dataset.index,event.currentTarget.firstElementChild.dataset.cardid]);
		for(var i = 0; i < accessiblePowerArray.length; i++){
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].removeEventListener('click',addPower,true);
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "";
		}
		optionMode = 1;
		confirmationBoxFlag = true;
		confirmationBoxLoader();
}

function endEarlyButton(){
	if(requiredPowerSpend == 0 && transferredCard == "B0B_R_SG"){
		for(var i = 0; i < accessiblePowerArray.length; i++){
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].removeEventListener('click',removePower,true);
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "";
		}
		optionMode = 1;
		confirmationBoxFlag = true;
		confirmationBoxLoader();		
	}
	if(requiredPowerSpend == -1 && transferredCard == "B0B_R_SG"){
		for(var i = 0; i < accessiblePowerArray.length; i++){
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].removeEventListener('click',removePower,true);
			document.getElementsByClassName("stationCardSpace")[accessiblePowerArray[i]].style.outline = "";
		}
		optionMode = 5;
		confirmationBoxFlag = true;
		confirmationBoxLoader();		
	}	
}

function confirmationBoxLoader(){
	var innerText = "";
	var card = getCardObj(transferredCard);
	var cardTitle = card.cardTitle;
	var cardCost = card.cardCreditCost;
	var cardPower = card.cardPowerCost;
		turnObject = {};
		turnObject.playerKey = playerKey;
		turnObject.mode = optionMode;
		turnObject.cardFromHand = transferredCard;
		turnObject.updatedGrid = [[placedCardIndex, transferredCard]];
		powerSpendArray.forEach(function(item){turnObject.updatedGrid.push(item)});
		powerAddArray.forEach(function(item){turnObject.updatedGrid.push(item)});
		turnObject.extraData = [];
		scoreDelta = "+?";
	if(optionMode == 1){
		currencyDelta = -cardCost;
		innerText = "Place " + cardTitle + " on station for " + cardCost + " credits"
		if (cardPower){
			innerText = innerText + " and " + cardPower + " power";
		}
	} else if (optionMode == 2){
		currencyDelta = playerDataObj.playerData.player_currency_discard_value;
		scoreDelta = "";
		innerText = "Discard " + cardTitle + " for " + playerDataObj.playerData.player_currency_discard_value + " credits"		
	} else if (optionMode == 3){
		scoreDelta = "";
		innerText = "Discard " + getCardObj(transferredCard2).cardTitle + " and pay 1 credit for Power Reactor";
		turnObject.cardFromHand = transferredCard2;
		console.log(currencyDelta);
	} else if (optionMode == 4){
		currencyDelta = -3;
		innerText = "Place Shield Generator on station for 3 credits and 1 power (& 2 additional power for maximum bonus)"		
		turnObject.extraData.push(2);
	} else if (optionMode == 5){
		currencyDelta = -3;
		innerText = "Place Shield Generator on station for 3 credits and 1 power (& 1 additional power for bonus)"
		turnObject.extraData.push(1);
	} else if (optionMode == 6){
		currencyDelta = -(1+businessOfficesExtraSpend);	
		innerText = "Place Business Offices on station for 1 credit. Spend an additional " + (businessOfficesExtraSpend) + " credits for an extra " + parseInt(Math.floor(businessOfficesExtraSpend/2)) + " VP"
		turnObject.extraData.push(businessOfficesExtraSpend);		
	} else if (optionMode == 7){
		currencyDelta = -2;
		if(embassyOfficePlayerSelect != "None"){
			var otherSelectedPlayerName = playerDataObj.otherPlayersData.otherPlayers.find(function(item){if(item.playerNo == embassyOfficePlayerSelect){return item}}).playerName
			innerText = "Place Embassy Offices on station for 2 credits. Gain an additional +2VP  with player " + otherSelectedPlayerName + " receiving +1 VP."
			turnObject.extraData.push(embassyOfficePlayerSelect);
			turnObject.extraData.push(otherSelectedPlayerName);
		} else {
			innerText = "Place Embassy Offices on station for 2 credits."
			optionMode = 1;
			turnObject.mode = optionMode;
		}
	} else if (optionMode == 8){
		currencyDelta = -1;
		if(conflictPlayerSelect != "None"){
			var otherSelectedPlayerName = playerDataObj.otherPlayersData.otherPlayers.find(function(item){if(item.playerNo == conflictPlayerSelect){return item}}).playerName
			innerText = "Play "+getCardObj(transferredCard).cardTitle+" against " + otherSelectedPlayerName + "'s station?"
			turnObject.updatedGrid = [];
			turnObject.extraData.push(conflictPlayerSelect);
			turnObject.extraData.push(otherSelectedPlayerName);
		}
	}	
	
	if(confirmationBoxFlag){
		document.getElementById("endEarlyButton").style.display = "";
		document.getElementById("turnConfirmationScreen").style.display = "flex";
		document.getElementById("turnConfirmationBoxInnerText").innerHTML = innerText;		
	} else {
		document.getElementById("turnConfirmationScreen").style.display = "";	
	}		
}

function renderGameLog(logArray){
	var gameLogHTML = document.getElementById('gameLogText');
	var gameLogHTMLWrite = ""
	gameLogText.innerHTML = "";
	for(var i = 0;i<logArray.length;i++){
		gameLogHTMLWrite = gameLogHTMLWrite + "<div class='gameLogEntry'>" + logArray[i] + "</div>"
	}
	gameLogHTML.innerHTML = gameLogHTMLWrite;
	document.getElementById('infoArea').scrollTop = document.getElementById('infoArea').scrollHeight;
}