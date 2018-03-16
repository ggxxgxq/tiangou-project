<template>
	<div class="bodyWrap">
		<header>
			<div class="headerone"><i class="iconfont icon-jiantou2"></i> </div>
			<div class="headertwo">
				<div class="htwo">购物车</div>
			</div>
			<div class="headerthree"><a href="/shopcart"><i class="iconfont icon-gouwuche"></i></a>
			<i class="iconfont icon-more"></i></div>
		</header>
		
	</div>
</template>

<script>
	export default {
		name: 'Shopcart',
		components:{
		  	 
		  },
		data(){
		  return{
		    
		  }
		}
	}
</script>

<style scoped>
   .bodyWrap{
	background: #eeeff4;
	color: #666;
	font-size: .14rem;
}

header {
	height: .44rem;
	display: flex;
	color:#222;
	align-items: center;
	font-size: .14rem;
	background: #fff;
}
.headerone{
   min-width: 20%; 
   padding-left:.1rem; 

}
.icon-jiantou2{
	 font-size: .35rem;
}
.headerthree{
   min-width: 20%;
   position: relative;
   padding-right: .133rem;
}
.headerthree span{
	letter-spacing: .05rem;
	color:#222;
	font-size: .2rem;
	line-height: .15rem;
	position: absolute;
	width: .24rem;
	height: .25rem;
	display: block;
	right:.17rem;
	bottom: 0;
	font-weight: 900;
}
.icon-gouwuche{
	color:#666;
}
.headertwo{
   font-size: .15rem;
   display: flex;
   flex:1;
   color:#666;
}
.headertwo .hone{
	line-height: .44rem;
	width: .94rem;
	text-align: center;
	position: relative;
	color:#222;
}
.hone::before{
    position: absolute;
    display: block;
    content: '';
    width: .3rem;
    height: .02rem;
    left: 50%;
    bottom: 0;
   margin-left: -.15rem;
    background-color: #222;
}
.headertwo .htwo{
	width: 100%;
	font-size: .18rem;
	line-height: .44rem;
	text-align: center;
}
</style>