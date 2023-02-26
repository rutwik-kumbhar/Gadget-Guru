let apiProduct = document.getElementById("apiProduct");
let dataArray = [];
let paginationData = [];
let categoryData = [];
let Page = 1;
let ApiUrl = `https://audio-api-vw3a.onrender.com/Audio`;

fetch(`${ApiUrl}`)
  .then((request) => {
    return request.json();
  })
  .then((data) => {
    dataArray = data;
    paginationData = data;
    display(data);
  });

function display(data) {
  apiProduct.innerHTML = "";
  let arr = [];
  data.forEach((element) => {
    let CardList = getCard(
      element.id,
      element.name,
      element.price,
      element.description,
      element.image
    );
    arr.push(CardList);
  });

  apiProduct.innerHTML = arr.join("");
}

function getCard(id, name, price, description, image) {
  let card = `
     <div class="Card" id=${id}>
     <img src=${image}>
     <h4>${name}</h4>
     <p>${description}</p>
     <h4> ₹${price}</h4>
     <div>
     <button class="AddToCart" value=${id}>Add to Cart</button>
     <button>Add to Wishlist</button>
     </div>
   

     </div>
    `;
  return card;
}

function getButton(text, id) {
  return `<button class="pagination-btn" data-page-Number=${id}>${text}</button>`;
}

let GO = document.querySelector(".GO");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
GO.addEventListener("click", function () {
  if (min && max) {
    let filterData = paginationData.filter((el) => {
      if (el.price >= +min.value && el.price <= +max.value) {
        return true;
      }
    });
    display(filterData);
  }
});

let product = document.querySelector(".titleproduct");

let speaker = document.getElementById("speaker");

speaker.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == speaker.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = speaker.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Headpone = document.getElementById("Headphone");

Headpone.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Headpone.value) {
        return true;
      }
    });

    display(filterData);

    product.innerText = Headpone.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Oppo = document.getElementById("Oppo");

Oppo.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Oppo.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Oppo.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Sony = document.getElementById("Sony");

Sony.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Sony.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Sony.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Boat = document.getElementById("Boat");

Boat.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Boat.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Boat.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Mivi = document.getElementById("Mivi");

Mivi.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Mivi.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Mivi.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let JBL = document.getElementById("JBL");

JBL.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == JBL.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = JBL.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Realme = document.getElementById("Realme");

Realme.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Realme.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Realme.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Google = document.getElementById("Google");

Google.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Google.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Google.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Noise = document.getElementById("Noise");

Noise.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Noise.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Noise.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let PTron = document.getElementById("PTron");

PTron.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == PTron.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = PTron.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let asc = document.querySelector(".asc");

asc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price > paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});

let desc = document.querySelector(".desc");

desc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price < paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});
// ADD to cart functionality
let logedUser = JSON.parse(localStorage.getItem("loged-user")) || {};
let cartarr = JSON.parse(localStorage.getItem(`${logedUser.name}-cart`)) || [];
setTimeout(() => {
  let addToCart = document.querySelectorAll(".AddToCart");

  addToCart.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      btnClicked(Btn);
    });
  });
}, 2000);

function btnClicked(Btn) {
  addToCart(Btn.value);
}

function addToCart(Btn) {
  for (let i = 0; i < dataArray.length; i++) {
    if (
      dataArray[i].id == Btn &&
      checkProduct(dataArray[i]) &&
      checkUserLoging()
    ) {
      cartarr.push({ ...dataArray[i], quantity: 1 });
      localStorage.setItem(`${logedUser.name}-cart`, JSON.stringify(cartarr));
      alert("Product Added To The Cart");
      break;
    }
  }
}

function checkUserLoging() {
  if (logedUser.name) {
    return true;
  } else {
    alert("First Login on Website");
  }
}

function checkProduct(element) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i].id === element.id) {
      alert("Product Already Exist In The Cart");
      return false;
    }
  }
  return true;
}

//////////////range//////////////////////////////////

let range = document.getElementById("volume");
let rangeMin = document.querySelector(".rangeMin");

range.addEventListener("change", function () {
  let filterData = dataArray.filter((el) => {
    if (el.price >= 700 && el.price <= range.value) {
      return true;
    }
  });

  display(filterData);

  rangeMin.innerText = `₹${range.value}`;
});

// user login checked
let userInfo = document.querySelectorAll(".user-info");
let navBtns = document.querySelectorAll(".nav-btns");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#no");

if (logedUser.name) {
  userInfo.forEach((el) => {
    el.style.display = "block";
  });
  navBtns.forEach((el) => {
    el.style.display = "none";
  });
  name.textContent = logedUser.name;
  email.textContent = logedUser.email;
  number.textContent = logedUser.phone;
} else {
  console.log("No");
}

// logout out

let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("loged-user");
  location.reload();
});

let userInfoBtn = document.querySelector("#dropdownMenuUser");
let userDiv = document.querySelector("#user-div");
let btnClose = document.querySelector("#btn-close");

userInfoBtn.addEventListener("click", () => {
  userDiv.style.display = "block";
});

btnClose.addEventListener("click", () => {
  userDiv.style.display = "none";
});
