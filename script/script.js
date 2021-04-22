$(".menu_btn").click(function () {
  if ($(".menu_burger_list").css("display") === "none") {
    $(".menu_burger_list").css("display", "block");
    $(".menu_btn").addClass("open");
  } else {
    $(".menu_burger_list").css("display", "none");
    $(".menu_btn").removeClass("open");
  }
});
