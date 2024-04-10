require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./Routes/router');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const connectDB = require('./Utils/DB');

var corsOptions = {
    origin:'http://localhost:3000',
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


