// RightClick Zoom Functions
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

document.addEventListener("click", function(e){
    if(window.getComputedStyle(document.getElementById("rCModal"),null).getPropertyValue("display") == "block"){
		document.getElementById("rCModal").style.display = "";
	}
}, false);

for (var i=0; i<document.getElementsByClassName("game_card_list").length; i++){
	document.getElementsByClassName("game_card_list")[i].addEventListener("contextmenu", function(e){
		document.getElementById("rCModal").innerHTML = "";
		document.getElementById("rCModal").style.display = "block";			
/*		var closestElement = e.target.closest(".game_card_list") */
		var closestElement = e.target.closest(".game_card_list").cloneNode(true);
		closestElement.style.transform = "scale(1.33)";
		document.getElementById("rCModal").appendChild(closestElement);
			console.log(closestElement);
	}, false);
}

for (var i=0; i<document.getElementsByClassName("game_card_hand").length; i++){
	document.getElementsByClassName("game_card_hand")[i].addEventListener("contextmenu", function(e){
		var closestElement = e.target.closest(".game_card_hand").cloneNode(true);
		document.getElementById("rCModal").style.display = "block";
		closestElement.classList.remove("game_card_hand");
		closestElement.classList.add("game_card_list") ;
		document.getElementById("rCModal").innerHTML = "";		
		closestElement.style.transform = "scale(1.33)";
		document.getElementById("rCModal").appendChild(closestElement);
			console.log(closestElement);
	}, false);
}
// End