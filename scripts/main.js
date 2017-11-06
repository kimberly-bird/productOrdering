const updateDom = require("./productController")
const addReview = require("./productReviewController")
const productFactory = require("./productFactory")

// products
const shoesProduct = productFactory("shoes", "blue shoes", "$4.00", 50, "blueshoe.jpg")
const hatProduct = productFactory("hat", "red hat", "$10.00", 4, "redhat.jpg")
const glassesProduct = productFactory("glasses", "yellow glasses", "$18.00", 32, "yellowglasses.jpg")

// reviews

const reviewShoe1 = "Art party slow-carb hella, austin craft beer typewriter mustache narwhal cred 3 wolf moon beard. Try-hard mustache keytar plaid occupy af flannel. Stumptown roof party banh mi mumblecore wayfarers selvage pop-up tumeric brunch jean shorts selfies paleo marfa."
const reviewShoe2 = "Venmo shabby chic activated charcoal vaporware next level. Mixtape leggings poutine cliche flannel chambray tbh austin hoodie wolf cardigan blue bottle."
const reviewShoe3 = "Venmo shabby chic activated charcoal vaporware next level. Mixtape leggings poutine cliche flannel chambray tbh austin hoodie wolf cardigan blue bottle."

const reviewHat1 = "Pitchfork adaptogen wolf, twee stumptown banh mi fanny pack four dollar toast iceland helvetica viral street art pabst austin echo park."
const reviewHat2 = "Readymade blue bottle live-edge kitsch activated charcoal pok pok hoodie small batch sriracha hexagon."
const reviewHat3 = "Gastropub tumblr seitan you probably haven't heard of them ethical, banh mi ennui."

const reviewGlasses1 = "Try-hard knausgaard hot chicken fanny pack, forage williamsburg literally organic drinking vinegar vinyl adaptogen ethical irony YOLO."
const reviewGlasses2 = "Yuccie schlitz chartreuse locavore synth blog hot chicken enamel pin. Sriracha chambray tousled you probably haven't heard of them blog beard pinterest fixie whatever polaroid crucifix +1 cred four loko."
const reviewGlasses3 = "Green juice sustainable blog health goth cliche tousled post-ironic thundercats 8-bit lomo sartorial."


// update DOM
updateDom(shoesProduct)
addReview(reviewShoe1, shoesProduct) 
addReview(reviewShoe2, shoesProduct) 
addReview(reviewShoe3, shoesProduct) 
updateDom(hatProduct)
addReview(reviewHat2, hatProduct)
addReview(reviewHat1, hatProduct)
addReview(reviewHat3, hatProduct)
updateDom(glassesProduct)
addReview(reviewGlasses1, glassesProduct)
addReview(reviewGlasses2, glassesProduct)
addReview(reviewGlasses3, glassesProduct)
