const navigation = document.querySelector("nav");
const navigationLinks = document.querySelectorAll("nav ul li a");
const navigationTitle = document.querySelector(".main-title");

const featuredArticle = document.querySelector(".featured-article");
const snippetArticle = document.querySelector(".snippet-of-article");

window.addEventListener("scroll", () => {
    var scroll = window.pageYOffset;
    var windowHeight = window.innerHeight - 50;
    // console.log(scroll > windowHeight)

    if (scroll > windowHeight) {
        navigation.style.backgroundColor = "white";
        navigation.style.boxShadow = "0 0 5px rgba(0,0,0,.5)";
        navigation.style.padding = "5px 0";
    } else if (scroll < windowHeight) {
        navigation.style.backgroundColor = "rgba(255,255,255,.5)";
        navigation.style.boxShadow = "none";
        navigation.style.padding = "15px 0";
    }

    featuredArticle.style.transform = `translate3d(0, ${scroll * .5}px, 0)`
    snippetArticle.style.transform = `translate3d(0, -${scroll * .4}px, 0)`
});

const hamburgerNav = document.querySelector(".top-nav .hamburger img");
var isClicked = true;

const navList = document.querySelector(".list-nav");

hamburgerNav.addEventListener("click", () => {

    if (isClicked == false) {
        isClicked = true;
        // hamburgerNav.style.backgroundColor = "red";
        hamburgerNav.src = "svgs/bars.svg";
        navList.style.height = "0";
    } else {
        isClicked = false;
        // hamburgerNav.style.backgroundColor = "white";
        hamburgerNav.src = "svgs/times.svg";
        navList.style.height = "300px";
    }
});