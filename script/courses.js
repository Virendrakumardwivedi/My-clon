import navbar from "../compnent/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let data = JSON.parse(localStorage.getItem('data')) || []

let cartCount = document.querySelector('#cartCount');
if(data.length !== 0)
{
    cartCount.innerText = data.length;
}
/*
    Image img
    Title   h2
    Subtitle P
    price h2
    EMI p 
    know more | checkout
*/

let arr = [
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/it.jpg',title:'IT Starter Pack (4 Courses)',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 15999, emi:'EMI Starting at $915/month'},
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png',title:'Digital Marketing Course',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 5999, emi:'EMI Starting at $315/month'},
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png',title:'Tally + GST Course',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 3999, emi:'EMI Starting at $229/month'},
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png',title:'Android App Development Course',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 3999, emi:'EMI Starting at $299/month'},
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/advanced-excel-course.png',title:'Advanced Excel Course',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 2999, emi:'EMI Starting at $172/month'},
    {image:'https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png',title:'R Programming Course',subtitle:'Learn the most demanded skills in the IT industry today. Sig..',price: 3999, emi:'EMI Starting at $199/month'},
]

arr.forEach(el =>
{
    const mainContainer = document.querySelector('#carts');

    const divContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = el.image;
    image.setAttribute("class","images")
    const title = document.createElement('h2');
    title.innerText = el.title;
    const subTitle = document.createElement('p');
    subTitle.innerText = el.subtitle;
    const price = document.createElement('h3');
    price.innerText = el.price;
    const emi = document.createElement('h4');
    emi.innerText = el.emi;
    const checkout = document.createElement('button');
    checkout.innerText = 'CHECKOUT >>';
    checkout.addEventListener('click', ()=>
    {
        data.push(el);
        cartCount.innerText = data.length;
        console.log(data.length)
        localStorage.setItem('data', JSON.stringify(data));
    });

    divContainer.append(image, title, subTitle, price, emi, checkout);
    mainContainer.append(divContainer);
});


import footer from "../compnent/footer.js";
document.getElementById("footer").innerHTML=footer()


// document.querySelector("#sidbar").addEventListener("click",opensideBar)
// function opensideBar(){
//    var sidebar= document.querySelector("#sidebar_container")
//    sidebar.style.display="flex"
// }


// document.querySelector("#optionforcloseside").addEventListener("click",closesideBar)
// function closesideBar(){
//     var sidebar= document.querySelector("#sidebar")
//    sidebar.style.display="none" 
// }