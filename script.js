/*Dark Mode*/

const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

/*Menu Hamburger*/

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/*Scroll Reveal*/

window.sr = ScrollReveal({ reset: true });
ScrollReveal().reveal(".area-3", { delay: 200 });
ScrollReveal().reveal(".area-2", { delay: 200 });
ScrollReveal().reveal(".area-4", { delay: 200 });
ScrollReveal().reveal(".area-5", { delay: 200 });
ScrollReveal().reveal(".area-1", { delay: 200 });
