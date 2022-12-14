const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");


app.get('/', (req, res) => {
   res.send('Welcome')
})

app.get('/courses', (req, res) => {
   res.send(courses);
})

app.get('/courses/:id', (req, res) => {
   const id = req.params.id;
   const singleCourse = courses.find(course => course.id === id)
   res.send(singleCourse);
})

app.listen(port, () => {
   console.log('The ProEdu server is running on port', port);
});