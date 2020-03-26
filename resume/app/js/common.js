const ancors = document.querySelectorAll('a[href*="#"]')
for (let ancor of ancors) {
ancor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = ancor.getAttribute('href');
    document.querySelector(''+ blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
}