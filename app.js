const openNav = document.querySelectorAll(".icon1");
const fermerNav = document.querySelectorAll(".fermer");
const menu = document.querySelectorAll(".menu");

const positionMenu = menu.getBoundingClientRect().left;

openNav.addEventListener("click", () => {
    if(positionMenu < 0) {
        menu.classList.add("montrer")
    }
})

fermerNav.addEventListener("click", () => {
    if(positionMenu < 0) {
        menu.classList.remove("cacher")
    }
})