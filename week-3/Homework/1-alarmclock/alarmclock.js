function setAlarm() {
  let inputNumberValue = document.getElementById("alarmSet").value;
  function getInputNumberValueToZero() {
    if (inputNumberValue >= 0)
      document.getElementById("timeRemaining").innerText = `Time Remaining: ${inputNumberValue--}`
    if (inputNumberValue === 0) {
      playAlarm();
    }
  }
  setInterval(() => {
    getInputNumberValueToZero()
  }, 1000);
}


// console.log("timeRemaining", timeRemaining);

// Time remaining: ${seconds}
// var timeRemaining = document.getElementById("timeRemaining").innerText += `hello`
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
