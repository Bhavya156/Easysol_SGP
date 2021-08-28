const express=require("express");
const mongoose=require("mongoose");
const app =new express();
const loginRouter=require("");

const homeRouter=require("./loginRouter.js");

app.use(loginRouter);
app.use(homeRouter);

