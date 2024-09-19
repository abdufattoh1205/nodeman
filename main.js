var submit = document.getElementById('submit');

submit.addEventListener('click', (event) =>{
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var space = document.querySelector('.space')

    fetch('http://localhost:3030/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
        .then(response => response.json())
        .then(data => {
            if(username !== '' && password !== ''){
                console.log(data)
                if(data.success){
                    console.log('success');
                    localStorage.setItem('token', data.token);
                    window.location.href = "./welcome.html";
                }else if(!data.success){
                    console.log('invalid password or username');
                    console.error('invalid');
                    space.style.display = 'block';
                    space.innerHTML = 'Invalid Password or Username';
                }    
            }else{
                space.style.display = 'block'
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});