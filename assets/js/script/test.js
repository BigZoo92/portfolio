var curseur = document.querySelector('.cursor');
 var centreYcurseur = parseInt(getComputedStyle(curseur, null).height) / 2;
 var centreXcurseur = parseInt(getComputedStyle(curseur, null).width) / 2;
 window.addEventListener('mousemove', e => {
  curseur.style.left = e.pageX - centreXcurseur + "px"
    curseur.style.top = e.pageY - centreYcurseur + "px"
})
