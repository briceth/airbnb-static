$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // parallax scene
  // var parallaxTl = new TimelineMax();
  // parallaxTl
  //   .from('.content-wrapper', 1, {autoAlpha: 0, ease:Power0.easeNone})
  //   .from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}, 0)
  //   ;

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1
  })
  .setTween(TweenMax.from('.bcg', 0.3, {y: '-50%', ease:Power0.easeNone}, 0.3))
  .addTo(controller);

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.features'
  })
  .setClassToggle('.features', 'fade-in') // add class to feature
  .addTo(controller);

});
