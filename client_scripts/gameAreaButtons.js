// Button Listeners

//Card List Button		
document.getElementsByClassName("topBarButtons")[3].addEventListener('click',function(){
		if(window.getComputedStyle(document.getElementById("cardListArea"),null).getPropertyValue("display") == "none"){
			document.getElementById("gameArea").style.display = "none";
			document.getElementById("discardArea").style.display = "none";
			document.getElementById("cardListArea").style.display = "flex";
			document.getElementsByClassName("topBarButtons")[3].innerText = "Play Area";
			document.getElementsByClassName("topBarButtons")[1].innerText = "Discard";		
		} else {
			document.getElementById("gameArea").style.display = "";
			document.getElementById("cardListArea").style.display = "";
			document.getElementById("discardArea").style.display = "";
			document.getElementsByClassName("topBarButtons")[3].innerText = "Card List";					
		}
});


//Game Log Button
document.getElementById("objArea").style.display = "none";
document.getElementsByClassName("topBarButtons")[5].addEventListener('click',function(){
		if(window.getComputedStyle(document.getElementById("infoArea"),null).getPropertyValue("display") == "none"){
			document.getElementById("objArea").style.display = "none";
			document.getElementById("infoArea").style.display = "block";
			for(var i = 0; i<document.getElementsByClassName("gameMat").length; i++){
				document.getElementsByClassName("gameMat")[i].style.width = "";
				document.getElementById("playerHandModal").style.right = "";
				document.getElementById("gridReset").style.right = "";				
			}
		} else {
			document.getElementById("infoArea").style.display = "none";
			for(var i = 0; i<document.getElementsByClassName("gameMat").length; i++){
				document.getElementsByClassName("gameMat")[i].style.width = "100vw";
				document.getElementById("playerHandModal").style.right = "150px"
				document.getElementById("gridReset").style.right = "-27px";	
			}				
		}
});

//Objectives Button
document.getElementsByClassName("topBarButtons")[4].addEventListener('click',function(){
		if(window.getComputedStyle(document.getElementById("objArea"),null).getPropertyValue("display") == "none"){
			document.getElementById("infoArea").style.display = "none";
			document.getElementById("objArea").style.display = "block";
			for(var i = 0; i<document.getElementsByClassName("gameMat").length; i++){
				document.getElementsByClassName("gameMat")[i].style.width = "";
				document.getElementById("playerHandModal").style.right = "";
				document.getElementById("gridReset").style.right = "";	
			}
		} else {
			document.getElementById("objArea").style.display = "none";
			for(var i = 0; i<document.getElementsByClassName("gameMat").length; i++){
				document.getElementsByClassName("gameMat")[i].style.width = "100vw";
				document.getElementById("playerHandModal").style.right = "150px"
				document.getElementById("gridReset").style.right = "-27px";	
			}				
		}
});

//Discard Button
document.getElementsByClassName("topBarButtons")[1].addEventListener('click',function(){
		if(window.getComputedStyle(document.getElementById("discardArea"),null).getPropertyValue("display") == "none"){
			document.getElementById("gameArea").style.display = "none";
			document.getElementById("cardListArea").style.display = "none";
			document.getElementById("discardArea").style.display = "flex";
			document.getElementsByClassName("topBarButtons")[1].innerText = "Play Area";
			document.getElementsByClassName("topBarButtons")[3].innerText = "Card List";	
		} else {
			document.getElementById("gameArea").style.display = "";
			document.getElementById("cardListArea").style.display = "";
			document.getElementById("discardArea").style.display = "";
			document.getElementsByClassName("topBarButtons")[1].innerText = "Discard";					
		}
});

//Grid Reset Button
document.getElementById("gridReset").addEventListener('click',function(){
	document.getElementById("gridContainer").style.top = 0;
	document.getElementById("gridContainer").style.left = 0;
	document.getElementById("gridContainer").style.transform = "scale(1)";
	for (var i = 0; i < document.getElementsByClassName("otherGridContainer").length; i++){
		if(document.getElementsByClassName("otherGridContainer")[i].dataset.player == displayedArea){
			document.getElementsByClassName("otherGridContainer")[i].style.top = 0;
			document.getElementsByClassName("otherGridContainer")[i].style.left = 0;
			document.getElementsByClassName("otherGridContainer")[i].style.transform = "scale(1)";				
		}
	}	
});
