import mongoose from "mongoose";

const product = mongoose.Schema({
    
    ProductName: {type:String, required:true},
    ProductDescription : {type: String, required:true},
    productImage : {type: String, required: true},
    productPrice:{type:Number,required:true}
},
{
    timestamps:true
}
);

const products = mongoose.model("products",product)

export default products;