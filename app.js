import {
db
} from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const container =
document.getElementById("productContainer");

async function loadProducts(){

const querySnapshot =
await getDocs(
collection(db,"products")
);

container.innerHTML="";

querySnapshot.forEach((doc)=>{

const product=doc.data();

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Ks ${product.price}</p>

<button>
Add To Cart
</button>

</div>

`;

});

}

loadProducts();