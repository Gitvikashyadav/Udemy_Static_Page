const y = document.getElementById("y");
y.style.color = "pink";

function toggleMobileMenu() {
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle visibility class
  dropdownContent.classList.toggle("show-dropdown");
}
// -----------------------Baanner Script Start-------------------------------
const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
console.log(slides.length);
function showSlide(index) {
  currentIndex = index % slides.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto loop forward only
setInterval(() => {
  nextSlide();
}, 5000); // every 5 seconds
//---------------------------Banner Script End Here-----------------------------
//-- =======================login and Register javaScript Stat here===============================
const loginDiv = document.getElementById("login");
const regiDiv = document.getElementById("Register");

const siginupBtn = document.getElementById("Sign");
const logBtn = document.getElementById("log");
const TransConE = document.getElementById("TransCon");
const formEfT = document.getElementById("formEf");
T = true;
siginupBtn.onclick = function () {
  if (T) {
    formEfT.style.transform = "rotateY(180deg)";
    T = false;
  } else {
    formEfT.style.transform = "rotateY(0deg)";
    T = true;
  }

  // loginDiv.style.display = "none";
  // regiDiv.style.display = "block";
};
logBtn.onclick = function () {
  if (T) {
    formEfT.style.transform = "rotateY(180deg)";
    T = false;
  } else {
    formEfT.style.transform = "rotateY(0deg)";
    T = true;
  }

  // regiDiv.style.display = "none";
  // loginDiv.style.display = "block";
};
function show() {
  document.body.style.overflow = "auto";
  TransConE.classList.add("Animate");
  setTimeout(() => {
    TransConE.style.display = "none";
    TransConE.classList.remove("Animate");
    formEfT.style.transform = "rotateY(0deg)";
  }, 600);
}
let c = 0;
function openf(ch) {
  document.body.style.overflow = "hidden";
  if (c == 0) {
    TransConE.style.display = "block";
    TransConE.classList.add("Animationsrink");
    c = c + 1;
  }
  if (c == 0) {
    setTimeout(() => {
      TransConE.classList.remove("Animationsrink");
    }, 600);
  }

  if (ch == "Alogin") {
    T = true;
    TransConE.style.display = "block";

    formEfT.style.transform = "rotateY(0deg)";
    loginDiv.style.transform = "rotateY(0deg)";
    regiDiv.style.transform = "rotateY(180deg)";
  } else if (ch == "ARegi") {
    T = true;
    TransConE.style.display = "block";

    formEfT.style.transform = "rotateY(180deg)";
    regiDiv.style.transform = "rotateY(180deg)";
    loginDiv.style.transform = "rotateY(0deg)";
  }
}
