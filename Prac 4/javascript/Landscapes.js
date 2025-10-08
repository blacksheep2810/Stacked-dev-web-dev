// =============================================================================
// GALLERY IMPLEMENTATION WITH NAVIGATOR INTEGRATION
// =============================================================================

// DOM Elements - Using multiple DOM selection methods
const gallerySlides = document.getElementById('gallerySlides');
const galleryDots = document.getElementById('galleryDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const autoBtn = document.getElementById('autoBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');
const browserInfoDiv = document.getElementById('browserInfo');
const navInfoDiv = document.getElementById('navInfo');
const galleryContainer = document.getElementById('galleryContainer');

// Gallery data
const galleryImages = [
    {
        src: "../images/landscape1.jpg",
        caption: "Stunning Coastal Cliffs of Jeffrey's Bay",
        alt: "Coastal cliff view"
    },
    {
        src: "../images/landscape2.jpg", 
        caption: "Pristine Beaches Perfect for Surfing",
        alt: "Beach scene"
    },
    {
        src: "../images/landscape3.jpg",
        caption: "Unique Dune Systems Along the Coast",
        alt: "Dune system"
    },
    {
        src: "../images/landscape4.jpg",
        caption: "Ancient Rock Formations",
        alt: "Rock formations"
    },
    {
        src: "../images/beachbus.jpg",
        caption: "Iconic Beach Bus - Local Landmark",
        alt: "Beach bus"
    }
];

// Global variables
let currentSlideIndex = 0;
let slideInterval = null;
let isAutoPlaying = false;
let randomizedImages = [];

// =============================================================================
// NAVIGATOR OBJECT INTEGRATION (Requirement #1 & #2)
// =============================================================================

function initializeNavigatorFeatures() {
    // Using 5+ Navigator properties
    const navInfo = `
        <p><strong>Browser:</strong> ${navigator.appName} (${navigator.appVersion})</p>
        <p><strong>Platform:</strong> ${navigator.platform}</p>
        <p><strong>Language:</strong> ${navigator.language}</p>
        <p><strong>Cookies Enabled:</strong> ${navigator.cookieEnabled ? 'Yes' : 'No'}</p>
        <p><strong>Online Status:</strong> ${navigator.onLine ? 'Online' : 'Offline'}</p>
        <p><strong>User Agent:</strong> ${navigator.userAgent.substring(0, 80)}...</p>
        <p><strong>Java Enabled:</strong> ${navigator.javaEnabled() ? 'Yes' : 'No'}</p>
    `;
    
    // Using innerHTML property to update content
    navInfoDiv.innerHTML = navInfo;
    
    // Apply browser-specific styling based on navigator detection
    applyBrowserSpecificStyles();
    
    // Using both navigator methods
    checkJavaSupport();
    setupVibrationSupport();
}

function applyBrowserSpecificStyles() {
    const body = document.body;
    
    // Mobile detection and optimization
    if (navigator.userAgent.includes('Mobile')) {
        body.classList.add('mobile-optimized');
        console.log("Mobile device detected - applying mobile optimizations");
    }
    
    // Touch device detection
    if (navigator.maxTouchPoints > 0) {
        body.classList.add('touch-device');
        console.log("Touch device detected - enhancing touch interactions");
    }
    
    // Language-specific adjustments
    if (navigator.language.startsWith('fr')) {
        console.log("French language detected - potential for French captions");
    }
}

function checkJavaSupport() {
    // Using navigator.javaEnabled() method
    const javaEnabled = navigator.javaEnabled();
    console.log(`Java support in browser: ${javaEnabled}`);
    
    if (javaEnabled) {
        // Could add Java-specific features here
        browserInfoDiv.innerHTML += '<p><em>Java applet support available</em></p>';
    }
}

function setupVibrationSupport() {
    // Check if vibration API is available (mobile devices)
    if (navigator.vibrate) {
        console.log("Vibration API supported");
        // Could use vibrate on image changes for mobile feedback
    }
}

// =============================================================================
// DOM MANIPULATION METHODS (Requirement #3 - 10+ properties/methods)
// =============================================================================

function initializeGallery() {
    console.log("Initializing gallery with DOM manipulation...");
    
    // Method 1: createElement
    randomizedImages = [...galleryImages];
    shuffleArray(randomizedImages);
    
    // Clear existing content
    gallerySlides.innerHTML = '';
    galleryDots.innerHTML = '';
    
    // Method 2: forEach loop through array
    randomizedImages.forEach((image, index) => {
        // Method 3: createElement for slide
        const slide = document.createElement('div');
        // Method 4: classList.add
        slide.classList.add('gallery-slide');
        
        // Method 5: createElement for image
        const img = document.createElement('img');
        // Method 6: setAttribute
        img.setAttribute('src', image.src);
        img.setAttribute('alt', image.alt);
        
        // Method 7: createElement for caption
        const caption = document.createElement('div');
        caption.classList.add('slide-caption');
        // Method 8: textContent
        caption.textContent = image.caption;
        
        // Method 9: appendChild
        slide.appendChild(img);
        slide.appendChild(caption);
        gallerySlides.appendChild(slide);
        
        // Create dot indicators
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        // Method 10: Setting custom data attribute
        dot.setAttribute('data-index', index);
        galleryDots.appendChild(dot);
    });
    
    // Method 11: Update text content
    totalSlidesSpan.textContent = randomizedImages.length;
    currentSlideSpan.textContent = currentSlideIndex + 1;
    
    // Method 12: style property manipulation
    updateSlidePosition();
    
    console.log(`Gallery initialized with ${randomizedImages.length} slides`);
}

function updateSlidePosition() {
    // Using style.transform property
    gallerySlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update active dot using classList
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Update current slide display
    currentSlideSpan.textContent = currentSlideIndex + 1;
    
    // Update document title with current image info (DOM property)
    document.title = `Jeffrey's Bay - ${randomizedImages[currentSlideIndex].caption}`;
}

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// =============================================================================
// EVENT HANDLERS (Requirement #7 - 10+ events)
// =============================================================================

function setupEventHandlers() {
    console.log("Setting up event handlers...");
    
    // Event 1: DOMContentLoaded - Initialize when document is ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded and parsed");
        initializeNavigatorFeatures();
        initializeGallery();
    });
    
    // Event 2: click - Previous button
    prevBtn.addEventListener('click', function() {
        navigateToSlide(currentSlideIndex - 1);
        // Optional vibration feedback for mobile
        if (navigator.vibrate) navigator.vibrate(50);
    });
    
    // Event 3: click - Next button
    nextBtn.addEventListener('click', function() {
        navigateToSlide(currentSlideIndex + 1);
        if (navigator.vibrate) navigator.vibrate(50);
    });
    
    // Event 4: click - Random shuffle
    randomBtn.addEventListener('click', function() {
        shuffleGallery();
        if (navigator.vibrate) navigator.vibrate(100);
    });
    
    // Event 5: click - Auto-play toggle
    autoBtn.addEventListener('click', toggleAutoPlay);
    
    // Event 6: click - Dot navigation
    galleryDots.addEventListener('click', function(e) {
        if (e.target.classList.contains('dot')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            navigateToSlide(index);
        }
    });
    
    // Event 7: keydown - Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            navigateToSlide(currentSlideIndex - 1);
        } else if (e.key === 'ArrowRight') {
            navigateToSlide(currentSlideIndex + 1);
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
        }
    });
    
    // Event 8: mouseover - Pause auto-play on hover
    galleryContainer.addEventListener('mouseover', function() {
        if (isAutoPlaying) {
            pauseAutoPlay();
        }
    });
    
    // Event 9: mouseout - Resume auto-play when mouse leaves
    galleryContainer.addEventListener('mouseout', function() {
        if (isAutoPlaying) {
            startAutoPlay();
        }
    });
    
    // Event 10: online/offline - Handle connectivity changes
    window.addEventListener('online', function() {
        console.log("Browser came online");
        browserInfoDiv.style.borderLeftColor = '#2ecc71';
    });
    
    window.addEventListener('offline', function() {
        console.log("Browser went offline");
        browserInfoDiv.style.borderLeftColor = '#e74c3c';
        pauseAutoPlay();
    });
    
    // Event 11: load - When images finish loading
    window.addEventListener('load', function() {
        console.log("All resources finished loading!");
    });
    
    // Event 12: error - Handle image loading errors
    gallerySlides.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.error('Image failed to load:', e.target.src);
            e.target.src = '../images/placeholder.jpg'; // Fallback image
        }
    }, true);
    
    console.log("All event handlers registered");
}

