let urlcourante = document.location.href;
urlcourante = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 )
document.querySelector('.nom_page').innerHTML = urlcourante
document.querySelector('.novisible').innerHTML = urlcourante
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
      tlAppear.play();
    } 
  };

let tlAppear = gsap.timeline({ paused: true, defaults: { ease: "power4", duration: 0.5} })
tlAppear
.to('.toggle_loader .toggle_arm2', {"opacity": "0" }, "<0.75")
.to('.toggle_loader span', {"animation": "none" }, "<0.75")
.to('.toggle_loader .toggle_arm1', {x: '-40vw'}, "<0.1")
.to('.toggle_loader .toggle_arm1', {"width": "80vw" }, "<0")
.to('.nom_page', {y: "-50vh" }, "<0.75")
.to('.toggle_loader', {y: "-30vh" }, "<")
.to('.overlay_transition', {"clip-path": "circle(0% at 50% 50%)" }, "<0.75")
.to('.overlay_transition', {"display": "none" })
.to('.cd_nom_page', {"display": "none" }, "<")
.to('.toggle_loader', {"display": "none" }, "<")
.from('.revealWorks',{y: "3em", duration: 0.75, stagger: 0.02, ease: "power2"})



function liOverWorks(liWorks) {
    liWorksChildren = liWorks.childNodes;
    liWorksShadow = liWorksChildren[3]
    liWorksShadow.classList.add('shadow_li')
    imgName= liWorksChildren[5].innerHTML
    imgWorks = document.querySelectorAll('.img_works')
    for (let i = 0; i < imgWorks.length; i++) {
        imgWorks[i].style.opacity = "0"
    }
    document.querySelector('.works_title').style.opacity = "0"
    document.querySelector('.'+imgName).style.opacity = "1";
}

function liOutWorks(liWorks) {
    liWorksChildren = liWorks.childNodes;
    liWorksShadow = liWorksChildren[3]
    liWorksShadow.classList.remove('shadow_li')
}