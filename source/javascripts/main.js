$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // loop through each features
  $('.features').each(function() {
    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .setClassToggle(this, 'fade-in') // add class to feature
    .addTo(controller);
  });
});
