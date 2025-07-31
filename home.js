// for review section
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

var fadeInElements = document.querySelectorAll(".fade-in");


var fadeInOptions = {};


const fadeInCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    } else {
      entry.target.classList.remove("appear"); // If you want to use animation on every scroll 
    }
  });
};

const observer = new IntersectionObserver(fadeInCallback, fadeInOptions);
fadeInElements.forEach((element) => {
  observer.observe(element);
});

var slideElements = document.querySelectorAll(".more-stuff-grid");
var slideOptions = {};

const slideAnimationCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Array.from(entry.target.children).map((child) => {
        if (child.classList.contains("from-left")) {
          child.classList.add("from-left-normal");
        } else {
          child.classList.add("from-right-normal");
        }
      });
    }
  });
};

const slideObserver = new IntersectionObserver(
  slideAnimationCallback,
  slideOptions
);
slideElements.forEach((element) => {
  slideObserver.observe(element);
});
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200
  });
});

function validation()
{
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern))
  {
    form.classList.add("valid")
    form.classList.remove("invalid");
    text.innerHTML= "Your Email Address is Valid.";
    text.style.color = "#1C1AE7";
  }
  else
  {
    form.classList.remove("valid")
    form.classList.add("invalid");
    text.innerHTML = "Please enter valid email address";
    text.style.color="#ff0000";
  }
  if (email== " ")
  {
    form.classList.remove("valid")
    form.classList.remove("invalid");
    text.innerHTML= " ";
    text.style.color = "#00ff00";
  }



}
function validate()
{
  var form = document.getElementById("form");
  var name = document.getElementById("name").value;
  var text1 = document.getElementById("text1");
  var pattern1 = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
  if (name.match(pattern1))
  {
    form.classList.add("valid")
    form.classList.remove("invalid");
    text1.innerHTML= "Your name is Valid.";
    text1.style.color = "#1C1AE7";
  }
  else
  {
    form.classList.remove("valid")
    form.classList.add("invalid");
    text1.innerHTML = "Please enter valid name";
    text1.style.color="#ff0000";
  }
  if (name== " ")
  {
    form.classList.remove("valid")
    form.classList.remove("invalid");
    text1.innerHTML= " ";
    text1.style.color = "#00ff00";
  }



}
function validations()
{
  var form = document.getElementById("form");
  var phone = document.getElementById("phone").value;
  var text2 = document.getElementById("text2");
  var pattern2 = /^\d{10}$/;
  if (phone.match(pattern2))
  {
    form.classList.add("valid")
    form.classList.remove("invalid");
    text2.innerHTML= "Your mobile phone is Valid.";
    text2.style.color = "#1C1AE7";
  }
  else
  {
    form.classList.remove("valid")
    form.classList.add("invalid");
    text2.innerHTML = "Please enter valid mobile phone number";
    text2.style.color="#ff0000";
  }
  if (phone== " ")
  {
    form.classList.remove("valid")
    form.classList.remove("invalid");
    text2.innerHTML= " ";
    text2.style.color = "#00ff00";
  }



}
