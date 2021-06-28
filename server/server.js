require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pusher = require('pusher');
const PORT = process.env.PORT || 8000
const apiRoute = require('./routes/api');
const cors = require('cors');
app.use(express.json())

app.use(cors());
app.use('/api', apiRoute)

const pusher = new Pusher({
  appId: "1225877",
  key: "4518d20bbadfe59b8c29",
  secret: "4f39fd3ed047f340c9a0",
  cluster: "ap2",
  useTLS: true
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  });

mongoose.connection.once('open', ()=>{
  console.log('Connected to database..');
  const changeStream = mongoose.connection.collection('posts').watch();
  changeStream.on('change',(change)=>{
    console.log('change triggered on pusher')
    console.log(change)
    console.log('End of change')

    if(change.operationType === 'insert'){
      console.log('triggering image upload')
      const postDetails = change.fullDocument;
      pusher.trigger('posts', 'inserted',{
       username : postDetails.username,
       caption : postDetails.caption,
       image : postDetails.image
      })
 }else{
   console.log('Eror occured..')
 }
  });
 

})  


// app.get('/', (req, res)=>{
//     res.send('<h2>Hello Mern <i>Ecommerce</i> website</h2>')
// });

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
});