$(document).ready(function() {
  // handler for marketing services nav list
  $(".navigation li:first-child").hover(function() {
    $("#services").show();
    $(this)
      .children("div")
      .addClass("hover-over-services");
    $(this)
      .find("ul")
      .addClass("hover-over-services-ul");

    // marketing services sub-nav
    $("#services li").hover(function() {
      $(this).css("color", "#FF8110");
      $(this)
        .children("div")
        .addClass("underlined");
      $(this).mouseleave(function() {
        $(this).css("color", "#fff");
        $(this)
          .children("div")
          .removeClass("underlined");
      });
    });

    $(this).mouseleave(function() {
      $("#services").hide();
      $(this)
        .children("div")
        .removeClass("hover-over-services");
      $(this)
        .find("ul")
        .removeClass("hover-over-services-ul");
    });
  });

  $(".nav-trigger").click(function() {
    event.preventDefault();
    $("body").toggleClass("nav-open");
  });

  $("ul.nav a, .overlay").click(function() {
    // hide the mobile menu on click
    setTimeout(function() {
      $("body").removeClass("nav-open");
    }, 400);
  });

  // smooth scroll to target on home page for browsers that don't support scroll-behavior property

  if (!CSS.supports("(scroll-behavior: scroll)")) {
    $("body.home ul.nav ul a").click(function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      500,
      "linear"
    );
  });
  }


});
