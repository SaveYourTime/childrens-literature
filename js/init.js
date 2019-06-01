(function ($) {
  $(function () {
    M.AutoInit();

    M.Collapsible.init($('.collapsible.expandable'), {
      accordion: false
    });

    $('.slider').slider({
      indicators: false,
      height: 300,
      duration: 500,
      interval: 2000,
    });

    document.querySelector('.read-more a').addEventListener('click', (e) => {
      document.querySelector('.read-more').style.display = 'none';
      document.querySelector('.table-wrapper').style.maxHeight = `${document.querySelector('.table-wrapper').scrollHeight}px`;
    });

    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('hide-box-shadow', !window.pageYOffset);
      window.innerWidth > 992 && nav.style.setProperty('background-color', `rgba(255, 255, 255, ${window.pageYOffset / 300})`, 'important');
    });
  });
})(jQuery);