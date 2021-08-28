const express=require("express");
const loginRouter=express.Router();
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:true});


loginRouter.use(express.json());

loginRouter.post("/logininfo",urlencodedParser,function(req,res)
{
    const body=req.body;
    console.log(body);
    res.send("The form data was submitted");
})

