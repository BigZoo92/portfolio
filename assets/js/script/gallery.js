
let allTriggers = ScrollTrigger.getAll();

let tlGallery = gsap.timeline({ defaults: { ease: "none" } })
    .to('.gallery', { x: "-50%" }, "<")
    .to('.img_gallery:nth-of-type(2)', { x: "-25vw" }, "<")
    .to('.img_gallery:nth-of-type(3)', { x: "-10vw" }, "<")
    .to('.img_gallery:nth-of-type(4)', { x: "-40vw" }, "<")
    .to('.img_gallery:nth-of-type(5)', { x: "-150vw" }, "<")
    .to('.img_gallery:nth-of-type(6)', { x: "-70vw" }, "<")
    .to('.img_gallery:nth-of-type(7)', { x: "-50vw" }, "<")
    .to('.img_gallery:nth-of-type(8)', { x: "-90vw" }, "<")
    .to('.img_gallery:nth-of-type(9)', { x: "-110vw" }, "<")
    .to('.img_gallery:nth-of-type(10)', { x: "-70vw" }, "<")
    .to('.img_gallery:nth-of-type(11)', { x: "-80vw" }, "<")
    .to('.img_gallery:nth-of-type(12)', { x: "-90vw" }, "<")
    .to('.img_gallery:nth-of-type(13)', { x: "-65vw" }, "<")
    .to('.img_gallery:nth-of-type(14)', { x: "-90vw" }, "<")
ScrollTrigger.create({
    animation: tlGallery,
    trigger: 'body',
    start: "top top",
    end: 'max',
    scrub: 1,
    pin: true,
})

let tlGalleryClick = gsap.timeline({ paused: true, defaults: { ease: "sine", duration: 1.25, stagger: 0.02} })
.to('.img_gallery:nth-of-type(1)', { x: "-100vh", y: "-100vh", "opacity": 0, "filter": "blur(30px)"})
.to('.img_gallery:nth-of-type(2n)', { x: "100vh", y: "100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.img_gallery:nth-of-type(3n)', { x: "-100vh", y: "100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.img_gallery:nth-of-type(5n)', { x: "-100vh", y: "-100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.img_gallery:nth-of-type(7n)', { x: "100vh", y: "-100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.img_gallery:nth-of-type(11n)', { x: "-100vh", y: "-100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.img_gallery:nth-of-type(13n)', { x: "-100vh", y: "100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
// .to('.cd_gallery_title', { x: "-100vh", y: "100vh", "opacity": 0, "filter": "blur(30px)"}, "<")
.to('.overlay_gallery', {"display": "flex", "filter": "blur(0px) opacity(1)"}, "<0.5")


const imgGallery = document.querySelectorAll('.img_gallery');
const altGallery = document.querySelector('.info_overlay_gallery p');
const titleGallery = document.querySelector('.info_overlay_gallery h2');
const figureGallery = document.querySelector('.overlay_gallery img');
for (let i = 0; i < imgGallery.length; i++) {
    imgGallery[i].addEventListener('click', function (event) {
        figureGallery.src = this.childNodes[1].src
        altGallery.innerHTML = this.childNodes[1].alt
        titleGallery.innerHTML = this.childNodes[1].title
        tlGalleryClick.play();
            allTriggers.forEach((trigger) => {
                trigger.disable();
            })
    });
}
const backGallery = document.querySelector('.back_gallery');
backGallery.addEventListener('click', function (event) {
    tlGalleryClick.reverse()
    allTriggers.forEach((trigger) => {
        trigger.enable();
    })
})