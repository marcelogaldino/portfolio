const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".cards")

for (let card of cards) {
    card.addEventListener("click", function() {
        const articleId = card.getAttribute("id")
        window.location.href = `/article?id=${articleId}`
        console.log(articleId)
    })
}

