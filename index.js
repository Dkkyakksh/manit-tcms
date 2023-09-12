const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const cookie = require('cookie-parser');
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view-engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'));

app.use("/", require("./routes/pages.js"));
app.use("/api", require("./controllers/auth"));
app.listen(5000, ()=>{
    console.log("App is running");
})
