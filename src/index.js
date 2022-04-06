import express from 'express'
import {Server as WebSocketServer} from 'socket.io'

const app=express();

const io=new WebSocketServer();
app.set('title', 'Geek');
var PORT = 3001;
var path = require ('path');
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.send(app.get('title'));
  })

app.get('/home',(req,res)=>{
  res.render('home.ejs',{
    message:'Welcome Home Dude !!'
  })
})


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening   on http://www.localhost:${PORT}`);
})
module.exports=app;