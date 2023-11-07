const underline = document.querySelectorAll("ul a");
underline.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("a.active").classList.remove("active");
        item.classList.add("active");
    });
});