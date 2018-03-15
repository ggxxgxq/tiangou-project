<template>
	<article class="bodyWrap">
		<ul class="header">
		    <li><a href="/login"><i class="iconfont icon-jiantou2"></i></a></li>
			<li><h1>免费注册</h1></li>
		    <li></li>
		</ul>
		<section>
			<form action="" id="loginForm" type="post">
				<div class="validate">
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" placeholder="请输入11位手机号码"></div>
					</div>
					<div class="pNumber ">
						<i class="iconfont icon-suo"></i>
						<div class="Num"><input type="text" placeholder="请输入6-16位密码"></div>
						<i class="iconfont icon-yanjing" ></i>
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
					<div class="loginWrap">					
						<div class="login">
							 登&nbsp;&nbsp;录
						</div>
					</div>
					<div class="copy">
						&copy;2014&nbsp;51tiangou
					</div>
				</div>

			</form>
		</section>
	</article>
</template>

<script>
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