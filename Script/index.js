let usersData = JSON.parse(localStorage.getItem('users')) || [];

getUserData()

function getUserData(){
    let signin_form = document.querySelector("#sign-in");
    signin_form.addEventListener("submit",(e)=>{
        let formData = {
            name : signin_form.name.value,
            email : signin_form.email.value,
            phone : signin_form.number.value,
            password : signin_form.password.value,
        }
        usersData.push(formData)
        let signin = document.querySelector("#signin-modal")
        signin.setAttribute("data-bs-dismiss",'modal')
        alert("Account Created");
        localStorage.setItem("users",JSON.stringify(usersData));
    })

}


function loginUser(){
    let login = false;
    let login_form = document.querySelector("#log-in")
    login_form.addEventListener('submit',(e)=>{
         e.preventDefault();
         let email = login_form.loginEmail.value;
         let password = login_form.loginPassword.value;

         for(let i=0;i<usersData.length;i++){
            if(usersData[i].email == email && usersData[i].password == password){
                login = true
                break;
            }
         }
         if(login){
            alert("Successs");
        }else{
            alert("wrong credential")
        }
    })
    
}

loginUser()










