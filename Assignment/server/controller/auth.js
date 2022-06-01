import { restart } from "nodemon";
import Users from "../model/user";
//3 deki 14 smma try catch
export const login= async (req,res)=>{
    console.log('this is login api')
    const {id,name}=req.body;
    console.log(name);


    const userData=new Users({
id,
name

    })

    await userData.save()
    return res.json ({Message:"user has been register successfully"})

    //res.status(200).send("sucess")
}


export const firstapi =async (req,res)=> {
    console.log("this is first api");
    res.status(400).send("authorization erroe");
};

export const register =async (req,res)=> {
    console.log(req.body);
};





        