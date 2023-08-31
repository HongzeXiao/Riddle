import express from "express";
import axios from "axios";

const app=express();
const port=3000;
const API_URL="https://riddles-api.vercel.app/random";

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/random",async(req,res)=>{
    try{
        const result=await axios.get(API_URL)
        res.render("index.ejs",{content:result.data });
    } catch(error){
        console.log(error.message);
    }
});


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})