
function theBeatlesPlay(array1, array2) {
  var output = [];
  var i = 0;
  for (; i<array1.length; i++){
      output.push(array1[i] + " plays " + array2[i]);
    } return output; 
  } 
  
  function johnLennonFacts(facts) {
    i=0;
    var output = [];
    while (i<facts.length){
      output = facts[i] + "!!!"; 
      i++;
    } return output;
  }
  
  function iLoveTheBeatles(number){
    do {
      var output = [];
      output += "I love the Beatles!";
      number++;
    } while (number<15);
    return output;
  }