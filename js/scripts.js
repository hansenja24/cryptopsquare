////////////// Business Logic

var cry = function(phrase) {
  lowerPhrase = phrase.toLowerCase().split(' ').join('');
  var regx = lowerPhrase.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    return regx;
};

var root = function(number) {
  var sqrtNumber = Math.sqrt(number);
  var firstDigit = sqrtNumber.toString()[0];
  firstDigit = parseInt(firstDigit);
  if (sqrtNumber == firstDigit){
    var row = firstDigit;
    var col = firstDigit;
  }else if(sqrtNumber < (firstDigit + 0.5)) {
    var row = (firstDigit + 1);
    var col = (firstDigit);
  } else if (sqrtNumber > (firstDigit + 0.5)) {
    var row = (firstDigit + 1);
    var col = (firstDigit + 1);
  }
  var boxes = [row,col];
  return boxes;
};

var loop = function(number, text){
  var arrayResults = []
  for(i = 0; i < number[1]; i++){
    for(j = 0; j < (number[0]*number[1]); j = j + number[1]){
      arrayResults.push(text[j+i])
    }
  } return arrayResults;
}

// var spaces = function(joinResult, number) {
//   debugger;
//   for(i = 4; i < number; i+=5) {
//     joinResult = joinResult.charAt(i) + ' ';
//   } return joinResult;
// }

////////////// User Logic

$(document).ready(function() {
   $("form#formOne").submit(function(event) {
     event.preventDefault();
     var input = ($("input#input").val());
     var result = cry(input);

     var number = result.length;

     var rootNumber = root(number);
     var splitChar = result.split("");

     var arrayResult = loop(rootNumber, splitChar);

     var joinResult = arrayResult.join("");

     var finalResult = spaces(joinResult, number);
     $("#result").text(finalResult);
  });
});
