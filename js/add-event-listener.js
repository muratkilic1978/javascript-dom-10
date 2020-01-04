const listElem = document.querySelectorAll(".hot");
//console.log(listElem);

for (let i = 0; i < listElem.length; i++) {
    console.log(listElem[i].textContent);
    //listElem[i].style.backgroundColor = "yellow";
    listElem[i].addEventListener("click",makeRed);
}

function makeRed(){
    console.log(this);
    let tempList = this.classList.toggle("shot");
    console.log(tempList);
    
}



//listItem.addEventListener("click",changeColor);
//
//function changeColor(){
//    console.log("liste Item was clicked!!!");
//}
