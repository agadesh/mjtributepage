let myAudio = document.getElementById("myAudio");
let myAudioBtn = document.getElementById("myAudioBtn");
let colorShow = document.getElementById("colorShow");
let image = document.getElementById("image");
let watermark = document.getElementById("watermark");
let watermark2 = document.getElementById("watermark2");
let MAINBODY = document.getElementById("MAINBODY");
myAudio.volume = 0.2;
myAudio.currentTime = 37;

function pausePlayAudio() {
  if (myAudio.paused) {
    myAudio.play();
    myAudioBtn.classList.add("playing-audio");
    colorShow.classList.add("color-container");
    image.style.filter = "sepia(1)";
    watermark.style.filter = "invert(1)";
    watermark2.style.filter = "invert(1)";
    MAINBODY.style.background = "#000";
    MAINBODY.style.color = "#fff";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    myAudio.pause();
    myAudioBtn.classList.remove("playing-audio");
    colorShow.classList.remove("color-container");
    image.style.filter = "sepia(0)";
    watermark.style.filter = "invert(0)";
    watermark2.style.filter = "invert(0)";
    MAINBODY.style.background = "#64646481";
    MAINBODY.style.color = "#000";
  }
}
MAINBODY.onfocus = () =>
  setTimeout(() => {
    alert(
      "Hello MJ fan. Click the play button on the top-left to see MAGIC!!!."
    );
  }, 3000);
