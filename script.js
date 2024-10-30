const content = document.querySelectorAll(".content")
const listitems = document.querySelectorAll("nav ul li")

listitems.forEach((item, idx) => {
    item.addEventListener("click", () => {
        hideallcontents()
        hideallitems()

        item.classList.add("active")
        content[idx].classList.add("show")
    })
})

function hideallcontents() {
    content.forEach(content => content.classList.remove("show"))
}
function hideallitems() {
    listitems.forEach(item => item.classList.remove("active"))
}