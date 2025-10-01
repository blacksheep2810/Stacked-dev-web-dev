const RightArrow = document.getElementById("RightArrow");
const LeftArrow = document.getElementById("LeftArrow");

let HistoryState=1;
//these two handle the on click events for when the buttons are pressed, changing the state for the switch case and then fading into the next event
RightArrow.addEventListener("click", () => {
  HistoryState++;
  fadePanelChildren(UpdatePanel);
});

LeftArrow.addEventListener("click", () => {
  HistoryState--;
  fadePanelChildren(UpdatePanel);
});
//switch cases for the different panels
function UpdatePanel(){
	switch (HistoryState) {
  		case 1:
			document.getElementById("HistoryTitle").textContent = "Early History"
 	   		document.getElementById("img1").src="../images/EarlyHistory1.jpg";
    			document.getElementById("img2").src="../images/EarlyHistory2.jpg";
    			document.getElementById("img3").src="../images/EarlyHistory3.jpg";
			document.getElementById("LeftArrow").disabled = true;
			document.getElementById("RightArrow").disabled = false;
			document.getElementById("HistoryBlurb").textContent = `While the stories of the founding of Jeffrey's Bay range from traders opening shop, to lost captains building home's from their shipwrecks, to whalers settling down, it is generally accepted that Jeffrey's bay traces it origins to the year 1849. The same year that nearby Humansdorp was founded. Jeffrey's bay grew from a small settlement into a exceedingly popular holiday destination.`
    		break;
  		case 2:
			document.getElementById("HistoryTitle").textContent = "Surf Reputation"
    			document.getElementById("img1").src="../images/SurfReputation1.jpg";
    			document.getElementById("img2").src="../images/SurfReputation2.jpg";
    			document.getElementById("img3").src="../images/SurfReputation3.jpg";
			document.getElementById("HistoryBlurb").textContent = `Jeffrey's Bay would garner a great deal of attention from the 1966 documentary "The Endless Summer" which showcased some of the greatest surfing spots in the world. By the 70s Jeffrey\'s Bay had a reputation as one of the premiere surf spots in the country, if not the world. Jeffrey's bay represented a unique challenge to seasoned surfers, who would try their luck at the Supertubes, as well as a relaxed spot for newer surfers to get more comfortable at places like the Point.`	
			document.getElementById("RightArrow").disabled = false;
			document.getElementById("LeftArrow").disabled = false;
    		break;
		case 3:
			document.getElementById("HistoryTitle").textContent = "J-Bay open"
 	   		document.getElementById("img1").src="../images/SurfChampions1.jpg";
    			document.getElementById("img2").src="../images/SurfChampions2.jpg";
    			document.getElementById("img3").src="../images/SurfChampions3.jpg";
			document.getElementById("HistoryBlurb").textContent = `In 1984 the first J-Bay open took place. An event part of the World Surf League and first won by Mark Occhilupo. The J-Bay Open has continued to this day with incredibly memorable events. Even at times grabbing world wide attention in 2015 when Mark Fanning fought a shark in a freak accident mid competition and walked away unharmed. More recently, it was won in 2025 by Connor O'Leary. Who knows, maybe you could be the next J-Bay champion?`
			document.getElementById("RightArrow").disabled = false;
			document.getElementById("LeftArrow").disabled = false;
		break;
		case 4:
			document.getElementById("HistoryTitle").textContent = "Today"
 	   		document.getElementById("img1").src="../images/ModernDay1.jpg";
    			document.getElementById("img2").src="../images/ModernDay2.jpg";
    			document.getElementById("img3").src="../images/ModernDay3.jpg";
			document.getElementById("HistoryBlurb").textContent = `Today Jeffrey's Bay has something for everyone. Whether you plan to surf the Supertubes, relax on the beach, explore the local shops and cafés, or simply soak in the sun. Come spend your next holiday with us and experience an unforgettable coastal escape.`
			document.getElementById("RightArrow").disabled = true;
			document.getElementById("LeftArrow").disabled = false;
		break;
	}
} 
//function to handle the fade in effect
function fadePanelChildren(updateFunction) {
    const panel = document.getElementById("HistoryPanel");
    panel.classList.add("fade-out");
    panel.classList.remove("fade-in");

    setTimeout(() => {
        updateFunction();             // update content while faded out
        panel.classList.remove("fade-out");
        panel.classList.add("fade-in");  // fade back in
    }, 500);
}

