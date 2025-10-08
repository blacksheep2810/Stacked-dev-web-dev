// JS to facilitate a simple rotating gallery 


// setup + initialisation
let currentSlide = 0; 
const slides = document.querySelectorAll('.gallery-slide'); 
const totalSlides = slides.length; 

//display the current slide 

function showSlide(n) {
	// start hidden as default 
	slides.forEach(slide => {
		slide.style.display = 'none'; 
	});
	
	// show the slide 
	if (slides[n]){
		slides[n].style.display = 'block';
	}; 
	
	// update the counter! 
	document.getElementById('slideNumber').textContent = (n + 1) + ' / ' + totalSlides;
	
	}

	//the next slide 
function nextSlide(){
		currentSlide = (currentSlide + 1) % totalSlides; 
		showSlide(currentSlide);
	} 

// the previous slide 
function prevSlide(){
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
	showSlide(currentSlide);
} 

// insert a random slide 
function randomSlide(){
	currentSlide = Math.floor(Math.random() * totalSlides); 
	showSlide(currentSlide); 
} 

// initate the gallery 
showSlide(0); 

// event listeners 
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('randomBtn').addEventListener('click', randomSlide); 

// added keyboard navigation for smoother functionality 
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});