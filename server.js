const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

const ResultRouter = require('./routes/result-routes');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(cors())


mongoose
    .connect("mongodb+srv://steif:steif123@darkmode.r8fyp.mongodb.net/results?retryWrites=true&w=majority", { useNewUrlParser: true,
                                            useUnifiedTopology: true },
                                            ()=>{console.log("Connected! :)")})
    
const port = process.env.PORT || 8000;

app.listen(port, () => 
    console.log(`Server running on port ${port}`)
);
app.use('/api', ResultRouter);

