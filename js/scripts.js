////////////// Business Logic

var cry = function(phrase) {
  lowerPhrase = phrase.toLowerCase().split(' ').join('');
  var regx = lowerPhrase.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    return regx;
};

var root = function(number) {
  debugger;
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

////////////// User Logic

$(document).ready(function() {
   $("form#formOne").submit(function(event) {
     event.preventDefault();
     var input = ($("input#input").val());
     var result = cry(input);

     var number = result.length;

     number = root(number);

     $("#result").text(number);
  });
});
