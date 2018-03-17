<template>
	<article class="LoginWrap"  id="LoginWrap">
	<!--导航栏开始-->
		<div class="header">
			天狗账户登录
		</div>
	<!--普通登录开始-->
		<section>
			<!-- <form action="" id="loginForm" type="post"> -->
				<div class="logintype" >
					<div class="normal active info" @click="normal()">普通登录</div>
					<div class="quick" @click="quick()">快捷登陆</div>
				</div>
				<div class="validate">
				<div class="v-normal" v-show="type=='normal'" >
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input @keyup="pNum()" 
						 type="text" name="pho" id="pho" @focus="phoneNum()" placeholder="请输入11位手机号码"></div>
						<i class="iconfont icon-cuowu pi" @click="clearp()" @blur="cls()"></i>
					</div>
					<div class="pNumber find">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="password" name="pwd" id="pwd" @keyup="wNum" @focus="passWord()" placeholder="请输入6-16位密码" /></div>
						<i class="iconfont icon-cuowu wi" @click="clearp1()"  @blur="cls1()"></i>
						<i class="iconfont icon-yanjing"  @click="showpsw()" ></i>
					</div>
					
				</div>
				<div class="v-quick" v-show="type=='quick'">
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" name="pho" id="pho" placeholder="请输入11位手机号码"></div>
						<i class="iconfont icon-cuowu pi" @click="clearp()"></i>
					</div>
					<div class="pNumber">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="text" name="code" id="code" placeholder="请输入验证码"></div>
						<div class="ver" @click="changeCode()"><img src="../../static/img/verifyCode.jpg"><span class="v-code"></span></div>
					</div>
					<div class="pNumber ">
						<i class="iconfont icon-suo"></i>
						<div class="Num"><input type="text" placeholder="请输入随机密码"></div>
					
						<span class="rand">获取随机密码</span>
					</div>
				</div>
					<div class="loginWrap">					
						<div class="login" @click="login()" >
							 登&nbsp;&nbsp;录
						</div>
					</div>
					<div class="psw">
						<a class="register" href="./register">免费注册</a>
						<div class="forget">忘记密码</div>
					</div>
				</div>

			<!-- </form> -->
		</section>
		<div class="argeeWrap">
			<div class="agree">
				<span>登录即代表你同意</span>
				<a href="">《天狗网隐私保护政策》</a>
			</div>
		</div>
		<div class="tgou_alert">
			<div class="alert_msg">
				<aside v-show="pass=='tel'">
					<div>手机号有误，汪！</div>
					<p class="config" @click="none()">确定</p>
				</aside>
				<aside v-show="pass == 'six'">
					<div>请输入6-16位密码</div>
					<p class="config" @click="none()">确定</p>
				</aside>
			</div>
		</div>
	</article>
</template>
    <article class="bodyWrap">
    	
    </article>
<script>

import axios from "axios"

export default {
	name: 'Login',
	data(){
	  return{
	    type:"normal",
	    pass:"",
	    flag:""
	  }
	},
	methods:{
		normal(){
	      this.type ="normal";
	       $(".normal").addClass('active info').siblings().removeClass('active info')
		},
		quick(){
		  this.type ="quick";
		  $(".quick").addClass('active info').siblings().removeClass('active info')		  
		},
		showpsw(){
		     if($("#pwd").attr("type")=="password"){
			    $(".icon-yanjing").css("color","red")     	
				$("#pwd").attr("type","text")
		     }else{
		     	$(".icon-yanjing").css("color","#999") 
				$("#pwd").attr("type","password")	     	
		     }
		},
		pNum(){
		
			if($("#pho").val().length>0 ){
				$(".pi").css("display","block")
			}else{
				$(".pi").css("display","none")
				
				
			}		
		},
		phoneNum(){

			$(".pi").css("display","none")
		},
		wNum(){
            
			if($("#pwd").val().length>0 ){
				$(".wi").css("display","block")
			}else{
				$(".wi").css("display","none")
			}				 
		},
		passWord(){
            $(".wi").css("display","none")
        
		},
		clearp(){
			$("#pho").val("")
		},
        clearp1(){
			$("#pwd").val("")
		},
		login(){
          
	        var pNum = null;
	        var regt = /^1(3|5|8)\d{9}$/;
	        var regp = /^\w{6,16}$/;
	        var tel = $("#pho").val();
	        var psd = $("#pwd").val();
            if(regt.test(tel) && regp.test(psd)){
                  axios.post("/api/login",{
		           	    number :$("#pho").val(),
		           	    password : $("#pwd").val()
		           }).then((res)=>{
						console.log(res)
	                    if(res.data.status ==1){
	                    	location.href="http://localhost:8080/myshopping";
	                    }else{
	                    	alert(res.data.message);
	                    }
				})
            }else if( !regt.test(tel)){
            	this.pass = "tel";
			   $(".tgou_alert").css("display","block")
            }else if( !regt.test(psd)){
            	this.pass = "six";
			    $(".tgou_alert").css("display","block")           	
            }
		},
		none(){
			$(".tgou_alert").css("display","none")
		},
		cls(){
           $(".validate .pi").css("display","none")
		},
		cls1(){
           $(".validate .wi").css("display","none")
          
		}
	},
}
/*
$({
	if("."){

	}
})*/



</script>

<style src="../../static/css/login.css">
</style>

