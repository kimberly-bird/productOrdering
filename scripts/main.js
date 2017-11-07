const updateDom = require("./productController")
const addReview = require("./productReviewController")
const productFactory = require("./productFactory")
const reviewFactory = require("./productReviewFactory")

// products
const shoesProduct = productFactory("shoes", "blue shoes", "$4.00", 50, "blueshoe.jpg", reviewFactory.shoeArray)
const hatProduct = productFactory("hat", "red hat", "$10.00", 4, "redhat.jpg", reviewFactory.hatArray)
const glassesProduct = productFactory("glasses", "yellow glasses", "$18.00", 32, "yellowglasses.jpg", reviewFactory.glassesArray)

// reviews
// update DOM
updateDom(shoesProduct)
addReview("Great shoes!", shoesProduct) 

updateDom(hatProduct)
addReview("Awesome hat!", hatProduct)

updateDom(glassesProduct)
addReview("Lovely glasses", glassesProduct)
