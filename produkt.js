const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h3.h3_produkt").textContent = product.productdisplayname;
  document.querySelector("p.produktpris").textContent = product.price;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.discount) {
    document.querySelector("p.p4").textContent = product.price - (product.price / 100) * product.discount + "KR";
    document.querySelector("p.p5").textContent = product.discount + "%";
  } else {
    document.querySelector(".discount").remove();
  }
  document.querySelector("p.description").innerHTML = product.description;
}
