if (mediaTablette = window.matchMedia("(min-width: 1081px)"), mediaTablette.matches) {
    var e = gsap.timeline({
        defaults: {
            ease: "power4"
        }
    }).to(".cd_web .img_hero_web", {
        width: "35%",
        left: "50%",
        filter: "brightness(1)",
        y: 100
    }).to(".cd_web h1", {
        left: "10%",
        y: -150
    }, "<0.1");
    ScrollTrigger.create({
        animation: e,
        trigger: ".hero_web",
        start: "top top",
        end: "bottom",
        scrub: 1,
        pin: true
    });
    var t = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".hero_web .cd_txt_web h2", {
        opacity: "1"
    }).to(".hero_web .cd_txt_web p", {
        opacity: "1"
    }, "<0.5");
    ScrollTrigger.create({
        animation: t,
        trigger: ".hero_web h1",
        start: "top",
        end: "max"
    });
    var i = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb1 .cd_txt_web h2", {
        opacity: "1"
    }).to(".subcdweb1 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25").to(".subcdweb1 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }, "<0.1");
    ScrollTrigger.create({
        animation: i,
        trigger: ".hero_web img_hero_web",
        start: "bottom",
        end: "max"
    });
    var a = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb2 .cd_txt_web h2", {
        opacity: "1"
    }).to(".subcdweb2 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25").to(".subcdweb2 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }, "<0.1");
    ScrollTrigger.create({
        animation: a,
        trigger: ".subcdweb1 .video_img_web",
        start: "bottom 50px",
        end: "max"
    });
    var c = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb3 .cd_txt_web h2", {
        opacity: "1"
    }).to(".subcdweb3 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25").to(".subcdweb3 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }, "<0.1");
    ScrollTrigger.create({
        animation: c,
        trigger: ".subcdweb2 .video_img_web",
        start: "center",
        end: "max"
    });
    var b = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb4 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }).to(".subcdweb4 .cd_txt_web h2", {
        opacity: "1"
    }, "<1").to(".subcdweb4 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25");
    ScrollTrigger.create({
        animation: b,
        trigger: ".subcdweb3 .video_img_web",
        start: "center",
        end: "max"
    });
    var o = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb5 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }).to(".subcdweb5 .cd_txt_web h2", {
        opacity: "1"
    }, "<1").to(".subcdweb5 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25");
    ScrollTrigger.create({
        animation: o,
        trigger: ".subcdweb4 .video_img_web",
        start: "center",
        end: "max"
    });
    var s = gsap.timeline({
        defaults: {
            ease: "sine"
        }
    }).to(".subcdweb6 .video_img_web", {
        "clip-path": "inset(0 0 0 0)"
    }).to(".subcdweb6 .cd_txt_web h2", {
        opacity: "1"
    }, "<1").to(".subcdweb6 .cd_txt_web p", {
        opacity: "1"
    }, "<0.25");
    ScrollTrigger.create({
        animation: s,
        trigger: ".subcdweb5 .video_img_web",
        start: "center",
        end: "max"
    });
    document.querySelector('.aos_css').href = "";
    document.querySelector('.aos_css').style.display = "none";
    document.querySelector('.aos_js').style.display = "none";
} else {
    AOS.init({
        once: true
    });
}
;