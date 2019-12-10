/* eslint-disable */
// UI elements.
const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");
const sendForm = document.getElementById("send-form");
const inputField = document.getElementById("input");

// Movement buttons
const forwardBtn = document.getElementById("forward");
const backBtn = document.getElementById("back");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Obtain configured instance.
const terminal = new BluetoothTerminal();

// Implement own send function to log outcoming data to the terminal.
const send = data => {
  terminal.send(data);
};

// Bind event listeners to the UI elements.
connectButton.addEventListener("click", () => {
  terminal.connect();
});

disconnectButton.addEventListener("click", () => {
  terminal.disconnect();
});

// Walking events

const holdEvent = (btn, action) => {
  var t;

  const repeat = () => {
    action();
    t = setTimeout(repeat, 1000);
  };

  btn.addEventListener("touchstart", () => {
    repeat();
  });

  btn.addEventListener("mousedown", () => {
    repeat();
  });

  btn.addEventListener("touchend", () => {
    clearTimeout(t);
  });

  btn.addEventListener("mouseup", () => {
    clearTimeout(t);
  });
}

const moveForward = () => {
  send("7IYdr");
}

const moveBack = () => {
  send("YjXIBe");
}

const turnLeft = () => {
  send("teoYCVe");
}

const turnRight = () => {
  send("AEc2Afg!5");
}

holdEvent(forwardBtn, moveForward);
holdEvent(backBtn, moveBack);
holdEvent(leftBtn, turnLeft);
holdEvent(rightBtn, turnRight);
