document.addEventListener('DOMContentLoaded', () => {
    // Register Form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('regUsername').value.trim();
            const password = document.getElementById('regPassword').value.trim();

            if (username && password) {
                localStorage.setItem(username, password);
                alert('Registration successful! Please login.');
                window.location.href = 'login.html'; 
            } else {
                alert('Please fill out all fields!');
            }
        });
    }

    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
               
                localStorage.setItem('currentUser', username); 
                window.location.href = 'profile.html'; 
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutButton = document.getElementById('logout');
    if (usernameDisplay && logoutButton) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            usernameDisplay.textContent = currentUser; 
        } else {
            alert('No user logged in!');
            window.location.href = 'login.html'; 
        }

        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('currentUser'); 
            window.location.href = 'login.html'; 
        });
    }
});
