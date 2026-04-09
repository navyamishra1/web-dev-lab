const express = require('express');
const app = express();

// Global Middleware (Logger)
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${new Date()}`);
    next(); // move to next middleware
});

// Second Middleware
app.use((req, res, next) => {
    console.log("Second middleware executed");
    next();
});

// Route-level middleware
const checkAuth = (req, res, next) => {
    const isAuth = true; // change to false to test
    if (isAuth) {
        next();
    } else {
        res.send("Unauthorized");
    }
};

// Route using middleware
app.get('/secure', checkAuth, (req, res) => {
    res.send("Welcome to secure route");
});

// Normal route
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});