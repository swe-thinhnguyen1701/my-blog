const modeSwitcher = document.getElementById("mode-switcher");

const data = [];

let mode = "light";

modeSwitcher.addEventListener("click", function () {
    if(mode === "dark"){
        mode = "light";
        document.body.setAttribute("class", "light");
    }else{
        mode = "dark";
        document.body.setAttribute("class", "dark");
    }
});