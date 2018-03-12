<template>
  <article>
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
			<!-- <mt-swipe :auto="4000" v-for="item in listSlider">
			  <mt-swipe-item>
			                     <a href=""><img :src="makeImg(item.imageUrl)"></a>
			  </mt-swipe-item>
			</mt-swipe> -->

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
		<div class="spe_title">
			<div class="clearfix">
				<a href="">
					<img :src="'https:'+listSpe" />
				</a>
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
      listSpe:""

    }
  },
  mounted(){
  	axios.get("https://midway.51tiangou.com/shopping/main/init.node?storeId=179&cityId=2554&_=1520824048430").then((res)=>{
  		console.log(res)
  		this. listSlider = res.data.data[7].data.items;
  		this. listNav = res.data.data[8].data.items;
  		this. listOne = res.data.data[9].data.items[0].imageUrl;
  		this. listSpe = res.data.data[11].data.items[0].imageUrl;
  		console.log(res.data.data[11].data.items[0].imageUrl)

  	})
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

 var swiper = new Swiper('.swiper-container', {
	      pagination: {
	        el: '.swiper-pagination',
	      },
     });
</script>
<style >


</style>
