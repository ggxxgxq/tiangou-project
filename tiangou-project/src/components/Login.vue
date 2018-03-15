<template>
	<article class="LoginWrap"  id="LoginWrap">
	<!--导航栏开始-->
		<div class="header">
			天狗账户登录
		</div>
	<!--普通登录开始-->
		<section>
			<form action="" id="loginForm" type="post">
				<div class="logintype" >
					<div class="normal active info" @click="normal()">普通登录</div>
					<div class="quick" @click="quick()">快捷登陆</div>
				</div>
				<div class="validate">
				<div class="v-normal" v-show="type=='normal'" >
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" name="pho" id="pho" placeholder="请输入11位手机号码"></div>
						<i class="iconfont icon-cuowu pi"></i>
					</div>
					<div class="pNumber find">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="password" name="pwd" id="pwd" placeholder="请输入6-16位密码" /></div>
						<i class="iconfont icon-cuowu wi"></i>
						<i class="iconfont icon-yanjing"  @click="showpsw()" ></i>
					</div>
					
				</div>
				<div class="v-quick" v-show="type=='quick'">
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" name="pho1" id="pho1" placeholder="请输入11位手机号码"></div>
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
						<div class="login">
							 登&nbsp;&nbsp;录
						</div>
					</div>
					<div class="psw">
						<a class="register" href="./register">免费注册</a>
						<div class="forget">忘记密码</div>
					</div>
				</div>

			</form>
		</section>
		<div class="argeeWrap">
			<div class="agree">
				<span>登录即代表你同意</span>
				<a href="">《天狗网隐私保护政策》</a>
			</div>
		</div>
	</article>
</template>
    <article class="bodyWrap">
    	
    </article>
<script>


export default {
	name: 'Login',
	data(){
	  return{
	    type:"normal"
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
		}
	},
}

/*if($("#pho").val().length>1){
	$(".pi").css("display","block")
}else{
	$(".pi").css("display","none")
}
*/


</script>

<style src="../../static/css/login.css">
</style>