// Import the necessary modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Define the port the server will listen on
const port = 3000;

// Use the body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Create a mock database as an array
let mockDatabase = [];

// Helper function to simulate a delay (1 second)
const simulateDelay = (callback) => {
  setTimeout(callback, 1000);
};

// GET /api/data - Retrieve all entries from the database
app.get("/api/data", (req, res) => {
  simulateDelay(() => {
    res.status(200).json(mockDatabase); // Send the entire mockDatabase as the response
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
