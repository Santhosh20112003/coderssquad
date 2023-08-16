
const { auth, requiresAuth } = require('express-openid-connect');
const express = require('express');
const app = express();


app.use(
  auth({
    authRequired:false,
    auth0Logout:true,
    secret: 'a long text in autho authentication for nodejs with browser help',
    issuerBaseURL:'https://santhosh-technologies.us.auth0.com',
    baseURL: 'http://localhost:3000',
    clientID: 'MFv4E8icBuZ7QklsPVgdQhjCwPj5WTHs',
  })
);

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
});
app.get('/main',requiresAuth(),(req,res)=>{
  res.sendFile(__dirname+'/views/main.html');
})
app.get('/about',requiresAuth(),(req,res)=>{
  res.sendFile(__dirname+'/views/about.html');
});

 app.use(express.static('assests'));
 app.use('/css',express.static(__dirname + 'assests/css'));
 app.use('/js',express.static(__dirname + 'assests/js'));
 app.use('/img',express.static(__dirname + 'assests/img'));



 app.use(express.static('routes'));
  const port = process.env.PORT || 3000;

var python =require('./assests/js/routes/python');
var web =require('./assests/js/routes/web');
var java =require('./assests/js/routes/java');
var c =require('./assests/js/routes/c');
var cplus =require('./assests/js/routes/cplus');
var dbms =require('./assests/js/routes/dbms');


app.use('/web-development',requiresAuth(),web);

app.use('/java',requiresAuth(),java);

app.use('/python',requiresAuth(),python);

app.use('/c',requiresAuth(),c);

app.use('/cplusplus',requiresAuth(),cplus);

app.use('/dbms',requiresAuth(),dbms);

app.listen(port,()=>{
	console.log('app running ${port}')
});

