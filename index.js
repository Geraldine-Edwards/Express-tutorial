import express from 'express';

const app = express();

app.get('/Home',(req,res)=>{
    res.send("Hello World!")
})
app.get('/Home/data',(req,res)=>{
    fetch("https://zenquotes.io/api/random")
    .then((response)=>{
        const Response = response.json()
        return Response
    }).then((data)=>{
         const Data = data[0]
           res.send(Data)
    }).catch((err)=>{
        console.log("the Error is",err)
    })
  
})


app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);