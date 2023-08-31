const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

//fetche
fetch("https://kea-alt-del.dk/t7/api/products?category=" + category);
