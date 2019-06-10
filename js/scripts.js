$(document).ready(function(){
  $("form").submit(function(event){
  var color = $("input#color").val();
  var music = $("input#music").val();
  var place = $("input#place").val();
  var food = $("input#food").val();
  var total = [color, music, place, food];
  console.log(total);
  event.preventDefault();
  // total.push(total[2]);
  console.log(total);
  // This will pull the text from the form and display in a list.
  $("#colorOutput").text(total[0]);
  $("#musicOutput").text(total[1]);
  $("#placeOutput").text(total[2]);
  $("#foodOutput").text(total[3]);
  })
});
