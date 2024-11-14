const express = require("express");
require("./config/mongo")
const route = require("./config/routes")
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use( express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(route);




app.listen(1200, () =>{
    console.log(`Server is running on port ${1200}`);
})