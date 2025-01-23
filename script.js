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

// toggle b/w dark mode and light mode
// toggle button
const toggleButton = document.querySelector(".theme");
const toggleIcon = document.querySelector(".theme-icon");

// image sources based on urls
const heroVideoContent = document.querySelector(".video-container video");
const featureColumn1Image = document.querySelector("#fc1");
const featureColumn2Image = document.querySelector("#fc2");
const featureColumn3Image = document.querySelector("#fc3");
const standoutFeature1Image = document.querySelector("#sf1");
const standoutFeature2Image = document.querySelector("#sf2");
const standoutFeature3Image = document.querySelector("#sf3");
const standoutFeature4Image = document.querySelector("#sf4");

// checking localStorage if there is a existing choice for theme
const existingTheme = localStorage.getItem("theme");

if (existingTheme) {
  document.documentElement.setAttribute("data-theme", existingTheme);
  if (existingTheme === "dark") {
    toggleIcon.setAttribute("src", "./assets/icons/theme-light.svg");
    changeImagesBasedOnMode(existingTheme);
  } else if (existingTheme === "light") {
    toggleIcon.setAttribute("src", "./assets/icons/theme-dark.svg");
    changeImagesBasedOnMode(existingTheme);
  }
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleIcon.setAttribute("src", "./assets/icons/theme-light.svg");
  changeImagesBasedOnMode("dark");
  localStorage.setItem("theme", "dark");
}

toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    newTheme = "light";
    toggleIcon.setAttribute("src", "./assets/icons/theme-dark.svg");
    changeImagesBasedOnMode(newTheme);
  } else if (currentTheme === "light") {
    newTheme = "dark";
    toggleIcon.setAttribute("src", "./assets/icons/theme-light.svg");
    changeImagesBasedOnMode(newTheme);
  }

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

function changeImagesBasedOnMode(theme) {
  if (theme === "dark") {
    heroVideoContent.setAttribute(
      "src",
      "./assets/themes/dark-mode/hero-dark-lg.webm"
    );
    featureColumn1Image.setAttribute(
      "src",
      "assets/themes/dark-mode/choose-model-dark.webp"
    );
    featureColumn2Image.setAttribute(
      "src",
      "assets/themes/dark-mode/multi-file-dark.webp"
    );
    featureColumn3Image.setAttribute(
      "src",
      "assets/themes/dark-mode/instructions-dark.webp"
    );
    standoutFeature1Image.setAttribute(
      "src",
      "./assets/themes/dark-mode/swimlane-chat-dark.webp"
    );
    standoutFeature2Image.setAttribute(
      "src",
      "./assets/themes/dark-mode/completions-dark.webp"
    );
    standoutFeature3Image.setAttribute(
      "src",
      "./assets/themes/dark-mode/swimlane-customized.png"
    );
    standoutFeature4Image.setAttribute(
      "src",
      "./assets/themes/dark-mode/swimlane-anywhere.png"
    );
  } else if (theme === "light") {
    heroVideoContent.setAttribute(
      "src",
      "./assets/themes/light-mode/hero-light-lg.webm"
    );
    featureColumn1Image.setAttribute(
      "src",
      "assets/themes/light-mode/choose-model-light.webp"
    );
    featureColumn2Image.setAttribute(
      "src",
      "assets/themes/light-mode/multi-file-light.webp"
    );
    featureColumn3Image.setAttribute(
      "src",
      "assets/themes/light-mode/instructions-light.webp"
    );
    standoutFeature1Image.setAttribute(
      "src",
      "./assets/themes/light-mode/swimlane-chat-light.webp"
    );
    standoutFeature2Image.setAttribute(
      "src",
      "./assets/themes/light-mode/completions-light.webp"
    );
    standoutFeature3Image.setAttribute(
      "src",
      "./assets/themes/light-mode/swimlane-customized-light.png"
    );
    standoutFeature4Image.setAttribute(
      "src",
      "./assets/themes/light-mode/swimlane-anywhere-light.png"
    );
  }
}
