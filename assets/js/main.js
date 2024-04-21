const modeSwitcher = document.getElementById("mode-switcher");
const modeIcon = document.getElementById("mode-icon");
const submit = document.getElementById("submit");

const data = [];

let mode = "light";

modeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    document.body.setAttribute("class", "light");
    modeIcon.setAttribute("src", "/assets/img/light-mode.png");
  } else {
    mode = "dark";
    document.body.setAttribute("class", "dark");
    modeIcon.setAttribute("src", "/assets/img/night-mode.png");
  }
});

submit.addEventListener("click", function () {
  const userInput = {
    userName: "",
    title: "",
    content: "",
  };

  userInput.userName = document.getElementById("user-name").value;
  userInput.title = document.getElementById("title").value;
  userInput.content = document.getElementById("content").value;

  data.push(userInput);
  localStorage.setItem("data", JSON.stringify(data));

  window.location.href = "./../blog.html";
  console.log("Redicrect", window.location);
});
