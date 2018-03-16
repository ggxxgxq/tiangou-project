var express = require('express');
var router = express.Router();
var Usermodel = require("../model/Usermodel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/regist',function(req,res){
    var number = req.body.number;
    var password = req.body.password;
    var result={
    	status:1,
    	message:"注册成功"
    }
    Usermodel.find({number:number},function(err,docs){
    	if(!err && docs.length>0){
    		console.log("该手机号已经被使用")
        res.status= -110;
        res.message  ="注册失败"
    		res.send(result);
        return;
    	}
    })

    var pn = new Usermodel();
    pn.number = number;
    pn.password =password;
    pn.save(function(err){
      if(err){
        console.log("注册失败",err)
        res.status= -119;
        res.message  ="注册失败";
        res.send(result);
      }else{
        res.send(result);
      }
    })
})

router.post('/api/login',function(req,res){
    var number = req.body.number;
    var password = req.body.password;
    var result={
    	status:1,
    	message:"登录成功"
    }
    Usermodel.find({number:number,password:password},function(err,docs){
       if(!err && docs.length>0){
           console.log("登录成功");
           res.send(result);
       }else{
           console.log("登录失败,请检查你的用户名或密码");
           result.status = -110;
           result.message ="登录失败,请检查你的用户名或密码";
           res.send(result);
       }
    })
})
module.exports = router;
