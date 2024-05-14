if (typeof document !== 'undefined') {
  const modal = document.querySelector(".modal"); //querySelector() returns the first Element within the document that matches the specified selector, or group of 
  const openModalBtn = document.querySelector(".btn-open");



  function openModal() {
    modal.classList.remove("hidden");
  };

openModalBtn.addEventListener("click", openModal);

}