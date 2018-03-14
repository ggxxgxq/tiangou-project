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
				<div class="phone">
					<div class="pNumber">
						
					</div>
				</div>
			</form>
		</section>
	</article>
</template>

<script>
export default {
	name: 'Login',
	data(){
	  return{
	    
	  }
	}
}
</script>

<style src="../../static/css/login.css">
</style>