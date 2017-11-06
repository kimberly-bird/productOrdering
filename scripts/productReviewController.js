// displays reviews on DOM, below matching product

const reviewEl = document.getElementById("productInfo")

const addReview = (review, product) => {
    product.reviews.push(review)
    reviewEl.innerHTML += `
        <section>Review: ${review}</section>
        `
}

module.exports = addReview