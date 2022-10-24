

const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const all = require('./data/courses.json')

app.get('/all',(req,res)=>{
    res.send(all)
})

app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const course = all.find(c => c.id === id);
    res.send((course))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })