const express = require("express");
const cors = require("cors");



const app = express();

app.use(cors());

const movieList = require("./movies.json");
console.log(movieList,"movie list")


app.get("/",(req,res)=>{
    res.json(movieList);
});


const PORT = 5500;

app.listen(PORT,()=> console.log(`server is running on ${PORT}`));
