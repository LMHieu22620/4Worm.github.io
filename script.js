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

function clickitem() {
         list.classList.add("is-active"); 
}
function removeitem() {
         
         list.classList.remove("is-active");
}