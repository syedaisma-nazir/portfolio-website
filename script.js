// Welcome Button Event

document.getElementById("welcomeBtn").addEventListener("click", function(){

    alert("Welcome to my portfolio website!");

});


// Change Hero Heading (DOM Manipulation)

document.querySelector("#hero h2").innerHTML =
"Hello, I'm Syeda Isma Nazir 👋";


// Scroll Button

const topButton = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

};


// Scroll to Top Function

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
const projectButtons = document.querySelectorAll(".project-card button");

projectButtons.forEach(button => {

    button.addEventListener("click", function(){

        alert("Project details will be added soon!");

    });

});
const resumeButton = document.querySelector("#resume button");

resumeButton.addEventListener("click", function(){

    alert("Your resume download will begin.");

});