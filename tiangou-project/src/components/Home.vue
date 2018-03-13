<template>
  <article class="bodyWrap">
  	<div id="topWrap">
		<div class="top">
			<i class="iconfont icon-iconset0256 text-white"></i>
			<form>
			    <i class="iconfont icon-sousuo1"></i>
				<input type="search" id="indexSear" name="indexSear" placeholder="天喔多味酸奶￥5元袋">
			</form>
			<a href="" class="text-white"><i class="iconfont icon-gouwuche"></i></a>
			<a href="" ><i class="iconfont icon-icon--"></i></a>
		</div>
		<div class="slider">

            <!-- <div class="slider-Wrap" >
            			  <mt-swipe-item v-for="item in listSlider">
                     			<a href=""><img :src="makeImg(item.imageUrl)"></a>
            			  </mt-swipe-item>
            </div> -->
            <!-- <div class="sliderInner">
                  			<mt-swipe :auto="4000" v-for="item in listSlider" :key="item">
                  			  <mt-swipe-item>
                  			      <a href=""><img :src="makeImg(item.imageUrl)"></a>
                  			  </mt-swipe-item>
                  			</mt-swipe>
             </div> -->

			<div class="swiper-container">
			    <div class="swiper-wrapper" >
			        <div class="swiper-slide" v-for="item in listSlider" >
			            <a href=""><img :src="makeImg(item.imageUrl)"></a>
			        </div>
			    </div>
			    <div class="swiper-pagination">			    	
			    </div>
			
			</div>
		</div>
		<div class="nav_item">
			<div class="nav_list">
				<a href="" v-for="item in listNav">
					<div>
						<img :src="makeNavImg(item.imageUrl)">
					</div>
					<p>{{item.title}}</p>
				</a>
			</div>
		</div>
  </div>
		<div class="shop_banner">
			<div>
				<a href="">
					<img :src="'https:'+listOne" />
				</a>
			</div>
		</div>
		<div class="spe_title title">
			<div >
				<a href="">
					<img :src="'https:'+listSpe" />
				</a>
			</div>
		</div>
		<div class="limitwrap">
		    <section>
				<div class="limit_buy">
					<div class="limit_content">
						<a href="">
							<div class="limit_left">
								<span class="font">限时抢购</span>
								<span class="countDown"> 
	                                <span>01</span>&nbsp;:&nbsp;
	                                <span>02</span>&nbsp;:&nbsp;
	                                <span>03</span>
								</span>
							</div>
							<div class="more">更多>></div>
						</a>
					</div>
				</div>
				<aside>
					<div class="limit_shop">
						<a href="" v-for="item in listLimit">
							<div class="shop_img"><img :src="item.imageUrl"></div>
							<p class="shop_price">
                                <span class="orign_pri">￥{{item.price}}</span> 
                                <span class="del_pri">￥{{item.originalPrice}}</span> 
							</p>
						</a>
					</div>
				</aside>
			</section>
		</div>
		<div class="groop_wrap">
			<div class="groop_out">
				<div class="groop_book">
					<div class="groop_inner">
						<div class="brand_sale" v-for="item in listGroop">
							<div class="brand">
							   <main>
								<a href="">
									<img :src="item.imageUrl">
								</a>
								</main>
							</div>
						</div>						
					</div>
				</div>
			</div>
		</div>
		<div class="qua title">
			<div >
				<a href="">
					<img :src="'https:'+listQua" />
				</a>
			</div>
		</div>
		<div class="qShopWrap">
			<div class="qShop_out">
				<div class="qshop">
					<div class="qshop_left">
						<a href=""><img :src="listQshop[0].imageUrl"></a>
					</div>
					<div class="qshop_right">
						<a href=""><img :src="listQshop[1].imageUrl"></a>
						<a href="">
				      		<span>
								<a href=""><img :src="listQshop[2].imageUrl"></a>
								<a href=""><img :src="listQshop[3].imageUrl"></a>
				      			
				      		</span>
				      	</a>
					</div>
				</div>
			</div>
		</div>
		<div class="act title">
			<div >
				<a href="">
					<img :src="'https:'+listAct" />
				</a>
			</div>
		</div>
		<div class="act_wrap">
			<div class="actBaby_wrap wrap_common">
				<div class="act_baby p_common" > 
					<div class="babyClass img_common">
						<a href=""><img :src="'https:'+listbaby"></a>
					</div>
					<div class="act_content con_common">
						<div class="act_shop shop_common" v-for="item in listContent1">
							<a href=""><img :src="item.imageUrl"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="dcountWrap wrap_common">
				<div class="discount p_common">
					<div class="discount img_common">
						<a href=""><img :src="'https:'+listdis"></a>
					</div>
					<div class="dis_content con_common">
						<div class="dis_shop shop_common" v-for="item in listContent2">
							<a href=""><img :src="item.imageUrl"></a>
						</div>
					</div>
				</div>
			</div>

			<div class="actBaby_wrap wrap_common">
				<div class="act_baby p_common" > 
					<div class="babyClass img_common">
						<a href=""><img :src="'https:'+listeat"></a>
					</div>
					<div class="act_content con_common">
						<div class="act_shop shop_common" v-for="item in listContent3">
							<a href=""><img :src="item.imageUrl"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="dcountWrap wrap_common">
				<div class="discount p_common">
					<div class="discount img_common">
						<a href=""><img :src="'https:'+listworker"></a>
					</div>
					<div class="dis_content con_common">
						<div class="dis_shop shop_common" v-for="item in listContent4">
							<a href=""><img :src="item.imageUrl"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
        <div class="info title">
			<div >
				<a href="">
					<img :src="'https:'+listInfo" />
				</a>
			</div>
		</div>
		<div class="InfoWrap">
			<div class="Infoout">
				<div class="Infolist">
					<div class="slist" v-for="item in listContent5" v-lazy="item">
						<section>
							<a href="">
								<div class="shop_msg">
									<img :src="item.data.imageUrl">
								</div>
								<div class="shop_detail">
									<span>海外购</span>
									<span>{{item.data.title}}</span>
								</div>
								<span class="s-price">￥{{item.data.price}}</span>
							</a>
						</section>
					</div>
					<div class="slist" v-for="item in listContent5List" v-lazy="item">
						<section>
							<a href="">
								<div class="shop_msg">
									<img :src="item.data.imageUrl">
								</div>
								<div class="shop_detail">
									<span>海外购</span>
									<span>{{item.data.title}}</span>
								</div>
								<span class="s-price">￥{{item.data.price}}</span>
							</a>
						</section>
					</div>
				</div>
			</div>
		</div>
  </article>
