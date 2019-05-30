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
      document.querySelector('.table-wrapper').classList.add('show');
    });
  });
})(jQuery);