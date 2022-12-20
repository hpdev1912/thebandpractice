function handleButtonClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.tagName === "A") {
    const modal = document.querySelector(".modal");
    if (!modal) return;

    modal.classList.add("open");

    modal.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
}

function handleCLoseModal() {
  const modal = document.querySelector(".modal");
  if (!modal) return;

  modal.classList.remove("open");
}

function initBuyTicketButton() {
  const placeListElement = document.querySelector(".place-list");

  if (!placeListElement) return;
  placeListElement.addEventListener("click", handleButtonClick);
}

function initCloseModal() {
  const closeElement = document.querySelector(".modal-close");
  if (!closeElement) return;
  closeElement.addEventListener("click", handleCLoseModal);
}

(() => {
  initBuyTicketButton();
  initCloseModal();

  const modalContainerElement = document.querySelector(".modal-container");
  if (!modalContainerElement) return;
  modalContainerElement.addEventListener("click", (event) => {
    event.stopPropagation();
  });
})();
