import navbar from "../compnent/navbar.js";
document.querySelector('#navbar').innerHTML=navbar();


function Paydata(fn , fcn,fcv){
    this.name=fn;
    this.cartno=fcn;
    this.cvv=fcv;
}


document.querySelector('#submitpay').addEventListener('click',function(e){
    e.preventDefault();
    let form = document.querySelector("#paymentform")
    let name = form.name.value;
    let cartno = form.cartnum.value;
    let cvv = form.cvv.value;

    console.log(name,cartno,cvv)
    if(name.value!=="" && cartno.value!=="" && cvv.value!=="")
    {
        {
            if(cvv.length==4){
                alert("paymen successful")
                window.location="index.html"
            }
            else{
                alert("cvv must be 4 digits")
            }
        }
        
    }
    else{
        alert("Fill all entry")
    }
})


let data = JSON.parse(localStorage.getItem('data')) || []

let counter =document.querySelector('#cartCount')
    if(data.length !==0){
        counter.innerText=data.length;
    }

// function mypayment(event){
   

//     let name = document.querySelector('name').value;
//     let cartno = document.querySelector('cartnum').value;
//     let cvv = document.querySelector('cvv').value;

//     if(name.value!=="" && cartno.value!=="" && data.value!=="")
//     {
//         if(cvv.value.length==3){
//             alert("paymen successful")
//             window.location="index.html"
//         }
//         else{
//             alert("cvv must be 4 digits")
//         }
//     }
//     else{
//         alert("Fill all entry")
//     }
//}
