const express = require('express');
 var router = express.Router();
 
 router.get('/',(req,res)=>{
	res.send("C Programing")
 })

 router.get('/videos',(req,res)=>{
	res.send("C Videos");
 })

 router.get('/material',(req,res)=>{
	res.send("C MATERIALS");
 })

 router.get('/examples',(req,res)=>{
	res.send("C EXAMPLES");
 })

 module.exports = router;
