<template>
	<div class="article">
		<header>
			<div class="headerone"> <a href="/seashopping"> < </a> </div>
			<div class="headertwo">
				<div class="hone active">商品</div>
				<div class="htwo">详情</div>
			</div>
			<div class="headerthree"><i class="iconfont icon-gouwuche1"></i>
			<span>...</span></div>
		</header>
		
        <div class="menu">
           <div class="swiper-container">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" >
					  <img :src="list4[0].data.imageUrl" />            
                   </div>
			       <div class="swiper-slide" >
					  <img :src="list4[0].data.imageUrl" />            
                   </div>
                   <div class="swiper-slide" >
					  <img :src="list4[0].data.imageUrl" />            
                   </div>
			    </div>
			    <div class="swiper-pagination"></div>
           </div>
		</div>
         <div class="det">
         	 <div class="detone"><img :src="list4[1].data.countryImageUrl" width="15" height="15"><span>{{list4[1].data.storeName}}</span></div>
         	 <span class="dettwo"><img width="64" height="16" src="https://image1.51tiangou.com/tgou2/img2/product/inter_store_tag.png">
         	{{list4[3].data.title}}</span>
         	 <div class="detthree">{{list4[3].data.promotion}}</div>
         	 <div class="detfour">
         	     <span class="detfo1 left">￥{{list4[3].data.price}}</span>
         	     <span class="detfo2 left">￥{{list4[3].data.originalPrice}}</span>
         	     <span class="detfo3 left">6.4折</span>
         	     <span class="detfo4 right">{{list4[3].data.soldStr}}</span>
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
			<p>面膜节礼券100减10，面膜节礼券3元</p>
			<span class="smallright"><i class="iconfont icon-jiantou1"></i></span>
		</div>
		<div class="activity">
			<div class="activity1">
			   <span class="spanon">活动</span>
			   <span class="low">{{list4[7].data.items[0].title}}</span>
			</div>
			<div class="activity1">
				<span class="spanon">活动</span>
			   <span class="low">{{list4[7].data.items[1].title}}</span>
			</div>
		</div>	
		<div class="mock mockb">
			<span>{{list4[8].data.items[0]}} . {{list4[8].data.items[1]}} . {{list4[8].data.items[2]}} . {{list4[8].data.items[3]}}</span>
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
		<div class="likeWrap">
			<p class="line"></p>
			<h1>猜你喜欢</h1>
			<div class="likeshop">
                <div class="swiper-container">
				    <div class="swiper-wrapper" >
				        <div class="swiper-slide" >
				            <div class="likelist">				
							    <a href=""  v-for="item in list">
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
							    <a href=""  v-for="item in list1">
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
							    <a href=""  v-for="item in list2">
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
							    <a href=""  v-for="item in list3">
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
		<div class="footer">
			<div class="zh left"><img width="28" height="35" src="../../static/img/z.png"></div>
			<div class="nowbuy right">立即购买</div>
			<div class="gs right">加入购物车</div>
		</div>
	</div>
</template>

<script>
// http://localhost:8080/detail?12679290
/*https://midway.51tiangou.com/product/listing/init.node?id=11076476*/ 
import axios from "axios";
	export default {
		name: 'Detail',
		data(){
		  return{
		    list:[],
		    list1:[],
		    list2:[],
		    list3:[],
		    list4:[]
		  }
		},
		mounted(){
           axios.get("https://midway.51tiangou.com/product/listing/init.node?id=12679290&_=1521008336419").then((res)=>{
             this.list=(res.data.data[14].data.items).slice(0,6);
             this.list1=(res.data.data[14].data.items).slice(6,12);
             this.list2 =(res.data.data[14].data.items).slice(12,18);
              this.list3 =(res.data.data[14].data.items).slice(18);
           })
           var str=location.href;
           var url="https://midway.51tiangou.com/product/listing/init.node?id="+str.slice(str.lastIndexOf("?")+1);
           console.log(url);
           axios.get(url).then((res)=>{
               console.log(res.data.data);
               this.list4=res.data.data;
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

<style  src="../../static/css/detail.css">
    
</style>