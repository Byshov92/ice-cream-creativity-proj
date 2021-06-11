(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open-franchise]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close-franchise]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  querySelectorAll;
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
