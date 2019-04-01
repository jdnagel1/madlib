
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//
//
//     var values = ["adj", "adj2", "adj3", "adj4"];
//
//     values.forEach(function(value) {
//       var userInput = $("input#" + value).val();
//       $("." + value).text(userInput);
//     });
//
//       $("#story").show();
//
//       event.preventDefault();
//     });
//   });

// practice at home later and push^^^
