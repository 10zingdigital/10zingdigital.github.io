$(document).ready(function(){

    // handler for marketing services nav list
    $('.navigation li:first-child').hover(function(){
      $('#services').show();
      $(this).children('div').addClass('hover-over-services');
      $(this).find('ul').addClass('hover-over-services-ul');

      // marketing services sub-nav
      $('#services li').hover(function(){
        $(this).css('color', '#FF8110');
        $(this).children('div').addClass('underlined');
        $(this).mouseleave(function(){
          $(this).css('color', '#fff');
          $(this).children('div').removeClass('underlined');
        });
      });

      $(this).mouseleave(function(){
        $('#services').hide();
        $(this).children('div').removeClass('hover-over-services');
        $(this).find('ul').removeClass('hover-over-services-ul');
      });
    });


    $('.nav-trigger').click(function() {
      event.preventDefault();
      $('body').toggleClass('nav-open');
    })

    $('ul.nav a, .overlay').click(function() {
      setTimeout(function() {
        $('body').removeClass('nav-open');
      }, 400);
    })

});


