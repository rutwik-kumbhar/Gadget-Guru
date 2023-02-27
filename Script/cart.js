let logedUser = JSON.parse(localStorage.getItem("loged-user")) || {};

let Cart = JSON.parse(localStorage.getItem(`${logedUser.name}-cart`)) || [];
let cartCount = document.querySelector("#cart-count");
cartCount.textContent = Cart.length

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
    msg.innerText = "Please Place Your Order";
  }
}
// book btn
let bookBtn = document.getElementById("book");
bookBtn.addEventListener("click", function () {
  location.href = "./pay.html";
});
//////////// nav-bar js part////////////
// let usersData = JSON.parse(localStorage.getItem("users")) || [];
// let logedUser = JSON.parse(localStorage.getItem("loged-user")) || {};

let userInfo = document.querySelectorAll(".user-info");
let navBtns = document.querySelectorAll(".nav-btns");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#no");
let logout = document.querySelector("#logout");
let userName = document.querySelector("#user-name");

logout.addEventListener("click", () => {
  localStorage.removeItem("loged-user");
  location.reload();
});

if (logedUser.name) {
  userInfo.forEach((el) => {
    el.style.display = "block";
  });
  navBtns.forEach((el) => {
    el.style.display = "none";
  });
  name.textContent = logedUser.name;
  userName.textContent = logedUser.name;
  email.textContent = logedUser.email;
  number.textContent = logedUser.phone;
} else {
  console.log("No");
}

getUserData();

function getUserData() {
  let signin_form = document.querySelector("#sign-in");
  signin_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
      name: signin_form.name.value,
      email: signin_form.email.value,
      phone: signin_form.number.value,
      password: signin_form.password.value,
    };
    usersData.push(formData);
    localStorage.setItem("users", JSON.stringify(usersData));
    console.log(formData);
    let signin = document.querySelector("#signin-modal");
    signin.setAttribute("data-bs-dismiss", "modal");
    alert("Account Created");
  });
}

function loginUser() {
  let login = false;
  let login_form = document.querySelector("#log-in");
  let login_modal = document.querySelector("#login-modal");
  login_modal.setAttribute("data-bs-dismiss", "modal");
  login_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = login_form.loginEmail.value;
    let password = login_form.loginPassword.value;
    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].email == email && usersData[i].password == password) {
        logedUser = usersData[i];
        localStorage.setItem("loged-user", JSON.stringify(logedUser));
        login = true;
        break;
      }
    }
    if (login) {
      alert("Successs");
      userInfo.forEach((el) => {
        el.style.display = "block";
      });
      navBtns.forEach((el) => {
        el.style.display = "none";
      });
      location.reload();
    } else {
      alert("wrong credential");
    }
  });
}

loginUser();

let userInfoBtn = document.querySelector("#dropdownMenuUser");
let userDiv = document.querySelector("#user-div");
let btnClose = document.querySelector("#btn-close");
// let buynow = document.querySelector("#book")

userInfoBtn.addEventListener("click", () => {
  userDiv.style.display = "block";
});

btnClose.addEventListener("click", () => {
  userDiv.style.display = "none";
});

// buynow.addEventListener("click", () => {
//   window.location="../HTML/pay.html"
// });
// document.getElementById("book").onclick = function () {
//   location.href = "../HTML/pay.html";
// };
