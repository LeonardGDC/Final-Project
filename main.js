
// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Pop up gallery
const images = document.querySelectorAll(".gallery__img");
const modalImage = document.getElementById("image");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById('close-modal');
var caption = document.getElementById("caption");

for (let i = 0 ; i < images.length; i++) {
  images[i].onclick = function (){
    modal.classList.toggle('visible')
    modalImage.src = images[i].src;
    caption.innerHTML = images[i].alt;
  }
}

function toggleModal() {
  document.getElementById('modal').classList.toggle('visible');
}
closeModalButton.addEventListener('click', toggleModal);


// Form 
document.getElementById('contact-form').addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();
  const firstName = document.getElementById('full-name').value;
  if (firstName.length < 1) {
    alert("Insert a name, please")
  }
}
