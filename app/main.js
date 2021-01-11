var slideIndex = 1;
var slides = document.getElementsByClassName("videoSlide");

window.onload = addEventListeners;
showVideoSlide(slideIndex);

function addEventListeners(){
    document.getElementsByClassName("next")[0].addEventListener('click', nextSlide);
    document.getElementsByClassName("prev")[0].addEventListener("click", prevSlide);

    document.getElementsByClassName("moveRight")[0].addEventListener('click', nextSlide);
    document.getElementsByClassName("moveLeft")[0].addEventListener("click", prevSlide);
}

function prevSlide(){
    showVideoSlide(slideIndex -= 1);
}
function nextSlide() {
   showVideoSlide(slideIndex += 1);
}
function showVideoSlide(n) {   

   if(n > slides.length)
      slideIndex = 1;
   if(n < 1)
      slideIndex = slides.length;

   for(var i=0; i<slides.length; i++){
      slides[i].style.display="none";
   }

   slides[slideIndex-1].style.display = "block";
}

