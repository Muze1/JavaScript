const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is going to be awesome!";

container.appendChild(content);

// Add red text
const text = document.createElement("text");
text.classList.add("red-text");
text.style.color = "red";
text.textContent = "Hey, I'm red!";

container.appendChild(text);

// Add blue h3
const header = document.createElement("h3");
header.classList.add("blue-heading");
header.textContent = "I'm a blue h3!"
header.style.color = "blue";
container.appendChild(header)

// Add div with black border and pink background
const divBox = document.createElement("div");
divBox.classList.add("box-div");
divBox.style.border = "2px solid black";
divBox.style.backgroundColor = "pink";

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";
const divText = document.createElement("p");
divText.textContent = "ME TOO!";
divBox.appendChild(divHeader)
divBox.appendChild(divText)
container.appendChild(divBox)

// Button for events
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});