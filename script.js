function showMessage() {
  alert("GOOD BOY🐶!!!\nJust click OK my nigg@!🖕🏻");
}

function openPopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("myVideo");

  popup.style.display = "flex";
  video.play();
}

function closePopup() {
  const popup = document.getElementById("videoPopup");
  const video = document.getElementById("myVideo");

  popup.style.display = "none";
  video.pause();
  video.currentTime = 0;
}