let audioFile = document.getElementById("audio-file");

let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);

let currentTime = 0;

function playAudio() {
  audioFile.play();
  let minutes = 0;
  function updateTimer() {
    currentTime++;
    let seconds = currentTime % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (seconds == 0) {
      minutes++;
    }

    let Timer = document.getElementById("progress-timer");
    let timerReadout = minutes + ":" + seconds + "/7:24";
    Timer.innerText = timerReadout;
  }
  setInterval(updateTimer, 1000);
}

function pauseAudio() {
  audioFile.pause();
}

function updateProgress() {
  let progressBar = document.getElementById("progress-bar");
  progressBar.value = (audioFile.currentTime / audioFile.duration) * 100;
}
setInterval(updateProgress, 1000);

//
