let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container");
let parent = document.querySelector(".parent");
let left = document.querySelector(".left");

console.log(parent);

Display();
function Display(cart) {
  container.innerHTML = "";
  let total = document.getElementById("cart-total");

  let msg = document.getElementById("msg");
  let change = document.getElementById("change");
  document.getElementById("cart-total2").innerText = Cart.length;

  Cart.forEach((element) => {
    let card = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", element.image);

    let name = document.createElement("h5");
    name.innerText = element.name;

    let disc = document.createElement("p");
    disc.textContent = element.description;

    let price = document.createElement("h5");
    price.innerText = `₹${element.price}`;

    let quantity = document.createElement("span");
    let remove = document.createElement("button");
    let Increment = document.createElement("button");
    let decrement = document.createElement("button");
    quantity.innerText = element.quantity;
    remove.innerText = "Remove";
    Increment.innerText = "+";
    decrement.innerText = "-";
    remove.addEventListener("click", () => {
      Cart = Cart.filter((ele) => {
        return ele.id !== element.id;
      });
      localStorage.setItem("cart", JSON.stringify(Cart));
      Display();
    });

    Increment.addEventListener("click", () => {
      element = element.quantity++;
      localStorage.setItem("cart", JSON.stringify(Cart));
      Display();
    });
    decrement.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
        localStorage.setItem("cart", JSON.stringify(Cart));
        Display();
      }
    });

    card.append(
      img,
      name,
      disc,
      price,

      Increment,
      quantity,
      decrement,
      remove
    );
    container.append(card);
  });

  let sum = 0;
  for (let i = 0; i < Cart.length; i++) {
    sum += Cart[i].price * Cart[i].quantity;
    console.log(Cart[i].price);
    console.log(sum);
  }
  total.innerText = sum;

  if (total.innerText == 0) {
    // alert("Your Cart is Empty");
    msg.innerText = "Please Place Your Order";
  }
  // if (msg.innerText == "Please Place Your Order") {
  //   parent.style.display = "none";
  // } else {
  //   parent.style.display = "block";
  // }
}
// book btn
let bookBtn = documt.getElementById("book");
bookBtn.addEventListener("click", function () {
  window.location.href = "./";
});
