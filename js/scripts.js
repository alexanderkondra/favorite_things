$(document).ready(function(){
// getting document ready

  $("form").submit(function(event){
// we grabbing ("form")- in html with .submit class button

  var color = $("input#color").val();
  var music = $("input#music").val();
  var place = $("input#place").val();
  var food = $("input#food").val();
// grab data from html with "input type and id #color , #music" .val make it value (number)

  var total = [color, music, place, food];
// create var for all of them whitch is total

  $("#colorOutput").text(total[0]);
  $("#musicOutput").text(total[1]);
  $("#placeOutput").text(total[2]);
  $("#foodOutput").text(total[3]);
  // This will pull the text from the form and display in a list.
  })
});
