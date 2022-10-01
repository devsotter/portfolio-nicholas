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
ScrollReveal().reveal(".conteudo-main", { delay: 400 });
ScrollReveal().reveal(".tag", { delay: 500 });
ScrollReveal().reveal(".sobre-info", { delay: 400 });
ScrollReveal().reveal(".img-sobre", { delay: 500 });
ScrollReveal().reveal(".skills-info", { delay: 400 });
ScrollReveal().reveal(".caixa", { delay: 500 });
ScrollReveal().reveal(".projetos-info", { delay: 400 });
ScrollReveal().reveal(".contato-info", { delay: 400 });
ScrollReveal().reveal(".contato-arroba", { delay: 500 });
