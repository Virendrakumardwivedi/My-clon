import navbar from "./compnent/navbar.js" ;
document.getElementById("navbardiv").innerHTML=navbar();




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


document.querySelector("#sear").addEventListener("click",searchfun)
function searchfun(){
    window.location="internship.html"
}

document.querySelector("#opitions").addEventListener("click",optionfun)
function optionfun(){
    window.location="internship.html"
}

import footer from "./compnent/footer.js";
document.getElementById("footer").innerHTML=footer();