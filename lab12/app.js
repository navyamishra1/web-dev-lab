const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample in-memory data
let users = [
    { id: 1, name: "Navya" },
    { id: 2, name: "Rahul" }
];

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID (Route Param)
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user || { message: "User not found" });
});

// POST (Create user)
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// PUT (Update user)
app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.send("User not found");
    }
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});