document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('error').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !password || !confirmPassword || !message) {
      document.getElementById('error').textContent = 'All fields are required!';
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('error').textContent = 'Please enter a valid email address.';
      return;
    }

    if (password.length < 6) {
      document.getElementById('error').textContent = 'Password must be at least 6 characters long.';
      return;
    }

    if (password !== confirmPassword) {
      document.getElementById('error').textContent = 'Passwords do not match.';
      return;
    }
    
    alert('Form submitted successfully!');
  });

  document.getElementById('resetButton').addEventListener('click', function () {
    // Clear all input values
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('message').value = '';
    
    // Reset error message
    document.getElementById('error').textContent = '';
  
    // Reset step and update the UI
    currentStep = 0;
    showStep(currentStep);
  
    // Re-enable the "Next" button in case it was disabled on submission
    nextBtn.disabled = false;
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

