var arrayObj = {
	arrayX :3,
	arrayGrid : [
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		false
	]
}

var x = arrayObj.arrayGrid;
var arrayX = arrayObj.arrayX;

function leftCheck(arrayObj){ return Boolean(arrayObj.arrayGrid.reduce(function(a,b,c,d){
    if(c%arrayObj.arrayX == 0){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
	},0))
};
	
function rightCheck(arrayObj) {return Boolean(arrayObj.arrayGrid.reduce(function(a,b,c,d){
    if(c%arrayObj.arrayX == (arrayObj.arrayX - 1)){
        return Boolean(a) + Boolean(b);
	}else{
		return (Boolean(a));
	}
	},0));
};

function topCheck(arrayObj) { return Boolean(arrayObj.arrayGrid.slice(0,arrayObj.arrayX).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};
	
function bottomCheck(arrayObj) { return Boolean(arrayObj.arrayGrid.slice(arrayObj.arrayGrid.length - arrayObj.arrayX - 1,arrayObj.arrayGrid.length - 1).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};

function GridResizer(arrayObj){
	if(leftCheck(arrayObj)){
		var arrLength = arrayObj.arrayGrid.length;
		var yval = arrLength / arrayObj.arrayX;
		console.log("ping1")
		for(var i = 1; i <= yval; i++){
			arrayObj.arrayGrid.splice(arrLength - i * (arrayObj.arrayX),0,false)
		}
		arrayObj.arrayX = arrayObj.arrayX + 1;
	}	
	if(rightCheck(arrayObj)){
		var arrLength = arrayObj.arrayGrid.length;
		var yval = arrLength / arrayObj.arrayX;
		console.log("ping2")
		for(var i = 0; i < yval; i++){
			arrayObj.arrayGrid.splice(arrLength - i * (arrayObj.arrayX),0,false)
		}
		arrayObj.arrayX = arrayObj.arrayX + 1;
	}
	if (bottomCheck(arrayObj)){
		console.log("ping3")
		for(var i = 0; i < arrayObj.arrayX; i++){
			arrayObj.arrayGrid.push(false);
		}
	}
	if (topCheck(arrayObj)){
		console.log("ping4")
		for(var i = 0; i < arrayObj.arrayX; i++){
			arrayObj.arrayGrid.unshift(false);
		}
	}
	return arrayObj;
}
	
	