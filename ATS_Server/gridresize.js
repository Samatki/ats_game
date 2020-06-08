var arrayObj = {
.parameters.x :3,
	grid : [
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

function leftCheck(arrayObj){ return Boolean(arrayObj.grid.reduce(function(a,b,c,d){
    if(c%arrayObj.parameters.x == 0){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
	},0))
};
	
function rightCheck(arrayObj) {return Boolean(arrayObj.grid.reduce(function(a,b,c,d){
    if(c%arrayObj.parameters.x == (arrayObj.parameters.x - 1)){
        return Boolean(a) + Boolean(b);
	}else{
		return (Boolean(a));
	}
	},0));
};

function topCheck(arrayObj) { return Boolean(arrayObj.grid.slice(0,arrayObj.parameters.x).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};
	
function bottomCheck(arrayObj) { return Boolean(arrayObj.grid.slice(arrayObj.grid.length - arrayObj.parameters.x - 1,arrayObj.grid.length - 1).reduce(function(a,b,c,d){
    if(Boolean(b)  == true){
        return Boolean(a) + Boolean(b);
	}else{
		return Boolean(a);
	}
},0));
};

function GridResizer(arrayObj){
	if(leftCheck(arrayObj)){
		var arrLength = arrayObj.grid.length;
		var yval = arrLength / arrayObj.parameters.x;
		console.log("ping1")
		for(var i = 1; i <= yval; i++){
			arrayObj.grid.splice(arrLength - i * (arrayObj.parameters.x),0,false)
		}
		arrayObj.parameters.x = arrayObj.parameters.x + 1;
	}	
	if(rightCheck(arrayObj)){
		var arrLength = arrayObj.grid.length;
		var yval = arrLength / arrayObj.parameters.x;
		console.log("ping2")
		for(var i = 0; i < yval; i++){
			arrayObj.grid.splice(arrLength - i * (arrayObj.parameters.x),0,false)
		}
		arrayObj.parameters.x = arrayObj.parameters.x + 1;
	}
	if (bottomCheck(arrayObj)){
		console.log("ping3")
		for(var i = 0; i < arrayObj.parameters.x; i++){
			arrayObj.grid.push(false);
		}
	}
	if (topCheck(arrayObj)){
		console.log("ping4")
		for(var i = 0; i < arrayObj.parameters.x; i++){
			arrayObj.grid.unshift(false);
		}
	}
	return arrayObj;
}
	
	