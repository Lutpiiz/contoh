document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.butuh-validasi');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const inputs = form.querySelectorAll('input[required], select[required]');
      let isFormValid = true;

      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          input.classList.add('is-invalid');
          isFormValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (isFormValid) {
        form.submit();
      } else {
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger');
        errorMessage.textContent = 'Harap isi semua field yang wajib diisi.';

        const alertsContainer = document.querySelector('.container');
        alertsContainer.insertBefore(errorMessage, form);
      }
    });
  });