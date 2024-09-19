    const token = localStorage.getItem('token');
    console.log('Token:', token); 
    
if (token) {
    try {
        const decodedToken = jwt_decode(token);
        console.log('Decoded Token:', decodedToken); 
        document.getElementById('username').textContent = decodedToken.username;

        fetch('http://localhost:3030/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('username').textContent = data.user.username;
            } else {
                console.error('Error fetching user details:', data.message);
                window.location.href = './index.html';
            }
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
            window.location.href = './index.html';
        });
    } catch (error) {
        console.error('Error decoding token:', error);
    }
    } else {
    console.error('No token found, redirecting to login page');
    window.location.href = './index.html';
    }
