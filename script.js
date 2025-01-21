// dismiss announcement functionality
const dismissButton = document.querySelector(".dismiss");
dismissButton.setAttribute("onclick", "removeAnnouncement()");

function removeAnnouncement() {
  const announcementEl = document.querySelector(".announcement");
  // console.log(announcementEl.parentNode)
  const announcementContainer = announcementEl.parentNode;
  announcementContainer.removeChild(announcementEl);
  announcementContainer.removeChild(dismissButton);
}

// adding border to header based on scroll position
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const triggerPoint = 0;

  if (window.scrollY > triggerPoint) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// handling the video content
const video = document.querySelector("video");
const videoControlButton = document.querySelector("#video-button");

video.addEventListener("pause", () => {
  videoControlButton.innerHTML = "Play";
  console.log("video paused");
  videoControlButton.setAttribute("onclick", "video.play()");
});

video.addEventListener("play", () => {
  videoControlButton.innerHTML = "Pause";
  console.log("video is playing");
  videoControlButton.setAttribute("onclick", "video.pause()");
});

video.addEventListener("ended", () => {
  videoControlButton.innerHTML = "Replay";
  videoControlButton.setAttribute("onclick", "video.play()");
});
