(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalBtn.forEach((btn) => {
  btn.addEventListener('click',toggleModal);
});
  refs.closeModalBtn.forEach((btn) => {
  btn.addEventListener('click',toggleModal);
});
querySelectorAll
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();