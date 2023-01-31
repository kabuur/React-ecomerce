import mongoose from "mongoose";


const users = mongoose.Schema({
   
    name:{type:String, required:true},
    userName:{type:String, required:true},
    password:{type:String, required:true},
    tell:{type:String, required:true},
    
    

},
{
    timestamps:true
}
)


const user = mongoose.model('users', users);

export default user