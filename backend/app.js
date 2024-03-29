/// ///////////////////////////////////////////////////
// INCLUDES
/// ///////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');
const pool = require('./db');

/// ///////////////////////////////////////////////////
// INIT
/// ///////////////////////////////////////////////////
const app = express();
const PORT = process.env.PORT || 3000;

/// ///////////////////////////////////////////////////
// DISPLAY SERVER RUNNING
/// ///////////////////////////////////////////////////
app.get('/api',(req,res)=> {
    res.send(`Server running on port ${PORT}`)
});

app.listen(PORT,()=> {
    console.log(`App listening to port ${PORT}`);
});

/// ///////////////////////////////////////////////////
// SETUP APP
/// ///////////////////////////////////////////////////
app.use(cors());
app.use(express.json());

app.use(express.static('../frontend/public'));


// BUILT-IN MIDDLES TO HANDLE urlencoded form data
/// ///////////////////////////////////////////////////
app.use(express.urlencoded({extended: false}));

/// ////////////////////////////////////////////
// SETTING MAIN ROUTES
/// ////////////////////////////////////////////
const mainRoutes = require("./routes/mainRoutes")

app.use("/api", mainRoutes)
app.use('/images', express.static('images'));

