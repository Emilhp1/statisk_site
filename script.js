const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

let endpint = "https://kea-alt-del.dk/t7/api/products";

if (category) {
  endpint = "https://kea-alt-del.dk/t7/api/products?category=" + category;
}

//fetche

//fetche
fetch(endpint)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //loope
  products.forEach(showProduct);
}
const template = document.querySelector("template").content;
const parent = document.querySelector(".grid");

function showProduct(product) {
  const copy = template.cloneNode(true);
  //copy.querySelector("p.p1").textContent = product.soldout;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p.p2").textContent = product.price;
  if (product.discount) {
    copy.querySelector("p.p3").textContent = product.price - (product.price / 100) * product.discount + "KR";
    copy.querySelector("p.p4").textContent = product.discount + "%";
  } else {
    copy.querySelector(".discount").remove();
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("udsolgt");
  }

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  console.log(product);

  copy.querySelector("p.p2").textContent = product.price + "KR";

  copy.querySelector(".boks2 a").setAttribute("href", `produkt.html?id=${product.id}`);
  copy.querySelector(".boks2 .read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  //clone, ændre, appende
  parent.appendChild(copy);
}

// <article class="boks2">
//     <div class="udsolgt">
//         <p class="p1">Udsolgt</p>
//         <a href="produkt.html">
//             <img src="https://kea-alt-del.dk/t7/images/webp/640/1535.webp" alt="produkt4">
//         </a>
//     </div>
//     <h3>produkt 4</h3>
//     <p class="p2">200kr</p>
//     <div class="discount">
//         <p class="p3">Nu DKK 100</p>
//         <p class="p4">-50%</p>
//     </div>
//     <a href="produkt.html">Læs mere</a>
// </article>
