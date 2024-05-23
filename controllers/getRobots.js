
const {request , response} = require ("express")

const {robots } = require ("../robots")


const getRobots = (req  = request , res = response)=>{ 
    res.json({
        status:true,
        robots,
        statusCode:200
    })
};


const getRobotById = (req , res = response)=>{ 

  let id = (req.params.id);
  let robotS = "";
  robotS = robots.find((robot)=> {
    return robot.id ===id;
  });
  if (robotS) {
    return res.json ({
        ok:true,
        robotS,
        statusCode:200
    });
  } else {
    return res.json ({
        ok:false,
        msg: "no hay robot con ese id ",
        statusCode:404
    });
  }
}
module.exports= {
    getRobots,
    getRobotById
}