
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

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})
