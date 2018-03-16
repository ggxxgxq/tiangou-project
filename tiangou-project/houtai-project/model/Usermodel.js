var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 创建文档的定义
var User = new Schema({
    number  : Number,
    password: Number,
    create_date : { type: Date, default: Date.now }
});

// 创建model对象，与数据库中的文档（表）映射
var Usermodel = mongoose.model('numbers',User);
module.exports = Usermodel; 