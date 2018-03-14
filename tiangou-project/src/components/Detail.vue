<template>
	<div>
		<header>
			<div class="headerone"> < </div>
			<div class="headertwo">
				<div class="hone active">商品</div>
				<div class="htwo">详情</div>
			</div>
			<div class="headerthree"><i class="iconfont icon-gouwuche"></i>
			<span>...</span></div>
		</header>
        <div class="menu">
           <div class="swiper-container">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" >
					  <img src="https://img1.tg-img.com/seller/201802/12/6A34116F-A389-4B4C-B751-855491FAE67F.jpg!y" />            
                   </div>
			       <div class="swiper-slide" >
					  <img src="https://img1.tg-img.com/seller/201802/12/DAD67F6D-8E29-4B4D-AF1A-C6DB8BF0C04E.jpg!y" />            
                   </div>
                   <div class="swiper-slide" >
					  <img src="https://img1.tg-img.com/seller/201802/12/FADFFABA-B15C-4AB5-96D7-F0E344479492.jpg!y" />            
                   </div>
			    </div>
			    <div class="swiper-pagination"></div>
           </div>
		</div>
         <div class="det">
         	 <div class="detone"><img src="https://img1.tg-img.com/tgou2/img2/product/ico-kr.png" width="15" height="15"><span>韩国 郑州保税仓发货</span></div>
         	 <span class="dettwo"><img width="64" height="16" src="https://image1.51tiangou.com/tgou2/img2/product/inter_store_tag.png">
         	 啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
         	 <div class="detthree">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦
         	 啦啦啦啦啦啦啦啦啦啦啦啦
         	 </div>
         	 <div class="detfour">
         	     <span class="detfo1 left">￥84</span>
         	     <span class="detfo2 left">￥132</span>
         	     <span class="detfo3 left">6.4折</span>
         	     <span class="detfo4 right">已售148</span>
         	 </div>
         	 <div class="pay">
         	 	<div>
         	 	  <i class="iconfont"></i>
         	 	  <span>移动支付</span>
         	 	</div>
                <div><i class="iconfont"></i></div>
         	 </div>
         </div>  
			
			
			
		
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		data(){
		  return{
		    
		  }
		},
		mounted(){
           var swiper = new Swiper('.swiper-container', {
		   
		      pagination: {
		        el: '.swiper-pagination',
		      },
		    });
		}
	}
</script>

<style scoped>
	header {
	    height: .44rem;
	    display: flex;
	    color:#222;
	    align-items: center;
	}
	.headerone{
       min-width: 20%;
       font-size: .35rem;
       padding-left:.1rem; 

	}
	.headerthree{
       min-width: 20%;
       position: relative;
	}
	.headerthree span{
		letter-spacing: .05rem;
		color:#222;
		position: absolute;
		width: .24rem;
		height: .25rem;
		line-height: .10rem;
		display: block;
		right:.12rem;
		bottom: 0;
		font-weight: 900;
		font-size: .18rem;
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
		width: .94rem;
		line-height: .44rem;
		text-align: center;
	}
	.menu{
		height: 3.75rem;
	}
	.menu img{
		width: 100%;
		vertical-align:middle;
	}
	.det{
		height: 1.58rem;
		padding: .1rem;
	}
	.detone{
		height: .22rem;
		padding-bottom: .08rem;
		font-size: .13rem;
		color:#666;
		display: flex;
		justify-content: flex-start;
	}
	.detone span{
		margin-left: .08rem;
	}
	.dettwo{
		display: block;
		height: .4rem;
		margin: .05rem 0;
		font-size: .14rem;
		color:#222;
	}
	.dettwo img{
		margin-top: .1rem;
		float:left;
	}
	.detthree{
		height: .36rem;
		color:#666;
		font-size: .13rem;
	}
	.detfour{
		height: .20rem;
		margin-top: .1rem;
		line-height: .2rem;
	}
	.detfo1{
	  display:block;
	  width: .35rem;
	  height: .2rem;
	  color:#ff4c48;
	  font-size: .15rem;
	}
	.detfo2{
	 display:block;
	  width: .30rem;
	  height: .12rem;
	  color:#999;
	  font-size: .12rem;
	}
	.detfo3{
	 display:block;
	  width: .38rem;
	  height: .18rem;
	 background-color: #fff;
     border: 1px solid #ff4c48;
     color: #ff4c48;
     border-radius: 3px;
     font-size: .1rem;
     vertical-align: middle;
     white-space: nowrap;
     margin-left:.15rem;
     line-height: .1rem;
     padding: .02rem .04rem;
	}
	.detfo4{
	 font-size: .11rem;
	 color:#999;
	}
	.pay{
		height: .35rem;
		padding: .13rem .13rem;
		display: flex;
		justify-content: space-between;
	}
	.pay span{
		
	}
</style>