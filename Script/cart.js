//

let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container");
// let total = document.getElementById("cart-total");

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
    img.setAttribute("src", element.foodproduct);

    let name = document.createElement("h2");
    name.innerText = "Title:-" + element.foodproductname;

    let disc = document.createElement("p");
    disc.textContent = "Discription:-" + element.foodproductdiscription;

    let price = document.createElement("h3");

    price.innerText = "Price:-" + Number(element.foodproductprice);
    let category = document.createElement("h3");
    category.textContent = "category:-" + element.foodproductcategory;
    //
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
      // window.location.href = "./restaurant.html";
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
    console.log(price);
    // /
    card.append(
      img,
      name,
      disc,
      price,
      category,
      Increment,
      quantity,
      decrement,
      remove
    );
    container.append(card);
  });

  let sum = 0;
  for (let i = 0; i < Cart.length; i++) {
    sum += Cart[i].foodproductprice * Cart[i].quantity;
    console.log(Cart[i].price);
    console.log(sum);
  }
  total.innerText = sum;

  if (total.innerText == 0) {
    alert("Your Cart is Empty");
    msg.innerText = "Your Cart is Empty";
  }
}
