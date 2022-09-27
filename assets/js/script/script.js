jQuery(document).ready(function($){
$.Velocity
   .RegisterEffect("parallax", {
      defaultDuration: 800,
      calls: [ 
         [{ opacity: '0', scale: '0.7', boxShadowBlur: '40px' }, 1]
      ]
});
})