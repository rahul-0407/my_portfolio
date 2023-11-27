





const darkMode = document.getElementById("dark");
const navbar = document.getElementById("navbar");
const navFont = document.querySelectorAll(".font-nav");
const navFont1 = document.querySelectorAll(".font-nav1");
const header = document.getElementById("home");
const line = document.querySelectorAll("#line")
const dropDown= document.getElementById("drop-down")
const headerTitle  = document.getElementById("header__title")
const light = document.querySelector(".switch");
const homeShadow = document.getElementById("home-shadow");
const homeShadow1 = document.getElementById("home-shadow1");
const blockShadow = document.querySelectorAll(".block-shadow")
const aboutSection = document.getElementById("aboutSection");
const sign = document.querySelector(".sign");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const pic1 = document.querySelector(".pic1");
const navShadow = document.querySelector(".nav-shadow")
const service = document.getElementById("servicesSection")
const card = document.querySelectorAll(".card")


var isLight = true;


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {

        navbar.style.opacity = "1";

        var leftSection = document.getElementById("leftSection");
        leftSection.style.opacity = "1";
        leftSection.classList.add("slideInLeft");

        var rightSection = document.getElementById("rightSection");
        rightSection.style.opacity = "1";
        rightSection.classList.add("slideInRight");


    }, 400); // Adjust the delay (in milliseconds) as needed
});

darkMode.addEventListener("click", () => {
  if (isLight) {
    navbar.style.backgroundColor = "#141414";
    header.style.backgroundColor = "#141414";
    Array.from(line).forEach((e) => {
      e.style.backgroundColor = "hsl(0, 0%, 87%)"
    })
    dropDown.style.backgroundColor = "#2f2f2f";
    light.classList.remove("ri-moon-line")
    light.classList.add("ri-sun-line")
    headerTitle.style.background = "linear-gradient(45deg, hsla(14, 100%, 58%, 0.64), #141414)";
    Array.from(blockShadow).forEach((e) => {
      e.style.borderColor = "hsl(0, 0%, 87%)";
    });
    sign.style.filter = "invert(1)";
    btn2.style.backgroundColor = "hsl(0, 0%, 87%)"
    btn2.style.borderColor = "hsl(0, 0%, 87%)"
    btn3.style.color = "hsl(0, 0%, 87%)"
    btn3.style.borderColor = "hsl(0, 0%, 87%)";
    pic1.style.borderColor = "black";
    homeShadow.style.backgroundColor = "#1e2020";  
    homeShadow1.style.backgroundColor = "#141414";  
    aboutSection.style.backgroundColor = "#1e1e1e";  
    service.style.backgroundColor = "#141414"; 
    Array.from(card).forEach((e) => {
      e.style.backgroundColor = "#141414";
      e.style.borderColor = "hsl(0, 0%, 87%";
    });
    Array.from(navFont).forEach((e) => {
      e.style.color = "hsl(0, 0%, 87%)";
    });
    Array.from(navFont1).forEach((e) => {
      e.style.color = "black";
    });
    // navShadow.style.boxShadow = "0 0 9px hsl(0, 0%, 30%)"
    isLight = false;

  } 
  
  else{
    navbar.style.backgroundColor = "hsl(0, 0%, 87%)";
    header.style.backgroundColor = "hsl(0, 0%, 87%)";
    Array.from(line).forEach((e) => {
      e.style.backgroundColor = "black"
    });
    dropDown.style.backgroundColor = "black";
    light.classList.remove("ri-sun-line")
    light.classList.add("ri-moon-line");
    homeShadow.style.backgroundColor = "hsl(0, 0%, 83%)";    
    homeShadow1.style.backgroundColor = "hsl(0, 0%, 87%)";    
    headerTitle.style.background = "linear-gradient(45deg, hsla(14, 100%, 58%, 0.64), hsl(0,0%, 87%))";
    Array.from(blockShadow).forEach((e) => {
      e.style.borderColor = "#141414";
    });
    sign.style.filter = "invert(0)";
    btn2.style.backgroundColor = "black";
    btn2.style.borderColor = "hsl(0, 0%, 87%)"
    btn3.style.color = "black"
    btn3.style.borderColor = "black";
    pic1.style.borderColor = "white";
    aboutSection.style.backgroundColor = "#d4d4d4";
    service.style.backgroundColor = "hsl(0, 0%, 87%)";  
    Array.from(card).forEach((e) => {
      e.style.backgroundColor = "hsl(0, 0%, 87%)";
      e.style.borderColor = "#141414"
    });
    Array.from(navFont).forEach((e) => {
      e.style.color = "black";
    });
    Array.from(navFont1).forEach((e) => {
      e.style.color = "hsl(0, 0%, 87%)";
    });
    isLight = true;
  }
});

document.addEventListener("DOMContentLoaded", function () {

  
    window.addEventListener("scroll", function (detail) {
      // console.log(detail)
      let scrollPosition = window.scrollY;
      // console.log(scrollPosition)
      // console.log(aboutSection.offsetTop)
  
      if (scrollPosition > aboutSection.offsetTop-(aboutSection.offsetTop/1.5)) {
        navbar.classList.add("nav-shadow");
        aboutSection.style.bacgroundColor = "#1e1e1e";
      } else {
        navbar.classList.remove("nav-shadow");
      }
    });
  });



const skill = document.querySelector(".skill")
const EC = document.querySelector(".EC")
const mainSkills = document.querySelector(".main-skills")
const ec = document.querySelector(".e-c")

skill.addEventListener('click', () => {
  mainSkills.style.opacity = "1"
  ec.style.opacity = "0"
  skill.classList.add("underl")
  EC.classList.remove("underl")
});


EC.addEventListener('click', () => {
  mainSkills.style.opacity = "0"
  ec.style.opacity = "1"
  skill.classList.remove("underl")
  EC.classList.add("underl")
})



const rightSectionAbout = document.querySelector(".rightSectionAbout")
const leftSectionAbout = document.querySelector(".leftSectionAbout")


window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  if(scrollPosition > 500){
    leftSectionAbout.style.opacity = "1";
    leftSectionAbout.classList.add("slideInRight");

    rightSectionAbout.style.opacity = "1";
    rightSectionAbout.classList.add("slideInLeft");
  }
})

