$(document).ready(function(){


  // DESKTOP-SPECIFIC JS

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


  // var $contactForm = $('#contact-form');
  // $contactForm.submit(function(e) {
  // 	e.preventDefault();
  //   $('#message-container').html('');
  //
  // 	$.ajax({
  // 		url: 'https://formspree.io/info@10zingdigital.com',
  // 		method: 'POST',
  //     data: {
  //       Name: $('#contact-form').find("input[name='name']").val(),
  //       Email: $('#contact-form').find("input[name='_replyto']").val(),
  //       Company: $('#contact-form').find("input[name='company']").val(),
  //       Phone: $('#contact-form').find("input[name='phone']").val(),
  //       Message: $('#contact-form').find("textarea[name='message']").val()
  //     },
  //     dataType: 'json',
  //     success: function(data) {
  //       $('#contact-form input').not('.submit').val('');
  //       $('#contact-form textarea').val('');
  //       console.log('success ', data);
  //       $('#message-container').append('<span class="res">Your message has been sent. Thanks for contacting us!</span>');
  // 		},
  // 		error: function(err) {
  //       console.log('error ', err);
  //       $('#message-container').append('<span class="res">Looks like there was an error. Please try again.</span>');
  //     }
  // 	});
  // });

});


