mediaTablette = window.matchMedia("(min-width: 1081px)")
if (mediaTablette.matches) { 
var allTriggers = ScrollTrigger.getAll();
var tlGallery = gsap.timeline({
 defaults : {
   ease : "none"
 }
}).to(".gallery", {
 top : "-100px"
}).to(".gallery", {
 x : "-50%"
}).to(".img_gallery:nth-of-type(2)", {
 x : "-25vw"
}, "<").to(".img_gallery:nth-of-type(3)", {
 x : "-10vw"
}, "<").to(".img_gallery:nth-of-type(4)", {
 x : "-40vw"
}, "<").to(".img_gallery:nth-of-type(5)", {
 x : "-150vw"
}, "<").to(".img_gallery:nth-of-type(6)", {
 x : "-70vw"
}, "<").to(".img_gallery:nth-of-type(7)", {
 x : "-50vw"
}, "<").to(".img_gallery:nth-of-type(8)", {
 x : "-90vw"
}, "<").to(".img_gallery:nth-of-type(9)", {
 x : "-110vw"
}, "<").to(".img_gallery:nth-of-type(10)", {
 x : "-70vw"
}, "<").to(".img_gallery:nth-of-type(11)", {
 x : "-80vw"
}, "<").to(".img_gallery:nth-of-type(12)", {
 x : "-90vw"
}, "<").to(".img_gallery:nth-of-type(13)", {
 x : "-65vw"
}, "<").to(".img_gallery:nth-of-type(14)", {
 x : "-90vw"
}, "<");
ScrollTrigger.create({
 animation : tlGallery,
 trigger : "body",
 start : "top top",
 end : "max",
 scrub : 2,
 pin : true
});
var tlGalleryClick = gsap.timeline({
 paused : true,
 defaults : {
   ease : "sine",
   duration : .5,
   stagger : .025
 }
}).to(".img_gallery:nth-of-type(1)", {
 x : "-100vh",
 y : "-100vh",
 opacity : 0,
 filter : "blur(30px)"
}).to(".img_gallery:nth-of-type(2n)", {
 x : "100vh",
 y : "100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".img_gallery:nth-of-type(3n)", {
 x : "-100vh",
 y : "100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".img_gallery:nth-of-type(5n)", {
 x : "-100vh",
 y : "-100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".img_gallery:nth-of-type(7n)", {
 x : "100vh",
 y : "-100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".img_gallery:nth-of-type(11n)", {
 x : "-100vh",
 y : "-100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".img_gallery:nth-of-type(13n)", {
 x : "-100vh",
 y : "100vh",
 opacity : 0,
 filter : "blur(30px)"
}, "<").to(".overlay_gallery", {
 display : "flex",
 filter : "blur(0px) opacity(1)"
}, "<0.5");
var imgGallery = document.querySelectorAll(".img_gallery");
var altGallery = document.querySelector(".info_overlay_gallery p");
var titleGallery = document.querySelector(".info_overlay_gallery h2");
var figureGallery = document.querySelector(".overlay_gallery img");
var l = 0;
for (; l < imgGallery.length; l++) {
 imgGallery[l].addEventListener("click", function() {
   figureGallery.src = this.childNodes[1].src;
   altGallery.innerHTML = this.childNodes[1].alt;
   titleGallery.innerHTML = this.childNodes[1].title;
   tlGalleryClick.play();
   allTriggers.forEach(function(l) {
     l.disable();
   });
 });
}
var backGallery = document.querySelector(".back_gallery");
backGallery.addEventListener("click", function() {
 tlGalleryClick.reverse();
 allTriggers.forEach(function(l) {
   l.enable();
 });
});
document.querySelector('.aos_css').href = "";
    document.querySelector('.aos_css').style.display = "none";
    document.querySelector('.aos_js').src = "";
    document.querySelector('.aos_js').style.display = "none";
}else{
    AOS.init({
        once: true
    });
    $('.cd_img_gallerie:nth-child(15n+2)').addClass('vertical')
    $('.cd_img_gallerie:nth-child(15n+8)').addClass('big')
    $('.cd_img_gallerie:nth-child(15n+3)').addClass('horizontal')
    $('.cd_img_gallerie:nth-child(15n+9)').addClass('verical')
    $('.cd_img_gallerie:nth-child(15n+13)').addClass('horizontal')
    $('.cd_img_gallerie:nth-child(15n+6)').addClass('vertical')
    $('.cd_img_gallerie:nth-child(15n+11)').addClass('big')
    document.querySelectorAll('img').forEach((e) => {
        e.addEventListener('click', () => {
          document.querySelector('.overlay_gallery_mobile img').src = e.src;
          document.querySelector('.overlay_gallery_mobile img').alt = e.alt;
          document.querySelector('.overlay_gallery_mobile img').title = e.title;
          document.querySelector('.overlay_gallery_mobile div h4').innerHTML = e.title;
          document.querySelector('.overlay_gallery_mobile div p').innerHTML = e.alt;
          document.querySelector('.overlay_gallery_mobile').style.pointerEvents = "all";
          document.querySelector('.overlay_gallery_mobile').style.filter = "blur(0px) opacity(1)";
        })
      })
    document.querySelector('.overlay_gallery_mobile div i').addEventListener('click', (e) => {
        document.querySelector('.overlay_gallery_mobile').style.pointerEvents = "none";
        document.querySelector('.overlay_gallery_mobile').style.filter = "blur(100px) opacity(0)";
    })
}
