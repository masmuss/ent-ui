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
