const socket = io();

socket.on("welcome", (welcome) => {
  console.log("message => ", welcome);
});

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message);
});
