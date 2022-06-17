
  import navbar from "../compnent/navbar.js";
  document.querySelector("#navbar1").innerHTML= navbar();

  import footer from "../compnent/footer.js";
  document.querySelector("#footer").innerHTML=footer();






let userData=JSON.parse(localStorage.getItem("DATA"))||[]

function Nuser(fn,ln,e,pass){
    this.fName=fn;
    this.lName=ln;
    this.email=e;
    this.password=pass;
}
 document.querySelector("#submitbtn").addEventListener("click",function(e){
 e.preventDefault();

    let from=document.querySelector("#registerhere")
    let fName = from.firstname.value;
    let lName = from.lastname.value;
    let email = from.email.value;
    let password=from.password.value;
   // console.log(fName,lName,email,password)
   
   let d1= new Nuser(fName,lName,email,password)
   userData.push(d1)
   // console.log(userData)


   localStorage.setItem("DATA",JSON.stringify(userData))
 })
 
 document.querySelector('#submitbtn').addEventListener("click",fun)
 function fun(){
   window.location.href="index.html"
 }
//  document.querySelector("#sidbar").addEventListener("click",opensideBar)
//  function opensideBar(){
//     var sidebar= document.querySelector("#sidebar_container")
//     sidebar.style.display="flex"
//  }
 
 
//  document.querySelector("#optionforcloseside").addEventListener("click",closesideBar)
//  function closesideBar(){
//      var sidebar= document.querySelector("#sidebar_container")
//     sidebar.style.display="none" 
//  }
 
