let slideIndex = [1, 1, 1, 1, 1];

let slideID = ["SlidesC", "SlidesF", "SlidesM", "SlidesG", "SlidesD"]

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);


/*change slides upon click*/
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}


function showSlides(n, no) {
  let i;
  let slide = document.getElementsByClassName(slideID[no]);
  if (n > slide.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slide.length}
  for (i = 0; i < slide.length; i++) 
  {
    slide[i].style.display = "none";
  }


  slide[slideIndex[no]-1].style.display = "block";
} 
/* heavily reference this to assist: https://www.w3schools.com/howto/howto_js_slideshow.asp*/