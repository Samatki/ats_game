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
/*		var closestElement = e.target.closest(".game_card_list") */
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
var artworktoggle = false;

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
var handMouseDown = false;	
for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
	document.getElementsByClassName("game_card_hand")[l].addEventListener("mousedown", function(e){
		handMouseDown = true;
			var closestCopiedElement = e.target.closest(".game_card_hand").cloneNode(true);
			var copiedElement = e.target.closest(".game_card_hand");
			copiedElement.style.display = "none";
			closestCopiedElement.classList.remove("game_card_hand");
			closestCopiedElement.classList.add("game_card_list") ;
			document.getElementById("draggableCardArea").innerHTML = "";		
			closestCopiedElement.style.transform = "scale(0.5)";
			document.getElementById("draggableCardArea").appendChild(closestCopiedElement);
			document.getElementById("draggableCardArea").style.bottom = "-100vh";
			document.getElementById("draggableCardArea").style.right = "-100vw;"
			
		console.log("down")
	}, false);
}
/*
for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
	document.getElementsByClassName("game_card_hand")[l].addEventListener("mousemove", function(e){
		if(handMouseDown){
			
			document.getElementById("draggableCardArea").style.top = e.clientY + 75 +"px";
			document.getElementById("draggableCardArea").style.left = e.clientX + 75 +"px";
		  }
	}, false);
}
*/

document.getElementsByTagName("body")[0].addEventListener('mousemove',function(e){
	if(handMouseDown){
		document.getElementById("draggableCardArea").style.display = "block";
		document.getElementById("draggableCardArea").style.top = e.clientY -75 +"px";
		document.getElementById("draggableCardArea").style.left = e.clientX -75 +"px";
	}
});

document.getElementsByTagName("body")[0].addEventListener('mouseup',function(e){
	if(handMouseDown){
		handMouseDown = false;
		document.getElementById("draggableCardArea").style.display = "none";
	    for (var l=0; l<document.getElementsByClassName("game_card_hand").length; l++){
			document.getElementsByClassName("game_card_hand")[l].style.display = "block";
		}
	}
});