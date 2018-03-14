<template>
	<div class="bodyWrap">
		<header>
			<div class="headerone"><i class="iconfont icon-jiantou2"></i> </div>
			<div class="headertwo">
				<div class="htwo">我的天狗</div>
			</div>
			<div class="headerthree"><i class="iconfont icon-icon--"></i>
			<i class="iconfont icon-more"></i></div>
		</header>
		<div class="loginWrap">
			<div class="login">
				<div class="log_msg">{{log_msg}}</div>
                <a href="./login" >立即登录</a>
			</div>
		</div>
		<div class="orderWrap">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

</template>	

<script>
import axios from "axios"


  export default {
	  name: 'Home',
	  data () {
	    return {
	        log_msg:"",
	     }
	   },
	   mounted(){
		  axios.get("https://midway.51tiangou.com/mine/index/init.node?_=1520949641").then((res)=>{
               console.log(res)
               console.log(res.data.data[0].data.title)
               this.log_msg =res.data.data[0].data.title;
              

		  })
	  },
	  
  }
</script>
<style src="../../static/css/myshoping.css">
	
</style>