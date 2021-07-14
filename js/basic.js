$("#audio01").on("playing", function() {
  $(".basic-c01").addClass("show01");
  $(".basic-d01").addClass("show02");
  $(".basic-e01").addClass("show03");
  $(".basic-f01").addClass("show04");
  $(".basic-g01").addClass("show05");
  $(".basic-a01").addClass("show06");
  $(".basic-b01").addClass("show07");
});

$("#audio01").on("pause", function() {
  $(".basic-c01").removeClass("show01");
  $(".basic-d01").removeClass("show02");
  $(".basic-e01").removeClass("show03");
  $(".basic-f01").removeClass("show04");
  $(".basic-g01").removeClass("show05");
  $(".basic-a01").removeClass("show06");
  $(".basic-b01").removeClass("show07");
});
