<template>
	<div>
		<header>
			<div class="div1"><i class="iconfont icon-iconset0256"></i></div>
			<div class="div2"><i class="iconfont icon-sousuo1"></i><input type="text" placeholder="爱乐维叶酸" /></div>
			<div class="div3"><i class="iconfont  icon-gouwuche"></i></div>
		</header>
		<nav>
		   <ul>
		   	<li>面膜</li>
			<li class="on">精选</li>
			<li>活动</li>
			<li>美妆</li>
			<li>居家</li>
			<li>保健</li>
			<li>母婴</li>
			<li>美食</li>
		   </ul>
		</nav>
		<div class="menu">
           <div class="swiper-container">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in list">
			      <ul>
					  <li >
					       <img :src="item.imageUrl" />              
					  </li>  
                  </ul>
                   </div>
			 
			    </div>
			    <div class="swiper-pagination"></div>
           </div>
		</div>
		<div class="go">
			<img src="https://img1.tg-img.com/seller/201803/07/F841A3B7-BE3D-42A6-9BC7-99B574382CDF.jpg!y">
		</div>
		<div class="middle">
			<img src="https://img1.tg-img.com/seller/201803/09/21199526-D48C-4016-A78B-8B9BA5498AB3.jpg!y">
		</div>
		<div class="slide">
	
			<div class="li1"><img src="https://img1.tg-img.com/seller/201801/21/1F994B91-0794-4A23-8E22-65E800180129.jpg!y"></div>
			<div class="li2"><img src="https://img1.tg-img.com/seller/201801/21/545DD0B3-AD62-492B-9DE7-12FAEC24F4E4.jpg!y"></div>
			<div class="li2"><img src="https://img1.tg-img.com/seller/201801/21/A3943880-01A6-45CE-B060-26302308B728.jpg!y"></div>
			<div class="li2"><img src="https://img1.tg-img.com/seller/201712/25/BE56E9D1-FABC-4D71-B29C-BBF057AA939C.jpg!y"></div>
			<div class="li2"><img src="https://img1.tg-img.com/seller/201712/25/8EE75050-1B98-4368-B61F-32C691A77E77.jpg!y"></div>
		    <div class="li2"><img src="https://img1.tg-img.com/seller/201712/25/9B730434-717F-4723-89C8-19B693233DF4.jpg!y"	></div>
		    <div class="li2"><img src="https://img1.tg-img.com/seller/201712/25/2D2350AA-695E-4936-AC1F-5EF81B8D89F9.jpeg!y"></div>
		</div>
		<div class="picture">
			<img src="https://img1.tg-img.com/seller/201803/10/BA3689B7-9FF3-40DD-8F1C-3240FFFAE79D.jpg!y">
		</div>
		<div class="listdiv">
			<h1>单品推荐</h1>
			<span>single item Recommendation</span>
		</div>
	</div>
</template>

<script>
import axios from "axios";

	export default {
		name: 'Seashopping',
		data(){
		  return{
		    list:[]
		  }
		},
		mounted(){
           axios.get("https://midway.51tiangou.com/overseas/main/tab.node?cityId=2554&selected=true&pid=12&cid=-1&index=1&_=1520829037735")
		  .then((res)=>{
		  	console.log(res);
		    this.list=res.data.data[0].data.items;
		  })
		},
		updated(){
		   var swiper = new Swiper('.swiper-container', {
		   	  autoplay:true,
		      pagination: {
		        el: '.swiper-pagination',
		      },
		    });
		}
	}
</script>
<style scoped>
	header{
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    font-size: .13rem;
	display: flex;
	justify-content: space-between; 
	}
	
	header div i,div input{
		outline: 0;
		display: block;
	}
	header .iconfont{
       font-size: .25rem;
	}
	.div1 .iconfont{
		margin-left: .15rem;
	}
	.div3 .iconfont{
		margin-right: .15rem;
	}
	.div2{
		 background: #F4F4F4;
		display: flex;
		align-items: center;
        flex:1;
        margin: .08rem .15rem;
	}
	.div2 input{
       height: .26rem;
       width: 100%;
       border:0;
       background: #F4F4F4;
	}
	nav{
		height: .40rem;
		font-size: .14rem;
		
	}
	nav ul{
		height: .40rem;
		display: flex;
	    
	}
	nav ul li{
		flex:1;
		line-height: .4rem;
		text-align: center;
	}
    nav ul li.on{
    	color:#FF4C48;
    	border-bottom: 2px solid #ff4c48
    }
    .menu{
    	height: 1.83rem;
    	background:#ccc;
    }
    .menu ul{
        width: 100%;
    	height: 100%;
    }
    .menu ul li{
    	height: 100%;
    	overflow: hidden;
    }
    .menu ul img{
       width: 100%;
       height: auto;
    }
    .go{
    	height: 1.2rem;
    	padding: .1rem 0 .1rem 0;
    }
    .go img{
    	width: 100%;
    }
    .middle{
    	height: 1.7rem;
    }
    .middle img{
    	width: 100%;
    }
    .slide{
    	width: 100%;
    	height:1.52rem;
    	padding: .06rem 0;
    	overflow-y: hidden;
    	overflow-x: scroll;
    	white-space: nowrap;
    }
   
    .slide .li1{
    	display: inline-block;
    	width: 1rem;
    	height: 1.4rem;
        margin: 0 .06rem;
    }
    .slide .li2{
    	display: inline-block;
    	width: 1rem;
    	height: 1.4rem;
        margin-right: .06rem;
    }
    .slide .li1 img{
    	width: 100%;
    }
    .slide .li2 img{
    	width: 100%;
    }
    .picture{
    	height:1.6rem;
    }
    .picture img{
    	width: 100%;
    }
    .listdiv{
    	height: .98rem;
    	background: #ccc;
    	padding: .09rem 0 0 .09rem;
    }
    .listdiv h1{
    	font-size: .15rem;
    	color:#222;
    }
    .listdiv span{
    	font-size: .11rem;
    	color:#999;
    }
</style>