document.addEventListener("DOMContentLoaded", () => {
  const openModalBtns = document.querySelectorAll(".openModalBtn");
  const videoModal = document.querySelector(".videoModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const videoPlayer = document.querySelector(".videoPlayer");

  if (!videoModal || !closeModalBtn || !videoPlayer) {
    return;
  }

  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("stop-scroll");
    closeModalBtn.focus();
  };

  const closeModal = () => {
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("stop-scroll");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", openModal);
  });

  closeModalBtn.addEventListener("click", closeModal);

  videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
