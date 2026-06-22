const grid =
document.getElementById("product-grid");

const products =
JSON.parse(
localStorage.getItem("products")
) || [];

products.forEach(product=>{

grid.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<div class="price">
${product.price}
</div>

<button class="btn">
ADD TO CART
</button>

</div>

`;

});