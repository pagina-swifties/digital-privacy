const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

/*
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
*/

// Up button
const up = document.querySelector("#up");
up.addEventListener('click', () => {
	doScrolling(0, 1000);
});

function doScrolling(elementY, duration) { 
	var startingY = window.pageYOffset;
	var diff = elementY - startingY;
	var start;
  
	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
	  if (!start) start = timestamp;
	  // Elapsed milliseconds since start of scrolling.
	  var time = timestamp - start;
	  // Get percent of completion in range [0, 1].
	  var percent = Math.min(time / duration, 1);
  
	  window.scrollTo(0, startingY + diff * percent);
  
	  // Proceed with animation as long as we wanted it to.
	  if (time < duration) {
		window.requestAnimationFrame(step);
	  }
	})
  }