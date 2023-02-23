let bag="";

async function fetchDeta(){
    try {
        let url="https://63f4973b55677ef68bbf571a.mockapi.io/reliance";
   await fetch(url)
   .then((res)=>{
     return res.json();
   })
   .then((re)=>{
    // console.log(re)
    bag=re;
      renderData(re);
   });
        
    } catch (error) {
        console.log(error)
    }
}

fetchDeta()



function renderData(data){
     console.log(data);

    let tablebody=document.querySelector("#tbody");
    
    let card=bag.map((ele)=>{
        //    console.log(ele);
        let tr=document.createElement("tr");
        tr.innerHTML=`
          <td>${ele.id}</td>
          <td><img src="${ele.image}" width"100" height="100"></td>
          <td>${ele.name}</td>
          <td>${ele.category}</td>
          <td>${ele.price}</td>
          <td>${ele.description}</td>
       
        <td><button id="deletebtn" onclick="deleteData(${ele.id})">Delete</button></td>
        `
        return tr;
    })
    tablebody.innerHTML="";
    tablebody.append(...card);

}