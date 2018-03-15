<template>
	<article class="LoginWrap">
	<!--导航栏开始-->
		<div class="header">
			天狗账户登录
		</div>
	<!--普通登录开始-->
		<section>
			<form action="" id="loginForm" type="post">
				<div class="logintype">
					<div class="normal active">普通登录</div>
					<div class="quick">快捷登陆</div>
				</div>
				<div class="validate">
					<div class="pNumber">
						<i class="iconfont icon-shouji2"></i>
						<div class="Num"><input type="text" placeholder="请输入11位手机号码"></div>
					</div>
					<div class="pNumber find">
						<i class="iconfont icon-yuechi1"></i>
						<div class="Num"><input type="text" placeholder="请输入6-16位密码"></div>
						<i class="iconfont icon-yanjing" ></i>
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
	    
	  }
	},

}
</script>

<style src="../../static/css/login.css">
</style>