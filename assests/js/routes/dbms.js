const express = require('express');
 var router = express.Router();
 
 router.get('/',(req,res)=>{
	res.send("DBMSS")
 })

 router.get('/videos',(req,res)=>{
	res.send("DBMS Videos");
 })

 router.get('/material',(req,res)=>{
	res.send("DBMS MATERIALS");
 })

 router.get('/examples',(req,res)=>{
	res.send("DBMS EXAMPLES");
 })

 module.exports = router;
