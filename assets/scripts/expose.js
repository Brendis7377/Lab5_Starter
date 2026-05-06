// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById("horn-select");
  const volumeButton1 = document.getElementById("volume");
  const volumeButton2 = document.querySelector("#volume-controls > img");
  const hornImage = document.querySelector('#expose > img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');

  console.log(hornSelector);
  console.log(volumeButton1);
  console.log(volumeButton2);
  console.log(hornImage);
  console.log(playButton);
  console.log(audio);

  hornSelector.addEventListener("change", function(){
    if (hornSelector.value === "car-horn"){
      hornImage.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (hornSelector.value === "air-horn"){
      hornImage.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3"
    }
    else if (hornSelector.value === "party-horn"){
      hornImage.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3"
    }

    console.log(hornSelector.value);
});
  playButton.addEventListener("click", function() {
    audio.play();
});

}