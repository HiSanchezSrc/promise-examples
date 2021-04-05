
// Import express and other required external files
const express = require('express');

// Define global constants for my app, such as port
// check to see if there is an environment variable defined for these
// environment variables are in process.env
const port = process.env.PORT || 3924;
const appName = "Test Application";


// Define my app
const app = express();

// Define any middleware to use, if necessary
app.use(express.json());

// tell express to route "/" to the public folder
app.use('/', express.static('public'));

// If you are going to define routes in THIS file, do it here
app.get('/test', (req, res, next) => {
    // Set response header
    res.set({
        "Content-Type": "text/html"
    });

    // Define the response body (if it is complex..)
    const body = `
    <h1>Hello!</h1>
    <p>This route displays a test message.</p>
    `;
    // Send response body
    res.send(body);
});

// Tell the app to listen on the specified port and handle any errors
app.listen(port, (err) => {
    if (err) {
        console.error("Error starting app: ", err);
    }
    console.log(`${appName} listening on port ${port}...`);
});