const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
var passport = require('passport');
var routes = require('./routes/index');
const errHandle = require("./auth/error-handle")

// Need to require the entire Passport config module so app.js knows about it
require('dotenv').config()

/**
 * -------------- GENERAL SETUP ----------------
 */

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:5173',
}))
app.use(cookieParser())
app.use('/upload',express.static(__dirname+'/upload'))


/**
 * -------------- SESSION SETUP ----------------
 */


/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */


/**
 * -------------- ROUTES ----------------
 */

app.use(routes);

/**
 * -------------- SERVER ----------------
 */
// connect DB
mongoose.connect(process.env.URI_DB).then((re)=>console.log("oke")).catch((err)=>console.log(err))
app.use(errHandle)

// Server listens on http://localhost:3000
app.listen(4000);

