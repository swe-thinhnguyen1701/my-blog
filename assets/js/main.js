const modeSwitcher = document.getElementById("mode-switcher");
const modeIcon = document.getElementById("mode-icon");

const data = [];

let mode = "light";

modeSwitcher.addEventListener("click", function () {
    if(mode === "dark"){
        mode = "light";
        document.body.setAttribute("class", "light");
        modeIcon.setAttribute("src", "/assets/img/light-mode.png")
    }else{
        mode = "dark";
        document.body.setAttribute("class", "dark");
        modeIcon.setAttribute("src", "/assets/img/night-mode.png")
    }
});