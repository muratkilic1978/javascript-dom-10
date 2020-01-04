const listElem = document.querySelectorAll(".hot");
//console.log(listElem);

for (let i = 0; i < listElem.length; i++) {
    console.log(listElem[i].textContent);
    //listElem[i].style.backgroundColor = "yellow";
    
    // Adding EventListener calling an External function makeRed()
    //listElem[i].addEventListener("click",makeRed);
    
    // Adding Eventlistener with an anonymous function
    listElem[i].addEventListener("click", function(){
        console.log(this);
        let tempList = this.classList.toggle("shot");
        console.log(tempList); 
    });
}

//External function with the name makeRed() 
//function makeRed(){
//    console.log(this);
//    let tempList = this.classList.toggle("shot");
//    console.log(tempList);
//    
//}

