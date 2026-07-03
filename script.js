let menuBtn= document.querySelector(".menu-btn");

let navbar= document.querySelector(".navbar");

menuBtn.onclick= function(){
    if (navbar.style.display == "block"){
        navbar.style.display = "none";
    }
    else{
        navbar.style.display = "block";
    }
}
