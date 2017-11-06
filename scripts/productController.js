// displays products on DOM
// create an array of all product that calls one function to iterate and insert into DOM

const productsEl = document.getElementById("productInfo")

const updateDOM = (product) => {

    productsEl.innerHTML += `
        <img id="image" src="img/${product.image}">
        <section>Title: ${product.title}</section>
        <section>Description: ${product.description}</section>
        <section>Price: ${product.price}</section>
        <section>Quantity: ${product.quantity}</section>
    `
}

module.exports = updateDOM