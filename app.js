$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

$("img article").addClass("image-center");

$("p").eq(5).remove();

$("#title").css("font-size", Math.random() * 100 + "px");

$("ol").append("<li>So cute!</li>");

$("aside").html("<p>We apologize for the existence of that list</p>");

$("input").on("keyup change", function () {
  $("body").css(
    "background-color",
    "rgb(" +
      $("input").eq(0).val() +
      ", " +
      $("input").eq(1).val() +
      ", " +
      $("input").eq(2).val() +
      ")"
  );
});

$("img").on("click", function () {
  $(this).remove();
});
