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
