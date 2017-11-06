$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"]
    var letters = $("input#sentence").val().split("");

    for (var index = 0; index < letters.length; index += 1) {
      console.log(letters[index]);

      letters[index] = letters[index].replace("a", "-").replace("e", "-").replace("i", "-").replace("o", "-").replace("u", "-");
    }

    $("#output").text(letters);
  });
});


// if (letters[index] === vowels {
//   letters[index] = "-";
// });


// for (var i = 0; i < vowels.length; i += 1) {
//   letters[index] = "-";
// }
