import navbar from "../compnent/navbar.js";
document.getElementById("navbar2").innerHTML = navbar()




function getData() {
    fetch("https://mini-server12.herokuapp.com/api/data")
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            append(res);
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        })
}
getData()
function append(arr)
{
    const mainBox = document.querySelector('#internseconddiv2');
    
    arr.forEach((el) => 
    {
        const divContainer = document.createElement('div');
        const divChildOne = document.createElement('div');
        const image = document.createElement('img');
        image.src = el.image;
        image.setAttribute("class","interlogos")
        image.style.width = '95px';
        image.style.height = '95px';
        image.style.objectFit = 'contain';
        divChildOne.append(image);

        const divChildTwo = document.createElement('div');
        const company = document.createElement('p');
        company.innerText = el.company;
        company.setAttribute("class","company")
        // company.style.fontSize="20px"
        // company.style.padding="0px 0px -10px 0px"

        const worktag = document.createElement('p');
        worktag.innerText = el.work;
        worktag.setAttribute("class","work")

        const statustag = document.createElement('p');
        statustag.innerText = el.status;
        statustag.setAttribute("class","status")

        const addresstag= document.createElement('p');
        addresstag.innerText = el.address;
        addresstag.setAttribute("class","address")


        const monytag= document.createElement('p');
        monytag.innerText = el.monay;
        monytag.setAttribute("class","mony")

        // Paragraph code here
        divChildTwo.append(company,worktag,statustag,addresstag,monytag)

        const divChildThird = document.createElement('div');
        const paraOne_ = document.createElement('p');
        paraOne_.innerText = '4 Weeks left'
        paraOne_.setAttribute("class","week4")
        const paraTwo_ = document.createElement('img');
        paraTwo_.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/1200px-Sharethis-grey.svg.png"
        paraTwo_.setAttribute("class","shearimg")
        const paraThird_ = document.createElement('button');
        paraThird_.innerText = 'VIEW AND APPLY';
        paraThird_.addEventListener('click', () =>
        {
            window.location.href = './courses.html';
        });
        paraThird_.setAttribute("id","apply")
        divChildThird.append(paraOne_,paraTwo_,paraThird_);

        divContainer.append(divChildOne, divChildTwo,divChildThird );
        mainBox.append(divContainer)
        
    })
    
    

}




document.querySelector("#sidbar").addEventListener("click", opensideBar)
function opensideBar() {
    var sidebar = document.querySelector("#sidebar_container")
    sidebar.style.display = "flex"
}


document.querySelector("#optionforcloseside").addEventListener("click", closesideBar)
function closesideBar() {
    var sidebar = document.querySelector("#sidebar_container")
    sidebar.style.display = "none"
}




document.querySelector("#internsear").addEventListener("click",searchfun)
function searchfun(){
    window.location="internship.html"
}

document.querySelector("#internoption").addEventListener("change",optionfun)
function optionfun(){
    window.location="internship.html"
}


import footer from "../compnent/footer.js";
document.querySelector("#footer").innerHTML=footer();















    // let box = document.createElement("div")

    // let box1 = document.getElementById("companylogo");
    // // let box2 = document.getElementById("companytext");
    // // let box3 = document.getElementById("companysign");
    
    // let tag = document.createElement("p")
    // tag.innerHTML = el[1].address;

    // box.append(tag)
    // box1.append(box)
