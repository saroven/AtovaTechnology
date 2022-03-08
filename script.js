// dropdown codes
function toggleClass() {
   document.getElementById("dropdown").classList.toggle("show");
}

// end drop down

// menu bar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const nav = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
   console.log(nav);
   console.log(navbarLinks);
   console.log(toggleButton);
   navbarLinks.classList.toggle("active");
   nav.classList.toggle("height-400");
   console.log("clicked");
});

// end menu

// close menu and drop down
window.onclick = function (e) {
   if (!e.target.matches(".toggle-button")) {
      if (navbarLinks.classList.contains("active")) {
         navbarLinks.classList.remove("active");
      }
      if (nav.classList.contains("height-400")) {
         nav.classList.remove("height-400");
      }
   }
   if (!e.target.matches(".dropbtn")) {
      let dropdown = document.getElementById("dropdown");
      if (dropdown.classList.contains("show")) {
         dropdown.classList.remove("show");
      }
   }
};
