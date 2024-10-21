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
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('message').value = ''; 
    document.getElementById('error').textContent = ''; 
  });
  
  