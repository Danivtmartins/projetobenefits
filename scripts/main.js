if (typeof document !== 'undefined') {
  const modal = document.querySelector(".modal"); //querySelector() returns the first Element within the document that matches the specified selector, or group of 
  const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".close");


//open modal function
  function openModal() {
    modal.classList.remove("hidden")
  };
//open modal event
openModalBtn.addEventListener("click", openModal);


//close modal function
const closeModal = function () {
  modal.classList.add("hidden")
};

//close modal event
closeModalBtn.addEventListener("click", closeModal);


}