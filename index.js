var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0],
    linkTrigger = document.querySelectorAll('ul.nav a, .overlay');

navTrigger.addEventListener('click', toggleNavigation);

linkTrigger.forEach(
  function(link){
    link.addEventListener('click', hideNavigation);
  });

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

function hideNavigation(event) {
  setTimeout(function(){body.classList.remove('nav-open')},500);
}

window.onscroll = function() {
  if (window.pageYOffset >= 200) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
}