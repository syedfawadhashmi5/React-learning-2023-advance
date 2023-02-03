const socket = io();
let name;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");
let userName = document.querySelector("#username");

// Add an array of image URLs
let images = [
"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
];

let userImages = {};
// Function to assign an image to a user
function assignImage(user) {
    console.log(user)
// Check if the user already has an image
if (userImages[user]) {
return userImages[user];
}
    

// If the user doesn't have an image, assign one
let imageIndex = [Math.floor(Math.random() * images.length)];
userImages[user] = images[user];
return images[imageIndex];
}

do {
    name = prompt("Please enter your name: ");
    } while (!name);
    let userImage = assignImage(name);
    
    textarea.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
    sendMessage(e.target.value);
    }
    });
    function sendMessage(message) {
        if (!message.trim()) {
        alert("Please enter your message.");
        return;
        }
        let msg = {
            user: name,
            message: message.trim(),
            userImage: userImage
            };

            console.log(msg)
// Append
appendMessage(msg, "outgoing");
textarea.value = "";
scrollToBottom();

// Send to server
socket.emit("message", msg);
}

function appendMessage(msg, type) {
  console.log(msg);
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markup = `
        <img src=${msg.userImage}>
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

// Receive messages
socket.on("message", (msg) => {
  if (msg.message === "") {
    console.log("Please enter your message");
  } else {
    userName.innerHTML = `now you chat with <span>${msg.user}</span>`;
    appendMessage(msg, "incoming");
    scrollToBottom();
  }
});

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}
