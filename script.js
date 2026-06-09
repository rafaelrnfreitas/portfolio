document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav a");
    let current = window.location.pathname.split("/").pop();

    for(let i = 0; i < links.length; i++) {
        let link = links[i];
        if(link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    }
});