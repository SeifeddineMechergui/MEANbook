import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { type } from "os";
import { boolean } from "webidl-conversions";

let bookShema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:Number,require:false},
    available:{type:Boolean,required:false},
    publishable:{type:Date,required:true,default:new Date()}

})

bookShema.plugin(mongoosePaginate);
const Book=mongoose.model("Book",bookShema);
export default Book;