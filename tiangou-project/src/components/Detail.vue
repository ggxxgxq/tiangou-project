<template>
	<div class="article">
		<header>
			<div class="headerone"> <a href="/seashopping"> < </a> </div>
			<div class="headertwo">
				<div class="hone active">商品</div>
				<div class="htwo">详情</div>
			</div>
			<div class="headerthree"><i class="iconfont icon-icon--"></i>
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
         	 
         </div>  
		 <div class="pay">
         	 	<div class="pay1">
         	 	  <i class="iconfont icon-duigouzhong"></i>
         	 	  <span>移动支付</span>
         	 	</div>
                <div class="pay2"><i class="iconfont  icon-jiantou1"></i></div>
         </div>	
		<div class="goodpay">
			<span class="small">券</span>
			<p>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
			<span class="smallright"><i class="iconfont icon-jiantou1"></i></span>
		</div>
		<div class="activity">
			<div class="activity1">
			   <span class="spanon">活动</span>
			   <span class="low">超低价囤货</span>
			</div>
			<div class="activity1">
				<span class="spanon">活动</span>
			   <span class="low">面膜告白日</span>
			</div>
		</div>	
		<div class="mock mockb">
			<span>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
			<span><i class="iconfont icon-jiantou1"></i></span>
		</div>
		<div class="mock mocko">
			<span class="save">选择  数量</span>
			<span><i class="iconfont icon-jiantou1"></i></span>
		</div>
		<div class="mock mockb">
			<span class="save">产品参数</span>
			<span><i class="iconfont icon-jiantou1"></i></span>
		</div>
		<div class="brand">
			<img  width="50" height="50" src="../../static/img/lv.jpg" class="left border">
			<p class="left">RYOE 吕</p>
			<span class="right">进入品牌</span>
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
    .article{
    	background: #eeeff4;
    	position: relative;
    	margin-bottom: .98rem;
    }
    .icon-jiantou1{
    	color:#999;
    }
	header {
		position: fixed;
		top: 0;
		left:0;
        width: 100%;
        z-index: 999;
	    height: .44rem;
	    display: flex;
	    color:#222;
	    align-items: center;
	    background: #fff;
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
		margin-top: .44rem;
		background: #fff;
		height: 3.75rem;
	}
	.menu img{
		width: 100%;
		height: 100%;
		vertical-align:middle;
        border-bottom: .01rem solid #ebebeb;
	}
	.det{
		height: 1.58rem;
		padding: .1rem;
		background: #fff;
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
		padding: .05rem .1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgb(248, 248, 248);
	}
	.pay .iconfont{
		color:#999;
	}
	.pay1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.pay1 i{
       font-size: .18rem;
       color:#ff4c48;
	}
	.pay1 span{
		color:#666;
		margin-left: .05rem;
	}
    .goodpay{
    	height: .45rem;
    	padding: .1rem .1rem;
    	display: flex;
    	margin-top: .13rem;
    	background: #fff;
    	justify-content: space-between;
    	align-items: center;
    	border-bottom: .01rem solid #ebebeb;
    }
    .goodpay .iconfont{
		color:#999;
	}
    .small{
        color: #fff;
        min-width: .34rem;
        background: -webkit-linear-gradient(left, #ff4c48, #ff4c48 29px,#fff 
        30px, #ff726f 30px, #ff726f);
        display: inline-block;
	    height: .14rem;
	    font-size: .10rem;
	    line-height: .12rem;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    padding-right: .02rem;
	    margin-right: .1rem;
    }
    .goodpay p{
    	color:#666;
    	font-size: .14rem;
    	overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: initial; 
        -webkit-line-clamp: 1;

    }
    .activity{
    	height: .54rem;
    	padding: .1rem;
    	background: #fff;
    	border-bottom: .01rem solid #ebebeb;

    }
    .activity1{
    	display: flex; 
    	justify-content: flex-start;
    	align-items: center;
    }
    .activity1 .spanon{
    	border: .01rem solid #ffa4a2;
    	display: inline-block;
	    height: .14rem;
	    min-width: .28rem;
	    background: #ffedec;
	    font-size: .10rem;
	    line-height: .12rem;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    padding-right: .02rem;
	    color: #ff4c48;
	    margin-right: .05rem;
    }
    .low{
    	font-size: .12rem;
    }
    .mock{
    	height: .44rem;
    	padding: .1rem .1rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	background: #fff;
    	
    }
    .mockb{
    	margin-bottom: .13rem;
    }
    .mocko{
    	border-bottom: .01rem solid #ebebeb;
    }
    .brand{
    	height: .72rem;
    	line-height: .52rem;
    	padding: .1rem;
    	background: #fff;
    	margin-bottom: .13rem;
    }
    .brand p{
    	font-size: .15rem;
    	color:#222;
    }
    .border{
    	border:.01rem solid #ebebeb;
    	margin-right: .1rem;
    }
    .brand span{
       font-size: .11rem;
       padding: .06rem .05rem;
       background-color: #fff;
       border: 1px solid #ff4c48;
       color: #ff4c48;
       border-radius: .03rem;
       display: inline-block;
       min-width: .20rem;
       line-height: 1;
	   vertical-align: middle;
	   white-space: nowrap;
	   text-align: center;
	   margin-top: .1rem;
    }
</style>