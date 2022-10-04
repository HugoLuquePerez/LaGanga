
window.addEventListener("scroll", function(){
    var navContainer = this.document.querySelector(".nav__main--container");
    navContainer.classList.toggle("bg-inverse",window.scrollY>0);
})

let heroInvite = document.querySelector(".hero__invite");
let ownerContainer = document.querySelector(".owner__container");
function menuHero() {
    heroInvite.classList.toggle("none");
    ownerContainer.classList.toggle("none");
}