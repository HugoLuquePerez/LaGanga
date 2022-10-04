function menu() {
    let demoMenu = document.querySelector(".demo__menu--responsive");
    let link = document.querySelector(".link__container--responsive");
    let link2 = document.querySelector(".link__container--responsive2");
    let link3 = document.querySelector(".link__container--responsive3");
    demoMenu.classList.toggle("none");
    link.classList.toggle("none");
    link2.classList.toggle("none");
    link3.classList.toggle("none");
}