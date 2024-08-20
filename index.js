require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',(req,res)=>{
    res.send("adityadotcom")
})
app.get('/twitter',(req,res)=>{
    res.send('<h1>HELLo ji hello ji</h1>')

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})