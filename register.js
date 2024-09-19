document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
     var space = document.querySelector('.space');

     fetch('http://localhost:3030/api/register', {
     method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
         if (data.success) {
            console.log('User registered successfully');
             window.location.href = "./index.html"; // Redirect to login page after successful registration 
             } else {
             space.style.display = 'block';
             space.innerHTML = 'Registration failed. Please try again.';
             alert('username already exists')
     }
    })
        .catch(error => console.error('Error registering user:', error));
 });