


let allUsers = [];
const allData= JSON.parse(localStorage.getItem("all_Users_data"))
if(allData ===null){
  localStorage.setItem("all_Users_data",JSON.stringify([]))
}

const currentdata= JSON.parse(localStorage.getItem("Current_session"))
if(allData ===null){
  localStorage.setItem("Current_session",JSON.stringify([]))
}

const submitBtn = document.getElementById("Register");
submitBtn?.addEventListener("click", () => {
  const reg_data = {
    name: `${document.getElementById("FistName").value} ${
      document.getElementById("MiddleName").value 
    } ${document.getElementById("LastName").value}`,
    Phonenum: document.getElementById("Phonenum").value,
    Email: document.getElementById("Email").value,
    deposit: document.getElementById("deposit").value,
    dob: document.getElementById("dob").value,
    Password: document.getElementById("Password").value,
    CPassword: document.getElementById("CPassword").value,
 
  
  };
  // const data= JSON.parse(localStorage.getItem("all_Users_data"))
  // allUsers=[...data];
  // let result= allUsers.filter(object)=>{

  // }


  if(reg_data.Password !==reg_data.CPassword){
    alert("password not match")
  }else
 if(reg_data.deposit >=500 ){
  
    const data = JSON.parse(localStorage.getItem("all_Users_data"));
    allUsers = [...data]
    let result=allUsers.filter((object)=>{
      if(object.Email===reg_data.Email){
        return object;
      }
    })
    console.log(result);
    if(result.length ===0){
      allUsers.push(reg_data);
      allUsers=JSON.stringify(allUsers);
      localStorage.setItem("all_Users_data",allUsers);
      location.assign("dashboard.html")
      
  
    }
    else{alert("user already exist")}
  }
   else{
     alert('please use amount equal to or greater than 500 to register')
   }
 
  
return;

});


const loginBtn = document.getElementById("login")

loginBtn?.addEventListener("click",()=>{
  login_data ={
    username: document.getElementById("Emails").value,
    Password:document.getElementById("Passwords").value
  }
  const data = JSON.parse(localStorage.getItem("all_Users_data"));
  allUsers=[...data]
  let result = allUsers.filter((object)=>{
    if(object.Email ===login_data.username && object.Password ===login_data.Password){
      return object;
    }
  })
  if (result.length !==0){
    let currentUser=result
  
    localStorage.setItem("current_session",JSON.stringify(currentUser))
    location.assign("dashboard.html")
  }
  else{
    alert("email invalid or password invalid")
   
  }
})



