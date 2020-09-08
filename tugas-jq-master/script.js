const input = $("#input"),
  buttonadd = $("#add"),
  list = $("#lists"),
  buttonsort = $("#sort");


$("button").on("click", function() {
  var add = $('#input').val();

  $("ul").append('<li>'+add+'</li>');

});
