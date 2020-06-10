//findNExtMinCell -> neighbourCheck -> +1 to currentCell Value, update neighbours if less than their current. -> mark currentCell as visited -> FINISH CRITERIA OR REPEAT.

// **************** DIJKSTRA ALGO **************//

function dijkstraAlgo(gridA,startIndex,finishIndex){
	var visitedFlag = true;
	var reachedFlag = true;

	var dijkstraGrid = gridA.grid.map(function(x, i){
			if(x){
//				console.log(x + " is truthy");
				return [i,false,Infinity]
			} else {
				return [i,true,Infinity]
			}
//			return (x) ? [i,false,Infinity] : [i,true,Infinity]
		});
		
	var pathLength = 1;
	
	dijkstraGrid[startIndex][2] = 0;
	dijkstraGrid[startIndex][1] = false;
//	console.log("Dijkstra Grid is ");
//	console.log(dijkstraGrid);
	
	while (visitedFlag && reachedFlag){

		var currentCell = findNextMinCell(dijkstraGrid);
//		console.log(currentCell);
		
		if(currentCell == null){return Infinity}
		dijkstraGrid[currentCell][1] = true;
		
		var currentCellValue = dijkstraGrid[currentCell][2];
		var neighbourInspectValue = currentCellValue + pathLength;
				
		var neighbours = neighbourCheck(currentCell,gridA.parameters.x,dijkstraGrid.length);

		for(var i = 0; i< neighbours.length; i++){
			if(dijkstraGrid[neighbours[i]][1] == false && dijkstraGrid[neighbours[i]][2] > neighbourInspectValue){
				dijkstraGrid[neighbours[i]][2] = neighbourInspectValue;
			}
		}
		if (findNextMinCell(dijkstraGrid) == finishIndex){
			reachedFlag = false;
		}else{
			for(var i = 0; i < dijkstraGrid.length; i++){
				if(dijkstraGrid[i][1]){continue}else{break} 
				visitedFlag = false;
			} 
		}	
	}
	return dijkstraGrid[finishIndex][2];
}

function findNextMinCell(arr) {
//	console.log(arr);
	var filteredArr = arr.filter(function(item){if(item[1] != true){return item}});
	if(filteredArr.length == 0){return null};
	var kArray = filteredArr.map(function(item2){return item2[2]});
	let i = kArray.indexOf(Math.min(...kArray));
	return filteredArr[i][0]
}

function neighbourCheck(currentCell, gridX, gridSize){
	if (currentCell % gridX == gridX - 1){
		var neighbourGrid = [
		currentCell - gridX,
		currentCell - 1,
		currentCell + gridX
		];
	} else if (currentCell % gridX == 0){
		var neighbourGrid = [
		currentCell - gridX,
		currentCell + 1,
		currentCell + gridX
		];
	} else {
		var neighbourGrid = [
		currentCell - gridX,
		currentCell - 1,
		currentCell+1,
		currentCell + gridX,
		];
	}
	neighbourGrid = neighbourGrid.filter(item => item >= 0);
	neighbourGrid = neighbourGrid.filter(item => item < gridSize);
	return neighbourGrid;
}