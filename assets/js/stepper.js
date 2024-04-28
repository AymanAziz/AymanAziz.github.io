$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "0%");
  $(".step1").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "20%");
  $(".step2").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "40%");
  $(".step3").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "60%");
  $(".step4").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
  $("#line-progress").css("width", "80%");
  $(".step5").addClass("active").siblings().removeClass("active");
});

$(".step06").click(function () {
  $("#line-progress").css("width", "100%");
  $(".step6").addClass("active").siblings().removeClass("active");
});

