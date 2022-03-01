let menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function menu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "600px";
        menuList.style.maxWidth = "230px"
    }else{
        menuList.style.maxHeight = "0px";
    }
}

// scrollbutton

let scrollToTopBtn = document.getElementById("scrollToTopBtn")
let rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scrollToTopBtn.addEventListener("click", scrollToTop)


