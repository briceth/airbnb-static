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
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg', 0.3, {y: '-50%', ease:Power0.easeNone}, 0.3))
  .addTo(controller);

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.features',
    duration: '100%'
  })
  .setClassToggle('.features', 'fade-in') // add class to feature
  .addTo(controller);

});

//         var offset = $(".navbar-wagon").offset().top;
//         $(document).scroll(function(){
//             var scrollTop = $(document).scrollTop();
//             if(scrollTop > offset){
//                 $(".navbar-wagon").css("position", "fixed");
//             }
//             else {
//                 $(".navbar-wagon").css("position", "static");
//             }
//         });
//     });

// $(document).ready(function() {
//   $('.btn-submited').mousover(function() {
//     // $('p').removeClass('animated fadeInUp')
//     $('p').addClass('animated fadeInDown');
//   });
// });

// $(document).ready(function() {
//   var alban = [
//   {ownerName: "Alban de Lanouvelle"},
//   {summary: "CEO, co-founder"}];

//    var vladimir = [
//   {ownerName: "Bricout"},
//   {summary: "CTO, co-founder"}];


//     function mouse(arr) {
//       $('.card-description').empty();
//       $(arr).each(function(i) {

//       $('.card').mouseenter(function() {
//       $('.card-description').texto("hello");
//     })
//     .mouseleave(function() {
//       $('.card-description').text("");
//        });
//    });
//   }
