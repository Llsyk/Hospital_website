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

