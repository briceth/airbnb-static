$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.features',
  })
  .setClassToggle('.features', 'fade-in') // add class to feature
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    indent: 100,
    colorStart: 'green',
  })
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
