/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


//  global section
const sections = document.querySelectorAll('section');
// global navbar
const menu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
window.addEventListener('load', buildnav)
// looping all sections
let Fragment = document.createDocumentFragment();
function buildnav(){
    sections.forEach((section => {
    // create 'li' elements
    const Item = document.createElement('li');
    // create 'a' elements
    const Link = document.createElement('a');
// create add section
    Link.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;

// scroll to anchor ID using scroll to event
    Link.addEventListener('click', (event) =>{
// remove Default scroll
      event.preventDefault();
// active smooth scroll
      section.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
      });
   });

    // append 'a' to 'li'
    Item.appendChild(Link)
    // append 'li' to 'Fragment'
    Fragment.appendChild(Item)
}));
    // append 'Fragment' to 'ul'
    menu.appendChild(Fragment);
}

// Add class 'active' to section when near top of viewport
    function sectionInViewPort (active_section) {
    const section = active_section.getBoundingClientRect();
    return (section.top >=0);
        
}

// Scroll to section on link click
window.addEventListener('scroll', Active_Class);


// Set sections active
function Active_Class() {
    for (section of sections) {
        if (sectionInViewPort(section)) {
            if (!section.classList.contains('your-active-class')) {

 // add active sections              
                section.classList.add('your-active-class');
                
            }
        }
        
// remove active sections        
            else {section.classList.remove('your-active-class');
    }
    
}
}

// Set active nav
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(section) {
    const active_nav = menu.querySelector(`[data-nav=${section.id}]`);
	if(section.getBoundingClientRect().top >= -0 && section.getBoundingClientRect().top <= 750){

// add active nav        
    active_nav.classList.add("active-link-nav");

    }
    
// remove active nav    
    else{
        active_nav.classList.remove("active-link-nav");
    }
	});
}
