let apiProduct = document.getElementById("apiProduct");
let dataArray = [];
let paginationData = [];
let categoryData = [];
let Page = 1;
fetchRender(1);
fetch(`https://63f4973b55677ef68bbf571a.mockapi.io/reliance`)
  .then((request) => {
    return request.json();
  })
  .then((data) => {
    dataArray = data;
    showPagination(data.length, 6);
  });

function fetchRender(pagenumber) {
  fetch(
    `https://63f4973b55677ef68bbf571a.mockapi.io/reliance?completed=false&page=${pagenumber}&limit=6`
  )
    .then((request) => {
      // let totalusers=request.headers.get("X-Total-Count")
      // console.log(totalusers)

      return request.json();
    })
    .then((data) => {
      console.log(data);
      paginationData = data;

      display(data);
    });
}

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

let paginationdiv = document.querySelector(".pagination-button");
function showPagination(totalitems, limit) {
  let numOfButtons = Math.ceil(totalitems / limit); // 5buttons
  let bag = "";
  for (let i = 1; i <= numOfButtons; i++) {
    bag += `${getButton(i, i)}`;
  }
  paginationdiv.innerHTML = `${bag}`;

  let page = document.querySelectorAll(".pagination-button");
  for (let btn of page) {
    btn.addEventListener("click", function (el) {
      let pageNumber = el.target.dataset["pageNumber"];
      Page = pageNumber;
      fetchRender(pageNumber);
    });
  }
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

let Cable = document.getElementById("Cable&Cards");

Cable.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Cable.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = Cable.value;
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

let Smartphones = document.getElementById("Smartphone");

Smartphones.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Smartphones.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = Smartphones.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Computer = document.getElementById("Computer");

Computer.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Computer.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Computer.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Apple = document.getElementById("Apple");

Apple.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Apple.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Apple.value;
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

let Ptron = document.getElementById("Ptron");

Ptron.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Ptron.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Ptron.value;
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

    product.innerText = Apple.value;
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

let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
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
    if (dataArray[i].id == Btn && checkProduct(dataArray[i])) {
      cartarr.push({ ...dataArray[i], quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartarr));
      alert("Product Added To The Cart");
      break;
    }
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

let range = document.getElementById("volume");
let rangeMin = document.querySelector(".rangeMin");

range.addEventListener("change", function () {
  rangeMin.innerText = `₹${range.value}`;
  min.getAttribute("placeholder").value = `₹${range.value}`;
});
