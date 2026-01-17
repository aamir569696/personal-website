let filterDiv = document.querySelectorAll(".filter-div li");
let imagesDiv = document.querySelectorAll(".image-div");

filterDiv.forEach((link) => {
  link.addEventListener("click", () => {
    // ACTIVE button change when clicked
    filterDiv.forEach((btn) => btn.classList.remove("active"));
    link.classList.add("active");

    let filter = link.getAttribute("data-filter");

    imagesDiv.forEach((img) => {
      let category = img.getAttribute("data-category");

      //smooth hide
      img.style.opacity = "0";

      setTimeout(() => {
        if (filter === "all" || filter === category) {
          img.style.display = "block";
          setTimeout(() => (img.style.opacity = "1"), 50); //smooth show
        } else {
          img.style.display = "none";
        }
      }, 300); //small delay for smooth feel
    });
  });
});

//Form validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //input acces

  let name = document.querySelector('.form-control[type="text"]').value.trim();
  let email = document
    .querySelector('.form-control[type="email"]')
    .value.trim();
  let subject = document.querySelector(".form-control1").value.trim();
  let message = document.querySelector("textarea").value.trim();

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter the corect email");
    return;
  }
  if (email.startsWith("@") || email.endsWith("@")) {
    alert("Email can not start or end on @");
    return;
  }
  if (email.includes(" ")) {
    alert("space not aloud");
    return;
  }

  if (name.length < 3) {
    alert("Please enter the name more than 3 letter");
    return;
  }

  if (subject.length < 3) {
    alert("plase enter the subject more than 3 words");
    return;
  }
  if (message.length < 4) {
    alert("please type the massage more than 4 words");
    return;
  }
  // if all checks pass
  alert("Form submitted successfully");
  form.reset(); // clears form
});

//update number
window.addEventListener("load", function () {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    let finalNumber = +counter.getAttribute("data-target");
    let currentNumber = 1;

    const updateCounter = () => {
      if (currentNumber < finalNumber) {
        currentNumber++;
        counter.innerText = currentNumber;
        setTimeout(updateCounter, 5); // ⚡ speed, lower = faster
      } else {
        counter.innerText = finalNumber; // stop at final
      }
    };

    updateCounter();
  });
});

//for no reload
let clickme=document.querySelectorAll(".click");
clickme.forEach(function(elem){
  elem.addEventListener("click",function (e) {
    e.preventDefault();
  })
})

//scrolltoTop

let scroll=document.querySelector(".scrool");

window.addEventListener("scroll",function(){
  if(window.scrollY>200){
    scroll.style.display="block";
  }else{
    scroll.style.display="none";
  }
})
scroll.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",

  })
})
//for toggale-effect

let toggleBtn=document.querySelector(".toggle-btn");
let sidebar=document.querySelector(".sidebar");

toggleBtn.addEventListener("click",()=>{
  console.log("dgsgusd")
 sidebar.classList.toggle("active")
})

//forloading website

window.addEventListener("load", function() {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    document.querySelector(".layout").style.opacity = 1;
    setTimeout(() => preloader.style.display = "none", 500);
  }, 2000); 
});




   
