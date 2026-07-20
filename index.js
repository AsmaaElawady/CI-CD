import express from "express"

const app = express();

app.get("/user",(req,res)=>{
    res.status(200).json({ name: 'Alex', age: 28 });
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})