</template>

<script>
import axios from "axios"



export default {
  name: 'Home',
  data () {
    return {
      listSlider:[],
      listNav:[],
      listOne:"",
      listSpe:"",
      listLimit:[],
      listGroop:[],
      listQua:[],
      listQshop:[],
      listAct:[],
      listbaby:[],
      listContent1:[],
      listdis:[],
      listContent2:[],
      listeat:[],
      listContent3:[],
      listworker:[],
      listContent4:[],
      listInfo:[],
      listContent5:[],
      listContent5List:[]
     
    }
  },
  mounted(){
  	axios.get("https://midway.51tiangou.com/shopping/main/init.node?storeId=179&cityId=2554&_=1520824048430").then((res)=>{
  		console.log(res)
  		this. listSlider = res.data.data[6].data.items;
  		this. listNav = res.data.data[7].data.items;
  		this. listOne = res.data.data[8].data.items[0].imageUrl;
  		this. listSpe = res.data.data[10].data.items[0].imageUrl;
  		this. listLimit = res.data.data[11].data.items;
  		this. listGroop = res.data.data[13].data.items;
  		this. listQua = res.data.data[15].data.items[0].imageUrl;
  		this. listQshop = res.data.data[16].data.items;
  		this.listAct = res.data.data[18].data.items[0].imageUrl;
  		this.listbaby = res.data.data[19].data.items[0].imageUrl;
  		this.listContent1 = (res.data.data[19].data.items).slice(1);
  	    this.listdis = res.data.data[20].data.items[0].imageUrl;
  		this.listContent2 = (res.data.data[20].data.items).slice(1);
  		this.listeat = res.data.data[21].data.imageUrl;
  		this.listContent3 = res.data.data[21].data.items;
  	    this.listworker = res.data.data[23].data.imageUrl;
  		this.listContent4 = res.data.data[23].data.items;
  		this.listInfo = res.data.data[25].data.items[0].imageUrl;
      axios.get(res.data.data[26].data).then((res)=>{
      	  console.log(res.data.data[5])
          this.listContent5 = (res.data.data).slice(0,5);
          
          axios.get(res.data.data[5].data).then((res)=>{
	      	  console.log(res)
	          this.listContent5List = (res.data.data).slice(0,5);

	      })
      })
  		
  		

  	})
  },
  updated(){
  	   var swiper = new Swiper('.swiper-container', {
  	   	  autoplay:true,
	      pagination: {
	        el: '.swiper-pagination',
	      }
	  
     });
  },
  methods:{
  	makeImg(imgPath){
        return`https:${imgPath}`  
  	},
  	makeNavImg(imgPath){
        return`https:${imgPath}`  
  	},

  }
}
</script>
<style >


</style>
