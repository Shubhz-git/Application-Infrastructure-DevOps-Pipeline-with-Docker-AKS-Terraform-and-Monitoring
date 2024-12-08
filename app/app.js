const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/booking', (req, res) => {
    res.render('booking');
});

app.post('/booking', (req, res) => {
    // Handle booking form submission (this is just a mock)
    const { name, email, carModel, service } = req.body;
    console.log(`New booking: ${name}, ${email}, ${carModel}, ${service}`);
    res.send('Booking received! Thank you.');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
