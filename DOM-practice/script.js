const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is going to be awesome!";

container.appendChild(content);

const text = document.createElement("text");
text.classList.add("red-text");
text.style.color = "red";
text.textContent = "Hey, I'm red!";

container.appendChild(text);