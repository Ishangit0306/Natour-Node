const mongoose= require('mongoose');

const tourSchema= mongoose.Schema({
    name:{
      type:String,
      required:[true,'A tour must have name'],
      unique:true
    },
    duration:{
      type:Number,
      required:[true, 'A tour must have a duration']
    },
    maxGroupSize:{
      type:Number,
      required:[true,'A tour must have a group size']
    },
    difficulty:{
      type:String,
      required:[true,'A difficulty must be theere']
    },

    ratingAverage:{
      type:Number,
      default:4.5
    },
    ratingQuantity:{
      type:Number,
      default:0
    },
    price:{
      type:Number,
      required:[true,"A tour must have a price"]
    },
    priceDiscount:{
      type:Number
    },
    summary:{
      type:String,
      trim:true
    },
    description:{
      type:String,
      trim:true,
      required:[true,'Must have description']
    },
    imageCover:{
      type:String,
      required:[true,'A tour must ahave a image']
    },
    images:[String],
    createAt:{
      type:Date,
      default:Date.now()
    },
    startDates:[Date]
  });

const Tour= mongoose.model('Tour',tourSchema);
module.exports= Tour;