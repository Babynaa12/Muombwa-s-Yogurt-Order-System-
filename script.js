document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('message').innerText = 'Invalid credentials!';
    }
});
    // register validation
   // script.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Registration successful!');

    // Here you could add further logic, such as sending data to a server
});
 