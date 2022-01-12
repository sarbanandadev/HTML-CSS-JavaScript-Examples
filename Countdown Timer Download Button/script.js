var timeleft = 20;
const downloadButton = document.querySelector(".btn");
const countdown = document.querySelector(".countdown")
const waitText = document.querySelector(".waiting-text")
const downloadText = document.querySelector(".download-text")
const downloadLink = document.querySelector(".download-link")

downloadButton.addEventListener("click", () => {
  downloadButton.style.display = "none";
  countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds."; // For Fast Start

  var downloadtimer = setInterval(function timecount() {
    timeleft -= 1;
    countdown.innerHTML = "Download will begin automatically in <span>" + timeleft + " </span> seconds.";
    if (timeleft <= 0) {
      clearInterval(downloadtimer);
      waitText.style.display = "block";
      let download_href = "homepage.zip";
      window.location.href = download_href;
      downloadLink.href = download_href;

      setTimeout(() => {
        waitText.style.display = "none";
        downloadText.style.display = "block";
      }, 4000);
    }
  }, 1000);
});