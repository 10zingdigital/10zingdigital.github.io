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


    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

  });


