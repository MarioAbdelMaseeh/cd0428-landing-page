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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navbarFrag = document.createDocumentFragment();
for (const section of sections) 
{
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'menu__link';
    a.href = `#${section.id}`;
    a.textContent  = section.dataset.nav;
    li.appendChild(a);
    navbarFrag.appendChild(li);
};
navbarList.appendChild(navbarFrag);

navbarList.addEventListener('click',(event)=>{
    event.preventDefault();
    if (event.target.tagName === 'A')
    {
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior :'smooth'
        });
    }
});
