const mongoose = require("mongoose");
const User = require("./User");
const courseSchema = new mongoose.Schema({
     courseName:{
        type:String,

     },
     courseDescription:{
        type:String,

     },
     instructore:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
     },
     whatYouWillLearn:{
        type:String,

     },
     courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
             
        }
     ],
     ratingAndReview:[
      {
         type:mongoose.Schema.Types.ObjectId,
         ref:"RatingAndReview"

     }
   ],
     prince:{
        type:Number,

     },
     thumbnail:{
        type:String,

     },
     tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
     },
     studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:ture,
        },
     ]

    

})



module.exports= mongoose.model("Course",courseSchema);