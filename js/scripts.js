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
  debugger;
  var arrayResults = []
  for(i = 0; i < number[1]; i++){
    for(j = 0; j < (number[0]*number[1]); j = j + number[1]){
      arrayResults.push(text[j+i])
    }
  } return arrayResults;
}

////////////// User Logic

$(document).ready(function() {
   $("form#formOne").submit(function(event) {
     event.preventDefault();
     var input = ($("input#input").val());
     var result = cry(input);

     var number = result.length;

     number = root(number);
     var splitChar = result.split("");

     var arrayResult = loop(number, splitChar);

     var joinResult = arrayResult.join("");
     $("#result").text(joinResult);
  });
});
