////////////// Business Logic

var crypto = function(phrase) {
  var 
}




////////////// User Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var input = $("input#input").val();
    var result = crypto(input);
    return result;
  });
});
