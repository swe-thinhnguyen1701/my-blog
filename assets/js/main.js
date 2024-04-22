const modeSwitcher = document.getElementById("mode-switcher");
const modeIcon = document.getElementById("mode-icon");
const submit = document.getElementById("submit");

let data = JSON.parse(localStorage.getItem("data")) === null ? [] : JSON.parse(localStorage.getItem("data"));

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

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const userInput = {
    author: "",
    title: "",
    content: "",
  };

  userInput.author = document.getElementById("author").value;
  userInput.title = document.getElementById("title").value;
  userInput.content = document.getElementById("content").value;

  if(userInput.author.trim().length != 0 && userInput.title.trim().length != 0 && userInput.content.trim().length != 0){
    data.push(userInput);
    localStorage.setItem("data", JSON.stringify(data));
  
    window.location.href = "blog.html";
  }else{
    window.alert("User name, title, and content CANNOT be empty");
  }
});