// =============================================================================
// GALLERY FUNCTIONALITY
// =============================================================================

function navigateToSlide(index) {
    // Handle wrap-around
    if (index < 0) {
        currentSlideIndex = randomizedImages.length - 1;
    } else if (index >= randomizedImages.length) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = index;
    }
    
    updateSlidePosition();
    resetAutoPlayTimer();
}

function shuffleGallery() {
    console.log("Shuffling gallery...");
    
    // Store current image to maintain position if possible
    const currentImage = randomizedImages[currentSlideIndex];
    
    // Shuffle the array
    shuffleArray(randomizedImages);
    
    // Find new position of current image
    const newIndex = randomizedImages.findIndex(img => img.src === currentImage.src);
    currentSlideIndex = newIndex !== -1 ? newIndex : 0;
    
    // Reinitialize gallery with new order
    initializeGallery();
    
    console.log("Gallery shuffled successfully");
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        pauseAutoPlay();
        autoBtn.textContent = 'Auto-Play';
    } else {
        startAutoPlay();
        autoBtn.textContent = 'Pause';
    }
    isAutoPlaying = !isAutoPlaying;
}

function startAutoPlay() {
    slideInterval = setInterval(() => {
        navigateToSlide(currentSlideIndex + 1);
    }, 3000); // Change slide every 3 seconds
    console.log("Auto-play started");
}

function pauseAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        console.log("Auto-play paused");
    }
}

function resetAutoPlayTimer() {
    if (isAutoPlaying) {
        pauseAutoPlay();
        startAutoPlay();
    }
}

// =============================================================================
// INITIALIZATION
// =============================================================================

// Start everything when script loads
setupEventHandlers();

// Additional DOM method: querySelector for specific elements
console.log("Gallery container found:", document.querySelector('.gallery-container'));

// Additional DOM method: getElementsByClassName
console.log("Navigation buttons:", document.getElementsByClassName('nav-btn'));