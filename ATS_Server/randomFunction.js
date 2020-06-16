var randomArraySelection = function(array){
   var i = array.length, k , temp; 
   while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = array[k];
      array[k] = array[i];
      array[i] = temp;
   }
   return array;
}

module.exports = randomArraySelection;