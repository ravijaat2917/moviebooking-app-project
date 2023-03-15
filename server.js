import express from 'express';
const port = 9000;

const app = express();

app.get('/movies',(req,res)=>{
    res.send("All Movies Data in JSON format from Mongo DB");
});

app.get('/genres',(req,res)=>{
    res.send("All Genres Data in JSON format from Mongo DB");
});

app.get('/artists',(req,res)=>{
    res.send("All Artists Data in JSON format from Mongo DB");
});

app.listen(port , () => {
    console.log(`Server listening at  http://localhost:9000`);
});