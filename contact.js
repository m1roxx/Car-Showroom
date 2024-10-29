document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const resetBtn = document.getElementById('resetButton'); // Correct reference for reset button
  let currentStep = 0;

  function showStep(step) {
    steps.forEach((s, index) => {
      s.classList.toggle('active', index === step);
    });
    prevBtn.disabled = step === 0;
    nextBtn.textContent = step === steps.length - 1 ? 'Submit' : 'Next';
  }

  nextBtn.addEventListener('click', () => {
    const currentInputs = steps[currentStep].querySelectorAll('input, textarea');
    let valid = true;

    currentInputs.forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
      }
    });

    if (valid) {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert('Form submitted successfully!');
      }
    } else {
      document.getElementById('error').textContent = 'Please fill in all required fields correctly.';
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  resetBtn.addEventListener('click', function () {
    // Clear all input values
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('message').value = '';

    // Reset error message
    document.getElementById('error').textContent = '';

    // Reset the step and update the UI
    currentStep = 0;
    showStep(currentStep);
  });

  showStep(currentStep);
});
  
  document.addEventListener('keydown', function (event) {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains('nav-link')) {
      const navLinks = Array.from(document.querySelectorAll('.nav-link'));
      let currentIndex = navLinks.indexOf(focusedElement);
      
      if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % navLinks.length;
        navLinks[nextIndex].focus();
      } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].focus();
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentStep = 0;

  function showStep(step) {
    steps.forEach((s, index) => {
      s.classList.toggle('active', index === step);
    });
    prevBtn.disabled = step === 0; 
    nextBtn.textContent = step === steps.length - 1 ? 'Submit' : 'Next'; 
  }

  nextBtn.addEventListener('click', () => {
    const currentInputs = steps[currentStep].querySelectorAll('input, textarea');
    let valid = true;

    currentInputs.forEach(input => {
      if (!input.checkValidity()) {
        valid = false;
      }
    });

    if (valid) {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      } else {
        alert('Form submitted successfully!');
      }
    } else {
      document.getElementById('error').textContent = 'Please fill in all required fields correctly.';
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  showStep(currentStep);
});

