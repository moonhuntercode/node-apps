import express from 'express'
const app=express();

app.set('title', 'Geek');
var PORT = 3001;
app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.send(app.get('title'));
  })
  
app.get('/home',(req,res)=>{
  res.render('home.ejs',{
    message:'Welcome home Dude !!'
  })
})


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening   on http://www.localhost:${PORT}`);
})
export default app;