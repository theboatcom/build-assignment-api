import express from "express";
import connectionPool from "./utils/db.mjs";

const app = express();
const port = 4001;

app.post("/assignments", async (req, res) => {
 
  let results 
  try {
   results = await connectionPool.query(`select * from assignments`);
  }
  catch{
    return res.status(500).json({
       message: "Server could not read assignment because database connection" 
    })
  }
  
  return res.status(201).json({
    data: results.rows,
  });
  

 //return res.st("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
