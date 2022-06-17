
import navbar from "../compnent/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

// import footer from "../compnent/footer.js";
// document.querySelector("#footer").innerHTML=footer();

// showDetails
let data = JSON.parse(localStorage.getItem('data')) || []
let showDetails = document.querySelector('#showDetails');
let totalAmount = 0;

let counter =document.querySelector('#cartCount')
    if(data.length !==0){
        counter.innerText=data.length;
    }



data.forEach((el, idx) =>
{
    
    const divContainer = document.createElement('div');
    
    const crossDiv = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.setAttribute("id","finalbutton")
    button.addEventListener('click', ( ) => {
        removeItem(idx);
    })
    crossDiv.append(button)

    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = el.image;
    image.style.height = '80px';
    image.style.width = '120px';
    imageDiv.append(image);

    const titleDiv = document.createElement('div');
    titleDiv.innerText = el.title

    const priceDiv = document.createElement('div');
    priceDiv.innerText = el.price;

    divContainer.append(crossDiv, imageDiv, titleDiv, priceDiv);
    showDetails.append(divContainer);

    totalAmount = totalAmount + el.price;
    document.querySelector('#amount').innerText = totalAmount;

    if(idx === data.length - 1)
    {
       let cgst = document.querySelector('#cgst');
       cgst.innerText = (totalAmount * 9)/100;
       let sgst = document.querySelector('#sgst');
       sgst.innerText = (totalAmount * 5)/100;
       document.querySelector('#total').innerText = totalAmount + ((totalAmount * 9)/100) + ((totalAmount * 5)/100);
    }
});

function removeItem(idx)
{
    data.splice(idx,1)
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload();
}

document.querySelector("#checbutton").addEventListener("click",finallyfun)
function finallyfun(){
    window.location.href="payment.html"
}


import footer from "../compnent/footer.js";
document.querySelector("#footer").innerHTML=footer()