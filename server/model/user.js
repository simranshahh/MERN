import mongoose from "mongoose";
const {Schema}=mongoose;

const userSchema = new Schema({
    name:{ 
      type:String,
      required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    } //schema banako
},

{timestamps:true}
);

const  loginschema = new Schema({
    name:{ 
        type:String,
        required: true
      },
      email:{
          type:String,
          required:true,
          unique:true
      },
      address:{
          type:String,
          required:true,
      } ,
      phoneno:{
          type:String,
          required:true,
      },
},

);

export default mongoose.model("Users",userSchema)

// const {name}=data;
// const {id}=name;