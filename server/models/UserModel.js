const mangoose = require('mongoose')
const Schema  = mangoose.Schema
// user 模型====>users 集合

const UserType = {
  username : String,
  password : String,
  gender : Number,  // 性别, 0, 1, 2
  introduction : String  // 介绍
}