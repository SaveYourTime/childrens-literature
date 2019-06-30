(function ($) {
  $(function () {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img.lazyload");
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    } else {
      // Dynamically import the LazySizes library
      let script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
      document.body.appendChild(script);
    }

    M.AutoInit();

    $('.sidenav')
      .sidenav()
      .on('click tap', 'li a', () => {
        $('.sidenav').sidenav('close');
      });

    M.Collapsible.init($('.collapsible.expandable'), {
      accordion: false
    });

    $('.slider').slider({
      indicators: false,
      height: 300,
      duration: 500,
      interval: 2000,
    });

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    document.querySelector('.read-more a').addEventListener('click', () => {
      document.querySelector('.read-more').style.display = 'none';
      document.querySelector('.table-wrapper').style.maxHeight = `${document.querySelector('.table-wrapper').scrollHeight}px`;
    });

    const headerScrollTransition = () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('hide-box-shadow', window.pageYOffset > 0 ? false : true);
      window.innerWidth > 992 && nav.style.setProperty('background-color', `rgba(255, 255, 255, ${window.pageYOffset / 300})`, 'important');
    }
    window.addEventListener('scroll', headerScrollTransition);

    const navs = [...document.querySelectorAll('.navbar-fixed ul li a'), ...document.querySelectorAll('.sidenav li a')];
    function bindScrollEffect(e) {
      e.preventDefault();
      const elementId = this.getAttribute('href');
      const top = elementId === '#' ? 0 : document.querySelector(elementId).offsetTop - 64;
      window.scroll({ top, left: 0, behavior: 'smooth' });
      gtag('event', 'Nav Click', {
        'event_category': 'Click',
        'event_label': this.textContent
      });
    }
    navs.forEach((nav) => nav.addEventListener('click', bindScrollEffect));
  });
})(jQuery);