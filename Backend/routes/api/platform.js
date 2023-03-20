const express = require('express')
const router = express.Router()
let con = require('../../utils/db/db')



router.get("/", (req, res) => {
  let { platformID } = req.params
  SQL = "SELECT * FROM platforms"
  con.query(SQL, function (err, result) {
      if (err) throw err;
      res.status(200).json(result)  
    });     
})

router.get("/:platformID", (req, res) => {
    let { platformID } = req.params
    SQL = "SELECT * FROM platforms WHERE ID = ?"
    con.query(SQL, platformID, function (err, result) {
        if (err) throw err;
        res.status(200).json(result[0])  
      });     
})

router.get("/:platformID/transaction", (req, res) => {
  let { platformID } = req.params
    SQL = "SELECT * FROM transactions WHERE platformID = ? ORDER BY date ASC"
    con.query(SQL, [platformID],function (err, result) {
        if (err) throw err;
        res.status(200).json(result)  
      })
})

router.post("/:platformID/transaction", (req, res) => {

  console.log(req.body)
  var { value, date } = req.body
  let { platformID } = req.params;
  var currPlatTotal = 0;
  //if( date = undefined ) { date = new Date().toISOString().slice(0, 19).replace('T', ' ');  }
    console.log(date)
    SQL = "INSERT INTO transactions (platformID, value, date) VALUES (? , ?, ?)"
    con.query(SQL, [platformID, value, date], function(err, result1){
        if(err) throw err;
        SQL = "SELECT * FROM platforms WHERE ID = ?"
        con.query(SQL, [platformID], function(err, currentTotal){
            if(err) throw err;
            //console.log("PRE", currPlatTotal, currentTotal[0].TotalValue)
            currPlatTotal = currentTotal[0].TotalValue
            //console.log("POST", currPlatTotal, currentTotal[0].TotalValue)
            SQL = "UPDATE platforms SET TotalValue = ? WHERE ID = ?"
             console.log("Setto", value, currPlatTotal)
        con.query(SQL, [Number(value)+Number(currPlatTotal), platformID], function(err, result2){
            if(err) throw err;
            console.log(result2)
            res.status(201).json({"Status": "1 record inserted"})
        });
      });
    });
})

    
router.get("/:platformID/transaction/:transactionID", (req, res) => {
  let { platformID, transactionID } = req.params
    SQL = "SELECT * FROM transactions WHERE platformID = ? AND ID = ?"
    con.query(SQL, [platformID,transactionID], function (err,   result) {
        if (err) throw err;
        res.status(200).json(result[0])  
    })
})




module.exports = router