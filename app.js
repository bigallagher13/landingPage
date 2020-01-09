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
 * Define Global Variables
 *
*/
const nav = document.querySelector('.navbar__menu');
const position = 0;
const prevActive = document.getElementsByClassName('your-active-class');


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

window.onload = function() {
  buildNav();
  startScroll();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function smoothScroll(event) {
  var element = event.target;
  var section_id = element.getAttribute('data-section-id');
  document.querySelector('#' + section_id).scrollIntoView({
    behavior: 'smooth'
  });

  var currentActiveSection = document.getElementById(section_id);
  currentActiveSection.className = 'your-active-class';
  
  //var prevActive = document.getElementsByClassName('your-active-class');
  prevActive.classList.remove('your-active-class');
}

function buildNav() {
  var sections = document.getElementsByTagName('section');
  var navList = document.getElementById('navbar__list');
  for (var i = 0; i < sections.length; ++i) {
    var section_id = sections[i].getAttribute('id');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.setAttribute('data-section-id', section_id);
    span.onclick = smoothScroll;
    span.innerHTML = sections[i].getAttribute('data-nav');
    li.style.color = 'black';
    li.classList.add('menu__link');
    li.appendChild(span);
    navList.appendChild(li);
  }
}



// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions


 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
function startScroll() {
  var myButton = document.getElementById("myBtn");

  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    setActiveClass();
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
}

function getSectionDetails() {
    var sections = document.getElementsByTagName('section');
    var each_section_height = {};
    for (var i = 0; i < sections.length; ++i) {
        var section_id = sections[i].getAttribute('id');
        var section_height = document.getElementById(section_id).offsetTop;
        each_section_height[section_id] = section_height;
    }
    return each_section_height;
}


function setActiveClass() {
  var sections_and_heights = getSectionDetails();
  for (var key in sections_and_heights) {
    var low = sections_and_heights[key] - 50;
    var high = sections_and_heights[key] + 50;

    if (low <= document.documentElement.scrollTop && document.documentElement.scrollTop <= high) {
      //var prevActive = document.getElementsByClassName('your-active-class');
      prevActive.classList.remove('your-active-class');
    }
  }
}
// Set sections as active
