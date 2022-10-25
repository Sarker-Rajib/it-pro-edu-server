const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = './data/courses.json'


app.get('/', (req, res) => {
   res.send('Welcome')
})

app.get('/courses', (req, res) => {
   res.send(courses);
})

app.listen(port, () => {
   console.log('The education server is running on port', port);
});