const express = require("express");
const cors = require("cors");
const movieList = require("./movies.json");



const app = express();
app.use(cors());
app.use(express.json());


console.log(movieList,"movie list")

//get can be used to get data and also perfom some filter logic but never sent sensitive data using get
//(get related will be written inside query post related will be in body)
app.get("/api/movies",(req,res)=>{
    // console.log(req.query.movieName,"un")
    const {movieName} = req.query;
   const filteredMovies = movieList.filter(movie=>
        movie.title.toLowerCase().includes(movieName.toLowerCase()));
    res.json(filteredMovies);
});

app.post("/api/movies",(req,res)=>{
    const{movieName} = req.body;
    movieList.push({
        id:Date.now(),
        title:movieName,
        poster_path:"",
    });
    res.json(movieList);
    // console.log(req.body,"request");
});
app.delete("/api/movies",(req,res)=>{
    const{movieName} = req.body;
   const filteredMovieList = movieList.filter((movie)=> movie.title.toLowerCase()!== movieName.toLowerCase())
    res.json(filteredMovieList);
    // console.log(req.body,"request");
});

const PORT = 5500;

app.listen(PORT,()=> console.log(`server is running on ${PORT}`));
