window.onscroll = function() {
    pixcelheader();
    scrollFunction()
};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
function pixcelheader() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky")
    }
}

var btn = document.getElementById("myBtn")

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}
function topFunction() {
    var timer = setInterval(function(){
        document.body.scrollTop -=25;
        document.documentElement.scrollTop -=25;
        if(document.body.scrollTo <= 0 ||document.documentElement.scrollTop <= 0){
            clearInterval(timer)
        }
    },1)
}

var list = document.getElementById("header-moble");

const addClassitem = document.getElementById("headerClickAdd")
 
function clickitem() {
         list.classList.add("is-active"); 
}
function removeitem() {
         
         list.classList.remove("is-active");
         addClassitem.classList.add("add-color")

}

function currentDiv(n) {
    showDivs(slideIndex = n);
  }

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}