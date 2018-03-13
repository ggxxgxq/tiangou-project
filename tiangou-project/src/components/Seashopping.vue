<template>
	<div class="aaa">
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
		<div class="slidepicture" v-for="item in slide">
			<div class="slide">
		
				<div class="li1"><img :src="item.img1"></div>
				<div class="li2"><img :src="item.img2"></div>
				<div class="li2"><img :src="item.img3"></div>
				<div class="li2"><img :src="item.img4"></div>
				<div class="li2"><img :src="item.img5"></div>
			    <div class="li2"><img :src="item.img6"	></div>
			    <div class="li2"><img :src="item.img7"></div>
			</div>
			<div class="picture">
				<img :src="item.img8">
			</div>
		</div>
		<div class="listdiv">
			<h1>单品推荐</h1>
			<span>single item Recommendation</span>
			
			<div class="list" v-for="item in list2">
			    <a href="/detail" > 
					<div class="listL"><img :src="item.data.imageUrl"></div>
					<div class="listR">
						<div class="listR1">{{item.data.title}}</div>
						<div class="listR2">{{item.data.promotion}}</div>
						<div class="listR3"><img width="12" height="12" :src="item.data.countryImageUrl"><span>{{item.data.countryName}}</span></div>
						<p>￥{{item.data.price}}<span>￥{{item.data.originalPrice}}</span></p>
						<h2>{{item.data.brandName}}</h2>
					</div>
				  </a> 
			</div>
			<div class="list" v-for="item in list3">
			    <a href="#/detail"> 
					<div class="listL"><img :src="item.data.imageUrl"></div>
					<div class="listR">
						<div class="listR1">{{item.data.title}}</div>
						<div class="listR2">{{item.data.promotion}}</div>
						<div class="listR3"><img width="12" height="12" :src="item.data.countryImageUrl"><span>{{item.data.countryName}}</span></div>
						<p>￥{{item.data.price}}<span>￥{{item.data.originalPrice}}</span></p>
						<h2>{{item.data.brandName}}</h2>
					</div>
				  </a> 
			</div> 
		</div>
	</div>
</template>

<script>
import axios from "axios";

	export default {
		name: 'Seashopping',
		data(){
		  return{
		    list:[],
		    list2:[],
		    list3:[],
		    slide:[{img1:"../../static/img/slide1.jpg",
				    img2:"../../static/img/slide2.jpg",
				    img3:"../../static/img/slide3.jpg",
				    img4:"../../static/img/slide4.jpg",
				    img5:"../../static/img/slide5.jpg",
				    img6:"../../static/img/slide6.jpg",
				    img7:"../../static/img/slide7.jpg",
				    img8:"../../static/img/picture.jpg"
				     },
                     {img1:"../../static/img/ss1.jpg",
				    img2:"../../static/img/ss2.jpg",
				    img3:"../../static/img/ss3.jpg",
				    img4:"../../static/img/ss4.jpg",
				    img5:"../../static/img/ss5.jpg",
				    img6:"../../static/img/ss6.jpg",
				    img7:"../../static/img/ss7.jpg",
				    img8:"../../static/img/ss8.jpg"
				     },
				     {img1:"../../static/img/sl1.jpg",
				    img2:"../../static/img/sl2.jpg",
				    img3:"../../static/img/sl3.jpg",
				    img4:"../../static/img/sl4.jpg",
				    img5:"../../static/img/sl5.jpg",
				    img6:"../../static/img/sl6.jpg",
				    img7:"../../static/img/sl7.jpg",
				    img8:"../../static/img/sl8.jpg"
				     },
				      {img1:"../../static/img/sd1.jpg",
				    img2:"../../static/img/sd2.jpg",
				    img3:"../../static/img/sd3.jpg",
				    img4:"../../static/img/sd4.jpg",
				    img5:"../../static/img/sd5.jpg",
				    img6:"../../static/img/sd6.jpg",
				    img7:"../../static/img/sd7.jpg",
				    img8:"../../static/img/sd8.jpg"
				     }
				    ]
		  }
		},
		mounted(){
           axios.get("https://midway.51tiangou.com/overseas/main/tab.node?cityId=2554&selected=true&pid=12&cid=-1&index=1&_=1520829037735")
		  .then((res)=>{
		    this.list=res.data.data[0].data.items;
		  })
		  axios.get("https://midway.51tiangou.com/overseas/main/tab.node?cityId=2554&selected=true&pid=12&cid=-1&index=1&_=1520905922945&tabIndex=0&childIndex=0&currentView=2")
		  .then((res)=>{
		  	console.log(res.data.data);
		  	console.log((res.data.data).slice(0,10));
		  	console.log((res.data.data).slice(10)[0].data);
		    this.list2=(res.data.data).slice(0,10);
	           axios.get((res.data.data).slice(10)[0].data)
			  .then((res)=>{
			    console.log(res.data.data);
			    this.list3=(res.data.data).slice(0,10);
			  })
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
    .aaa{
     margin-bottom:.49rem;
    }
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
    	padding-top: .09rem;
    }
    .listdiv h1{
    	font-size: .15rem;
    	padding-left: .09rem;
    	line-height: .25rem;
    	color:#222;
    }
    .listdiv span{
    	font-size: .13rem;
    	line-height: .2rem;
    	padding-left: .09rem;
    	color:#999;
    }
    .listdiv .list{
    	width: 100%;
    	border-bottom:1px solid #ebebeb; 
    }
    .listdiv .list a{
    	align-items: center;
    	display: flex;
        padding: .1rem .1rem ;
    }
    .listdiv .listL{
    	width: 1.42rem;
    	height: 1.42rem;
    	border:1px solid #ebebeb;
    }
    .listdiv .listL img{
        width: 100%;
        height: 100%;
    }
    .listdiv .listR{
    	width: 2.13rem;
    	padding-left:.1rem; 
    	text-align: left;
    }
    .listR .listR1{
    	font-size: .13rem;
    	color:#222;
    }
    .listR .listR2{
    	font-size: .12rem;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	/*white-space: initial;*/
    	-webkit-line-clamp: 3;
    	display: -webkit-box;
    	-webkit-box-orient: vertical;
    	height: .51rem;
    	color:#999;
    }
    .listR .listR3{
    	
    	font-size: .10rem;
    	color:#666;
    }
    .listR .listR3 img{
    	vertical-align: middle;
    }
    .listR .listR3 span{
    	vertical-align: middle;
    }
    .listR p{
    	color:#ff4c48;
    	font-size: .14rem;
    }
    .listR span{
    	color:#666;
    	font-size: .12rem;
    }
    .listR h2{
    	color:#ff9800;
    	font-size: .10rem;
    }
</style>