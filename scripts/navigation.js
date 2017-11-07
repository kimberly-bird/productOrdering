const navEl = document.getElementById("navigation")

const displayNav = navEl.innerHTML += 
`<ul>
    <li><a href="#">Categories</a></li>
    <li><a href="#">Orders</a></li>
    <li><a href="#">Log Out</a></li>
</ul>`

module.exports = displayNav
