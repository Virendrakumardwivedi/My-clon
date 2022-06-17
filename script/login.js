
  import navbar from "../compnent/navbar.js";
 document.querySelector("#navbar-container").innerHTML= navbar();

import  footer from "../compnent/footer.js";
document.querySelector("#footerContainer").innerHTML= footer()




document.querySelector("#sidbar").addEventListener("click",opensideBar)
function opensideBar(){
   var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="flex"
}


document.querySelector("#optionforcloseside").addEventListener("click",closesideBar)
function closesideBar(){
    var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="none" 
}

let loguserData=JSON.parse(localStorage.getItem("DATA"))||[]
//console.log(loguserData)


document.getElementById("button").addEventListener("click",logfunc);
function logfunc(){
  let logemail=document.getElementById("email").value;
  let logpass=document.getElementById("password").value;
  // console.log(email,pass)
 
for(var i=0; i<loguserData.length; i++){
  if(loguserData[i].email==logemail && loguserData[i].password==logpass){
    alert("Login Successfull")
    window.location.href="index.html"
  }
  else{
    alert("Invalid Useremail of password")
  }
}
}
