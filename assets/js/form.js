const submit = document.getElementById("submit");

let data = JSON.parse(localStorage.getItem("data")) === null ? [] : JSON.parse(localStorage.getItem("data"));

submit.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = {
      author: "",
      title: "",
      content: "",
    };
  
    userInput.author = document.getElementById("author").value.trim();
    userInput.title = document.getElementById("title").value.trim();
    userInput.content = document.getElementById("content").value.trim();
  
    if(userInput.author.length != 0 && userInput.title.length != 0 && userInput.content.length != 0){
      data.push(userInput);
      localStorage.setItem("data", JSON.stringify(data));
    
      window.location.href = "blog.html";
    }else{
      window.alert("User name, title, and content CANNOT be empty");
    }
  });