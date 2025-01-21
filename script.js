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
