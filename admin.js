import {
db,
storage
}
from "./firebase.js";

import {
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

document
.getElementById("uploadBtn")
.addEventListener(
"click",
uploadProduct
);

async function uploadProduct(){

const file=
document
.getElementById("image")
.files[0];

const name=
document
.getElementById("name")
.value;

const price=
document
.getElementById("price")
.value;

const storageRef=
ref(
storage,
"products/"+Date.now()
);

await uploadBytes(
storageRef,
file
);

const imageURL=
await getDownloadURL(
storageRef
);

await addDoc(
collection(db,"products"),
{
name:name,
price:price,
image:imageURL
}
);

alert("Upload Success");
}