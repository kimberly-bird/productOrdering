// displays reviews on DOM, below matching product
const reviewFactory = require("./productReviewFactory")

const reviewEl = document.getElementById("productInfo")

const addReview = (review, product) => {
    product["reviews"].push(review)

    product["reviews"].forEach(review => {
        reviewEl.innerHTML += `
        <section>Review: ${review}</section>
        `
    })
}

module.exports = addReview