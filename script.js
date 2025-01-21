// dismiss announcement functionality
const dismissButton = document.querySelector(".dismiss")
dismissButton.setAttribute("onclick", "removeAnnouncement()")

function removeAnnouncement() {
    const announcementEl = document.querySelector(".announcement")
    // console.log(announcementEl.parentNode)
    const announcementContainer = announcementEl.parentNode
    announcementContainer.removeChild(announcementEl)
    announcementContainer.removeChild(dismissButton)
}