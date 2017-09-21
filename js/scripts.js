////////////// Business Logic

var cry = function(phrase) {
  lowerPhrase = phrase.toLowerCase().split(' ').join('');
  return lowerPhrase;
};




////////////// User Logic

$(document).ready(function() {
   $("form#formOne").submit(function(event) {
     event.preventDefault();
     var input = ($("input#input").val());
     var result = cry(input);
     $("#result").text(result);
  });
});
