(function($) {
  $(document).ready(function () {
    $("body").vegas({
        slides: [
            { src: "/images/slide-1.jpg" },
            { src: "/images/slide-2.jpg" },
            { src: "/images/slide-3.jpg" },
            { src: "/images/slide-4.jpg" }
        ],
        overlay: '/images/overlays/01.png',
        animation: ['kenburns']
    });
  });
})(jQuery);
