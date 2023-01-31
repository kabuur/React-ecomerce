import mongoose, { Mongoose } from "mongoose";


const orders = mongoose.Schema({
    orderUserId: {type: mongoose.Schema.Types.ObjectId,  required: true, ref: 'User',},
    orderImage:{type:String, required:true},
    orderPrice:{type:Number, required:true},
    orderQty:{type:Number,required:true},
    orderProductName:{type:String, required:true},
    orderProductId:{type:mongoose.Schema.Types.ObjectId,required:true, ref:'products'}
},
{
    timestamps:true
}
)

const order = mongoose.model('orders',orders);

export default order;