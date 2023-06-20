const mongoose= require('mongoose');
const dotenv = require('dotenv');
const fs=require('fs');
const Tour= require('./../../models/tourSchema');

dotenv.config({ path: './../../config.env' });

const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD); 

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
}).then
( cn=>
  {
    //console.log(cn.connection);
  console.log("connection established")});

  const tours= JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));
  const importData=async ()=>
  {
   try{
 await Tour.create(tours);
 process.exit(); 
}
   catch(err){
    console.log(err);
   }

  }
  const deleteData=async ()=>
  {
   try{
 await Tour.deleteMany();
 console.log("Deleted");
 process.exit();
   }
   catch(err){
    console.log(err);
   }

  }

  if(process.argv[2]=='--import')
  {
    importData();
  }
  if(process.argv[2]=='--delete')
  {
    deleteData();
  }
  console.log(process.argv);

