const express = require("express");
const app = express();
const port = 3002;

const { getRobots, getRobotById} = require("./controllers/getRobots");

app.get("/",getRobots);

app.get("/:id",getRobotById);

app.listen(port , ()=>{
    console.log("holaaaaa");
    console.log(`corriendo ok en el puerto : ${port}`);
});