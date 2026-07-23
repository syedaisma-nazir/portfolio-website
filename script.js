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


// Resume Button

const resumeButton = document.querySelector("#resume button");

resumeButton.addEventListener("click", function(){

    alert("Your resume download will begin.");

});


// Contact Form Validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const subject=document.getElementById("subject").value.trim();

    const message=document.getElementById("message").value.trim();

    if(name==="" || email==="" || subject==="" || message===""){

        alert("Please fill in all fields.");

        return;

    }

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});
/* ===========================
   Custom Cursor
=========================== */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",function(e){

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.skill-card,.project-card").forEach(item=>{

    item.addEventListener("mouseenter",function(){

        cursor.classList.add("hover");

    });

    item.addEventListener("mouseleave",function(){

        cursor.classList.remove("hover");

    });

});
document.addEventListener("mousemove",function(e){

    const sparkle=document.createElement("span");

    sparkle.className="sparkle";

    sparkle.style.left=e.clientX+"px";

    sparkle.style.top=e.clientY+"px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },500);

});