function startTimer(modalId) {
  const timer = document.getElementById('timer');
  let sec = 3;

  timer.textContent = sec;

  const countdown = setInterval(() => {
      sec--;
      timer.textContent = sec;

      if (sec <= 0) {
          clearInterval(countdown);

          // To close the modal (by unchecking the checkbox)
          function closeModal() {
            document.getElementById(`my_modal_${modalId}`).checked = false;
          }

          closeModal();
      }
  }, 1000);
}