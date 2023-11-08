const underline = document.querySelectorAll("ul a");
underline.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("a.active").classList.remove("active");
        item.classList.add("active");
    });
});

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}