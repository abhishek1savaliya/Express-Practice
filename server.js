 const express = require('express');
 const path = require('path')


const messageRouter = require("./routes/messages.router");
const friendsRouter = require("./routes/friends.router");

const app = express();
const PORT = 3000;

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))



app.use((req,res,next)=>{
    const start = Date.now();
    next();
    // actions go here 
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})


app.use('/site',express.static(path.join(__dirname,'public')));

app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index.hbs',{
        title : "My Friends are Very Clever",
        caption:'I am Learning handlebars'

    })
})
app.use('/friends',friendsRouter)
app.use('/messages',messageRouter)



app.listen(PORT,()=>{
    console.log(`Server is Listing PORT ${PORT}`);    
})