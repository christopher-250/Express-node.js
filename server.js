const express = require('express');
const path = require('path');


const app = express();
app.get(express.static(path.join(__dirname,'public','index.html')));

app.listen(7000,() => console.log(`Server is running on port 7000`));
