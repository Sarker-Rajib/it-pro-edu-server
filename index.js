const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/', (req, res) => {
   res.send('Welcome')
})

app.listen(port, () => {
   console.log('The education server is running on port', port);
});