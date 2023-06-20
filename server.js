const mongoose= require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD); 

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then
( cn=>
  {console.log(cn.connection);
  console.log("connection established")});



// const testTour= new Tour({
//   name:'The forest hiker',
//   rating:4.7,
//   price:450
// })
// testTour.save().then(doc=>{
//   console.log(doc);
// }).catch(err=>{ console.log('Error',err)});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
