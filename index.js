const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const services = require('./Service'); // Assuming you have a barrel file for services
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




/*
    1. Create a USER API with CRUD functionalities.
    2. Create A product API with just POST functionality
    3. Create An Authentication API that stores Access token in the Copies
    4. Add another API for logging the user out
    5. Create a Cart API with only POST functionality. This route must be protected to be assessible to only logged-in users.
    6. Upload to GitHub, copy the link to another browser and test if it's accessible. Continue from no. 6 bellow IF the link is valid
    7. Paste the link as your answer in the reply box of the assessment before the time elapses
    NOTE: bonus MARK goes for implementing Barrel file strategy.
*/