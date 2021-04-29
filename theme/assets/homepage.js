var i_sections = new theme.Sections();
i_sections.register('latest-products-section', function slideshow(id) {
  var slider = tns({
    container: `.my-slider-${id}`,
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplay: false,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: "#customize-controls",
    responsive: {
      640: {
        items: 2
      },

      768: {
        items: 5,
        gutter: 30,
        edgePadding: 30
      }
    }
  });
}
);





