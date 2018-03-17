<template>
	<div class="bodyWrap">
		<header>
			<div class="headerone"><i class="iconfont icon-jiantou2"></i> </div>
			<div class="headertwo">
				<div class="htwo">我的天狗</div>
			</div>
			<div class="headerthree"><a href="/shopcart"><i class="iconfont icon-gouwuche1"></i></a>
			<i class="iconfont icon-more"></i></div>
		</header>
		<div class="loginWrap">
			<div class="login">
				<div class="log_msg">{{log_msg}}</div>
                <a href="./login" >立即登录</a>
			</div>
		</div>
		<div class="orderWrap">
			<div>
				<i class="iconfont icon-daizhifu" id="pay"></i>
				<p class="change1" >待支付</p>
			</div>
			<div>
				<i class="iconfont icon-daifahuo" id="change"></i>
				<p class="change">待发货</p>
			</div>
			<div>
				<i class="iconfont icon-daishouhuo"></i>
				<p>待收货</p>
			</div>
			<div>
				<i class="iconfont icon-tuikuan"></i>
				<p>退款/售后</p>
			</div>
			<div>
				<i class="iconfont icon-dingdan"></i>
				<p>全部订单</p>
			</div>
		</div>
		<div class="speWrap">
			<div class="specil_my">
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-lipin01"></i></div>
						<p>我的礼品卡</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-iconfontzhizuobiaozhun13"></i></div>
						<p>我的订阅</p>
					</a>
				</div>
				
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-lipin01"></i></div>
						<p>我的发现</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-huiyuan"></i></div>
						<p>会员中心</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-youhuiquan1"></i></div>
						<p>优惠券包</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-tiaoxingma"></i></div>
						<p>我的结算码</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-tingchechang1"></i></div>
						<p>停车缴费</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-icon-"></i></div>
						<p>收藏间</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-wode1"></i></div>
						<p>关于天狗</p>
					</a>
				</div>
				<div class="s_lit">
					<a href="">
						<div><i class="iconfont icon-tesefuwu"></i></div>
						<p>缺码短号</p>
					</a>
				</div>
			</div>
		</div>
		<a class="serviceWrap">
			<div class="service">
				<div class="ser_msg">
					<i class="iconfont icon-kefu"></i><span>客服中心</span>
				</div>
				<i class="iconfont icon-jiantou1"></i>
			</div>
		</a>
		<div class="likeWrap">
			<p class="line"></p>
			<h1>猜你喜欢</h1>
			<div class="likeshop">
                <div class="swiper-container">
				    <div class="swiper-wrapper" >
				        <div class="swiper-slide" >
				            <div class="likelist">				
							    <a href=""  v-for="item in shoplist">
					              	<div class="Lshop" >
					              		<div class="Lshop-img"><img :src="item.imageUrl"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.title}}</p>
					              	   <p class="price">￥{{item.price}}</p>
					              	</div>
					              	</div>
			                    </a>
            				</div>   
				        </div>
				         <div class="swiper-slide" >
				            <div class="likelist">				
							    <a href=""  v-for="item in shoplist1">
					              	<div class="Lshop" >
					              		<div class="Lshop-img"><img :src="item.imageUrl"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.title}}</p>
					              	   <p class="price">￥{{item.price}}</p>
					              	</div>
					              	</div>
			                    </a>
            				</div>   
				        </div>
				         <div class="swiper-slide" >
				            <div class="likelist">				
							    <a href=""  v-for="item in shoplist2">
					              	<div class="Lshop" >
					              		<div class="Lshop-img"><img :src="item.imageUrl"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.title}}</p>
					              	   <p class="price">￥{{item.price}}</p>
					              	</div>
					              	</div>
			                    </a>
            				</div>   
				        </div>
				         <div class="swiper-slide" >
				            <div class="likelist">				
							    <a href=""  v-for="item in shoplist3">
					              	<div class="Lshop" >
					              		<div class="Lshop-img"><img :src="item.imageUrl"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.title}}</p>
					              	   <p class="price">￥{{item.price}}</p>
					              	</div>
					              	</div>
			                    </a>
            				</div>   
				        </div>

				    </div>
				    <div class="swiper-pagination">			    	
				   </div>	
				</div> 


				
			</div>
		</div>
		<Footer />
	</div>

</template>	

<script>
import axios from "axios"
import Footer from './Footer'

  export default {
	  name: 'Home',
	  components:{
	  	Footer 
	  },
	  data () {
	    return {
	        log_msg:"",
	        shoplist:[],
	        shoplist1:[],
	        shoplist2:[],
	        shoplist3:[],
	     }
	   },
	   mounted(){
		  axios.get("https://midway.51tiangou.com/mine/index/init.node?_=1520949641").then((res)=>{
               console.log(res)
               console.log((res.data.data[4].data.items).slice(0,6))
               this.log_msg =res.data.data[0].data.title;
               this.shoplist =(res.data.data[4].data.items).slice(0,6);
               this.shoplist1 =(res.data.data[4].data.items).slice(6,12);
               this.shoplist2 =(res.data.data[4].data.items).slice(12,18);
               this.shoplist3 =(res.data.data[4].data.items).slice(18);
              

		  })
	  },
	  updated(){
	  	   var swiper = new Swiper('.swiper-container', {
	  	   	  autoplay:true,
		      pagination: {
		        el: '.swiper-pagination',
		      }
		  
	     });
	  }
	  
  }
</script>
<style src="../../static/css/myshoping.css">
	
</style>