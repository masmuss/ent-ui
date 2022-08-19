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

const navWrapper = document.getElementById("nav-wrapper");
window.onscroll = function () {
	// check if the user is scrolling down or up and change the navbar height
	if (window.pageYOffset > navbar.offsetHeight) {
		navWrapper.classList.add("scrolled");
		navWrapper
			.querySelector(".navbar-brand-logo")
			.classList.add("logo-scrolled");
	} else {
		navWrapper.classList.remove("scrolled");
		navWrapper
			.querySelector(".navbar-brand-logo")
			.classList.remove("logo-scrolled");
	}
};

// divisions description
const divisionDescription = document.getElementById("division-description");
const teams = document.getElementsByClassName("team");

// loop each team and add click event listener to each team
for (let i = 0; i < teams.length; i++) {
	// if nothing is selected, select the first team
	if (teams[i].classList.contains("team-active"))
		divisionDescription.innerHTML =
			teams[i].getElementsByClassName("team-description")[0].innerHTML;

	teams[i].addEventListener("click", () => {
		// get the chilt item of the clicked team
		const child = teams[i].children[1];
		// get the description of the clicked team
		const description =
			child.getElementsByClassName("team-description")[0].innerHTML;
		// add "team-active" class to the clicked team and remove from the other teams
		for (let j = 0; j < teams.length; j++)
			teams[j].classList.remove("team-active");
		teams[i].classList.add("team-active");

		// if the division description is not the same as the clicked team description
		if (divisionDescription.innerHTML !== description)
			// change the division description to the clicked team description
			divisionDescription.innerHTML = description;
	});
}

const divisionBtns = document.getElementsByClassName("division-btn");
const members = document.getElementsByClassName("members-wrapper");
const divisionMembers = document.getElementById("division-photos");

// loop each division button and add click event listener to each button
for (let i = 0; i < divisionBtns.length; i++) {
	// set "division-btn-active" class to the button that is clicked
	divisionBtns[i].addEventListener("click", () => {
		for (let j = 0; j < divisionBtns.length; j++)
			divisionBtns[j].classList.remove("division-btn-active");
		divisionBtns[i].classList.add("division-btn-active");
	});
}

for (let i = 0; i < members.length; i++) {
	members[i].classList.add("member-wrapper-hidden");
}

for (let i = 0; i < divisionBtns.length; i++) {
	divisionBtns[i].addEventListener("click", () => {
		for (let j = 0; j < members.length; j++)
			members[j].classList.add("member-wrapper-hidden");
		members[i].classList.remove("member-wrapper-hidden");
	});
}

const memberCards = document.getElementsByClassName("member-card");
// check where the mouse is hover
for (let i = 0; i < memberCards.length; i++) {
	memberCards[i].children[1].classList.add("hidden");
	memberCards[i].addEventListener("mouseover", () => {
		memberCards[i].children[1].classList.remove("hidden");
	});
	memberCards[i].addEventListener("mouseout", () => {
		memberCards[i].children[1].classList.add("hidden");
	});
}

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

		if (currentPos < 300) nav.querySelector("a").classList.add("active");
	});
});
// Modal //
