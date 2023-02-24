
let data = [];
// console.log(data)
async function fetchData() {
    try {
        let response = await fetch('https://mockapi-nr5i.onrender.com/Smartphones');
        let jsonData = await response.json();
        // console.log(jsonData)
        data = jsonData;
        renderDataTable(jsonData);
        console.log(jsonData)
    } catch (error) {
        console.error(error);
    }
}

function renderDataTable(data) {
    let tableBody = document.getElementById('data-table-body');
    let rows = data.map(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td> <img src="${item.image}" width="100" height="100"></td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${item.description}</td>
            <td>
                <button id="delete" onclick="deleteData(${item.id})">Delete</button>
            </td>
        `;
        return row;
    });
    tableBody.innerHTML = "";
    tableBody.append(...rows);
}

function showAddModal() {
    document.getElementById('add-modal').style.display = 'block';
}


function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
}

    let form=document.querySelector("#add-form");
        form.addEventListener("submit",(e)=>{
          e.preventDefault();
          let obj={
            image : form.image.value,
            name :  form.name.value,
            price : form.number.value,
            description : form.desc.value,
            category : form.category.value,
          };
          addData(obj)
          console.log(obj)
        })

   

  async function addData(obj){
    try {

      
    await fetch(`https://mockapi-nr5i.onrender.com/Smartphones`,{ 
      method:'POST',
      headers:{
            "Content-Type": 'application/json'
      },
      body:JSON.stringify(obj)
      
    })
    
    alert("added successfully!");
    
    }
     catch (error) {
      console.log(error)
    }
  }



// DELETE///


async function deleteData(id) {
    // Find item with matching id
    let item = data.find(i => i.id === id);
    // Remove item from data array
    data.splice(data.indexOf(item), 1);
  
    try {
      // Remove item from API
      let response = await fetch(`https://mockapi-nr5i.onrender.com/Smartphones/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      if (!response.ok) {
        throw new Error('Failed to delete item from API');
      }
      // Remove item from table
      let tableRow = document.querySelector(`#data-table-body tr[data-id="${id}"]`);
      tableRow.remove();
    // showEditModal(id)
      
    } catch (error) {
      console.error(error);
    }
  }



  // /////////////////UPDATE-PRICE///////////////////////////////


   document.querySelector("#form2").addEventListener("submit",async function(event){
         event.preventDefault();

        try {

          let id=document.querySelector("#Product_id").value;
          let price=document.querySelector("#update_price").value;
 
           let Patch_request=await fetch(`https://mockapi-nr5i.onrender.com/Smartphones/${id}`,{
               method:"PATCH",
               headers:{
                 "Content-Type":'application/json'
               },
               body:JSON.stringify({price:price})
           })
          
        }
         catch (error) {
          console.log(error)
        }

   });