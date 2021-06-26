'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const container = document.getElementById('container');
  const amenu = document.querySelectorAll('.menu-a');
  const body = document.getElementById('body');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    container.classList.add('mainblur');
    body.classList.add('s-hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    container.classList.remove('mainblur');
    body.classList.remove('s-hide');
  });
  amenu.forEach(function(el,i) {
    el.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
      container.classList.remove('mainblur');
      body.classList.remove('s-hide');
    });
  });
}


$(function () {
  $(window).scroll(function () {
    $(".fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("fade-in");
      } else {
        $(this).removeClass("fade-in");
      }
    });
  });
  jQuery(window).scroll();
});