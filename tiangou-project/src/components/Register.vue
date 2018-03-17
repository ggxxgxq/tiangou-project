<template>
	<article class="bodyWrap">
		<ul class="header">
		    <li><a href="/login"><i class="iconfont icon-jiantou2"></i></a></li>
			<li><h1>免费注册</h1></li>
		    <li></li>
		</ul>
		<section>
			<!-- <form action="" id="loginForm" type="post"> -->
				<div class="validate">
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" id="pho" placeholder="请输入11位手机号码" @keyup="pNum()"  @blur="bl()" ></div>
						<i class="iconfont icon-cuowu pi" @click="clearp()"></i>
						<em class="tit">手机号有误,汪</em>
					</div>
					<div class="pNumber ">
						<i class="iconfont icon-suo"></i>
						<div class="Num"><input type="password" id="pwd" placeholder="请输入6-16位密码" @keyup="wNum()"  @blur="br()"></div>
						<i class="iconfont icon-cuowu wi" @click="clearp1()"></i>
						<i class="iconfont icon-yanjing" @click="showpsw()" ></i>
						<em class="tit1">手机号或者密码不正确</em>
					</div>
					<div class="pNumber">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="text" placeholder="请输入验证码"></div>
						<div class="ver" @click="changeCode()"><img src="../../static/img/verifyCode.jpg"><span class="v-code"></span></div>
					</div>
					<div class="pNumber pwd">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="text" placeholder="请输入随机密码"></div>
						<span class="code" >获取验证码</span>
					</div>
					<p>
						我已阅读并同意
						<a href="">《使用条款》</a>
                          和
						<a href="">《天狗网隐私保护政策》</a>
					</p>
					<div class="registWrap">					
						<div class="regist" @click="regist()">
							 注&nbsp;&nbsp;册
						</div>
					</div>
					<div class="copy">
						&copy;2014&nbsp;51tiangou
					</div>
				</div>

			<!-- </form> -->
		</section>
	</article>
</template>

<script>
import axios from "axios"
export default {
	name: 'Register',
	data(){
	  return{
	    
	  }
	},
	methods:{
        changeCode(){  
       		 fnYan()              	
        },   
        regist(){
            var pNum = null;
	        var regt = /^1(3|5|8)\d{9}$/;
	        var regp = /^\w{6,16}$/;
	        var tel = $("#pho").val();
	        var psd = $("#pwd").val();
            if(regt.test(tel) && regp.test(psd)){
	        	axios.post("/api/regist",{
		           	    number :$("#pho").val(),
		           	    password : $("#pwd").val()
		           }).then((res)=>{
						console.log(res)
	                    if(res.data.status ==1){
	                    	location.href="http://localhost:8080/login";
	                    }else{
	                    	alert(res.data.message);
	                    }
				})  	
            }else if(!regt.test(tel)|| !regt.test(psd)){
                if(!regt.test(tel) && !regt.test(psd)){
                    $(".tit").css("display","block")
                    $(".tit1").css("display","block")
                }else if(!regt.test(psd)){
                    $(".tit1").css("display","block")
                }else{
                	 $(".tit").css("display","block")
                	
                }
            }



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
		wNum(){
            
			if($("#pwd").val().length>0 ){
				$(".wi").css("display","block")
			}else{
				$(".wi").css("display","none")
			}				 
		},
		clearp(){
			$("#pho").val("")
		},
        clearp1(){
			$("#pwd").val("")
		},  
		bl(){
			 $(".tit").css("display","none")
		},
		br(){
			$(".tit1").css("display","none")
		}
	},
}


$(function(){	
	fnYan();
})

 function fnYan(){
	function rand(min,max){//随机函数
		return Math.round( Math.random()*(max-min)+min );
     }
		var arrstr=[];
		for(var i=1;i<=4;i++){
			var yan = rand(48,122);
			if(yan>=58&&yan<=64 || yan>=91&&yan<=96){
				i--;//重新抽取验证码
			}else{
				arrstr[i]=String.fromCharCode(yan);//将ASCII数字转变成字母
			}
		}
		$(".v-code").html(arrstr.join("")) //转成数字//split是转成字符串
	}   


</script>
<style src="../../static/css/register.css"></style>