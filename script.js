var cardsArr = [
  {
    id: 1,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
  {
    id: 2,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
  {
    id: 3,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
  {
    id: 4,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
  {
    id: 5,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
  {
    id: 6,
    title: "SINGLE CREDIT",
    workout_valid: "1 workout",
    price: "38",
    valid: "2 months",
  },
];

const MyContent = document.querySelector(".single-credit");
window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = cardsArr
    .map((x) => {
      return `
    <div class="single-card">
    <span id="${x.id}"></span>
    <h3>${x.title}</h3>
    <h4>Valid for ${x.workout_valid}</h4>
    <h5>${x.price} CHF</h5>
    <button class="btn" id="btn" onClick="addToCart(${x.id})">ADD TO CARD</button>
    <h6>valid for ${x.valid}</h6>
    </div>
    `;
    })
    .join("");

  MyContent.innerHTML = showInHtml;
});

function addToCart(id) {
  const cartTable = document.getElementById("cart-table");
  const newCartItem = cardsArr.find((x) => x.id == id);
  const newElement = `
  <tr id="${newCartItem.id}">
  <td><h3>${newCartItem.title}</h3></td>
  <td><h3>${newCartItem.price} CHF</h3></td>
  <td><h3>1</h3></td>
  <td><h3 id="item-price">${newCartItem.price} CHF</h3></td>
    </tr>
  `;
  cartTable.innerHTML = cartTable.innerHTML + newElement;
  priceArray.push(parseInt(newCartItem.price));
  Quantity();
  sumPrice();
  productAddPopup();
  window.setTimeout(productAddPopupHide, 3000);
}

function Quantity() {
  var quantity = document.getElementById("cartQuantity");
  var table = document.getElementById("cart-table");
  var totalRowCount = table.rows.length;
  quantity.innerHTML = totalRowCount;
}

var priceArray = [];

function sumPrice() {
  var price = document.getElementById("sum-price");
  var sum = priceArray.reduce(function (prev, curr) {
    return prev + curr;
  });

  price.innerText = sum + " CHF";
}

function productAddPopup() {
  document.getElementById("productPopup").style.display = "block";
}

function productAddPopupHide() {
  document.getElementById("productPopup").style.display = "none";
}

function openCart() {
  document.getElementById("popup").style.display = "block";
}

function closeCart() {
  document.getElementById("popup").style.display = "none";
}
