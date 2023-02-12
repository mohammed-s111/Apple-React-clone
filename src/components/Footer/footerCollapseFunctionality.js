import $ from "jquery";

$(document).ready(function () {

  $(".footer-links-wrapper h3").click(function () {

    if (parseInt($(window).width()) <= 768) {

      $(this).next().slideToggle();



      $(this).toggleClass("newStyle");
    }
$(window).on("resize", () => {
  window.location.reload(false);
});


  });
  


});
