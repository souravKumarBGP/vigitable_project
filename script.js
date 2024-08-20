// ********************************** logic of show mobile manue when click bars buttons ***************************
const bars = document.querySelector(".bars i");
bars.addEventListener("click", (event) => {
    let i = event.target;
    if(i.classList.contains("fa-bars")){
        document.querySelector(".mobileManue").style.display="block";
    }else{
        document.querySelector(".mobileManue").style.display="none";

    }
    if(i.classList.contains("fa-bars")){
        i.classList.remove("fa-bars")
        i.classList.add("fa-xmark")
        
    }else{
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bars")
    }
   
    console.log(i);

})


// ********************************** logic of loadMore section show when click btn_loadMore ************************
let btnLoamMore = document.querySelectorAll(".btn_loadMore");
for(items of btnLoamMore){
    items.addEventListener("click", (event) =>{
        let currentEle = event.target;
        if(currentEle.innerHTML=="Load More..."){
            currentEle.innerHTML = "Less More..."
        }else if(currentEle.innerHTML == "Less More..."){
            currentEle.innerHTML = "Load More..."
        }
        if(currentEle.innerHTML == "Less More..."){
            event.target.nextElementSibling.classList.remove("d-none");
        }else if(currentEle.innerHTML == "Load More..."){
            event.target.nextElementSibling.classList.add("d-none");
        }        
        
    })
}

// *********************************** logic of unit increage and decreage *******************************************
let unitButtons = document.querySelectorAll(".unit button");
let unit = document.querySelectorAll(".unit span b");
for(items of unit){
    items.innerHTML = 5;
}
for(items of unitButtons){
    items.addEventListener("click", (event) =>{
        let currentEle = event.currentTarget;

        if(currentEle.innerHTML == "-"){
            let nextSiv = currentEle.nextElementSibling.querySelector("b");
            nextSiv.innerHTML = nextSiv.innerHTML - 1;
            if(nextSiv.innerHTML <= 1){
                nextSiv.innerHTML = 1;
            }
        }else if(currentEle.innerHTML == "+"){
            let nextSiv = currentEle.previousElementSibling.querySelector("b");
            nextSiv.innerHTML = Number(nextSiv.innerHTML) + 1;
        }
    })
}



