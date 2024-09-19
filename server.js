const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3030;

app.use(cors());

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];                
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'gvbfru293', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateToken(user) {
  return jwt.sign({ username: user.username }, "gvbfru293", { expiresIn: '2h' });
}

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'A12001200a',
  database: 'login'
});

app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM login.userinfo WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Error checking username');
    } else if (result.length > 0) {
      
      res.status(409).json({ success: false, message: 'Username already exists' });
    } else {
  
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error('Error hashing password:', err);
          res.status(500).send('Error hashing password');
        } else {
          pool.query('INSERT INTO login.userinfo (username, userpassword) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
            if (err) {
              console.error('Database error:', err);
              res.status(500).send('Error saving user');
            } else {
              res.json({ success: true, message: 'User registered successfully' });
            }
          });
        }
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM login.userinfo WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Error retrieving users');
    } else if (result.length === 1) {
        const user = result[0]
        bcrypt.compare(password, user.userpassword, (err, isMatch) => {
          if(err){
            console.error(err)
            res.status(500).send('Error comparing passwords')
          }else if(isMatch){
            const token = generateToken(user);
            res.json({ success: true, token});
            console.log(username)
            console.log(user)
            console.log(token)
          }else{
            res.status(401).json({ success: false, message: 'Invalid username or password' });
          }
        })
        } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.get('/api/user', authenticateToken, (req, res) => {
  const username = req.user.username;
  
  pool.query('SELECT username FROM login.userinfo WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Error retrieving user details');
    } else if (result.length === 1) {
      res.json({ success: true, user: result[0] });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  });
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});