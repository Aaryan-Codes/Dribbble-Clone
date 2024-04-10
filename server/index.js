require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Routes/router');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const connectDB = require('./Utils/DB');

var corsOptions = {
    origin:'https://66163ea2ecc11ea25d59b62f--astounding-bienenstitch-4cccc5.netlify.app/',
    methods:"GET, POST",
    credentials:true,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/info',router);

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running @ port : ${PORT}`);
    })
})


