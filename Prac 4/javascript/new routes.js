// JS to create a rotating carousal-esque feature to display the routes 

// setup 
let currentRoute = 0; 
const routeCards = document.querySelectorAll('.route-card'); 
const totalRoutes = routeCards.length ; 

// displaying the current route 
function showRoute(n){
	// hidden @ first 
	routeCards.forEach(card => {
		card.style.display = 'none'; 
	}); 
	
	// show current route 
	if (routeCards[n]){
		routeCards[n].style.display = 'block'; 
	} 
	
	// update counter 
document.getElementById('routeNumber').textContent = (n + 1) + ' / ' + totalRoutes;

}

// the next route is prepped
function nextRoute() {
    currentRoute = (currentRoute + 1) % totalRoutes;
    showRoute(currentRoute);
}

// the previous route
function prevRoute() {
    currentRoute = (currentRoute - 1 + totalRoutes) % totalRoutes;
    showRoute(currentRoute);
}

// start
showRoute(0);

// event listeners
document.getElementById('nextRouteBtn').addEventListener('click', nextRoute);
document.getElementById('prevRouteBtn').addEventListener('click', prevRoute);