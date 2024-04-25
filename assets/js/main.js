const modeSwitcher = document.getElementById("mode-switcher");
const modeIcon = document.getElementById("mode-icon");

let mode = localStorage.getItem("mode") === null ? "light" : localStorage.getItem("mode");
document.body.setAttribute("class", mode);
console.log(mode);

modeSwitcher.addEventListener("click", function () {  
  if (mode === "dark") {
    localStorage.setItem("mode", "light");
    document.body.setAttribute("class", "light");
    modeIcon.setAttribute("src", "./assets/img/light-mode.png");
  } else {
    localStorage.setItem("mode", "dark");    
    document.body.setAttribute("class", "dark");
    modeIcon.setAttribute("src", "./assets/img/night-mode.png");
  }
  mode = localStorage.getItem("mode");
});