$(document).ready(function(){
  alert("test");
  $("form").submit(function(event){
  var color = $("input#color").val();
  var music = $("input#music").val();
  var place = $("input#place").val();
  var food = $("input#food").val();
  var total = [color, music, place, food];
  console.log(total);
  event.preventDefault();
  })
});
