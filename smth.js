const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
	shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	  navbar.classList.add("navbarshrink");
	} else {
		  navbar.classList.remove("navbarshrink");
	  }
  }

  document.addEventListener("DOMContentLoaded", function () {
	var splide = new Splide(".splide", {
	  type: "loop",
	  perPage: 2,
	  arrows: false,
	  autoplay: true,
	});
	splide.mount();
  });
  

  function openNavbar() {
	document.getElementById("navbar-responsive").style.left = "0";
	// document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
	document.getElementById("navbar-responsive").style.left = "-100%";
	// document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
	toggleBacktop();
  });
  