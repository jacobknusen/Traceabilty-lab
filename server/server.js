const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors());



const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`We are online on ${port}`)
});
app.use(express.static(path.join(__dirname, "../handouts")));
