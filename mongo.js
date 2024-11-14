const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://cluster0.qfkxz.mongodb.net/" --apiVersion 1 --username shumailahmad97th")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB", err));