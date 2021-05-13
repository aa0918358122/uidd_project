#!/usr/bin/env node

const express = require('express')
const app = express()

const port = 6698


app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(port, ()=>{
  console.log(`listening on port :${port}`)})
  
app.use('/profile',express.static(`${__dirname}/router`))
app.use('/login',express.static(`${__dirname}/router`))

var fs = require('fs');

var user;
fs.readFile('./userInfo.json', 'utf8', function (err, data) {
  if (err) throw err;
  user = JSON.parse(data);
});

app.post('/profile', (req, res) => {
  var ID = req.body.userid.slice(1,-1);
  for(var i = 0; i < user.userInfo.length; i++){
    if(`${ID}` == user.userInfo[i].id){
      
    }
    else{
      var newuser = {
        "id":`${ID}`,
        "name": `${req.body.name}`,
        "questions":[]
      }
     
      user.userInfo.push(newuser);
      var str = JSON.stringify(user);
      fs.writeFile('./userInfo.json', str, function (err) {
        if (err) {
            console.error(err);
        }
        console.log('Add new user to userInfo...')
      })
    }
  }
})
app.get('/login',(req,res) => {
  res.render('login')
})



