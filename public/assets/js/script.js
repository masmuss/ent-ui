const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("nav-toggle");
const navbarToggleOpen = document.getElementById("nav-toggle-open");
const navbarToggleClose = document.getElementById("nav-toggle-close");
let isNavbarOpen = false;

if (!isNavbarOpen) navbarToggleOpen.classList.remove("hidden");

const changeNavbarState = () => {
	// toggle icons inside button
	navbarToggleOpen.classList.toggle("hidden");
	navbarToggleClose.classList.toggle("hidden");

	// toggle navbar
	navbar.classList.toggle("hidden");
	navbar.classList.toggle("flex");

	isNavbarOpen = !isNavbarOpen;
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropMenu() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches("#dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

// accordion
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
	header.addEventListener("click", function () {
		const accordionContent =
			header.parentElement.querySelector(".accordion-content");
		let accordionMaxHeight = accordionContent.style.maxHeight;

		// Condition handling
		if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
			accordionContent.style.maxHeight = `${
				accordionContent.scrollHeight + 32
			}px`;
			header.parentElement.classList.add("bg-gray-100");
			header.querySelector(".fas").classList.remove("fa-plus");
			header.querySelector(".fas").classList.add("fa-minus");
		} else {
			accordionContent.style.maxHeight = `0px`;
			header.parentElement.classList.remove("bg-gray-100");
			header.querySelector(".fas").classList.add("fa-plus");
			header.querySelector(".fas").classList.remove("fa-minus");
		}
	});
});

const sections = document.querySelectorAll("section");
const nav = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
	let currentPos = window.scrollY;
	sections.forEach((section) => {
		let top = section.offsetTop;
		let bottom = top + section.offsetHeight;

		if (currentPos >= top && currentPos <= bottom) {
			if (currentPos <= bottom)
				nav.querySelectorAll("a").forEach((a) => {
					a.classList.remove("active");
				});
			nav.querySelector(`a[href="#${section.id}"]`).classList.add("active");
		}

		if (currentPos < 300)
			nav.querySelector("a").classList.add("active");
	});
});
// Modal //
	