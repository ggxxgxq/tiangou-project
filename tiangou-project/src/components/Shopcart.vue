<template>
	<div class="bodyWrap">
		<header>
			<div class="headerone">
				<a href="/seashopping">
				<i class="iconfont icon-jiantou2"></i>
				</a>
			</div>
			<div class="headertwo">
				<div class="htwo">购物车</div>
			</div>
			<div class="headerthree"><a href="/shopcart"><i class="iconfont icon-gouwuche1"></i></a>
			<i class="iconfont icon-more"></i></div>
		</header>
		<div class="store">
			<div class="storeleft">
				<i class="iconfont icon-duigou"></i>
				<span>郑州保税仓1号仓</span>
			</div>
			<div class="storeright">
				<span class="get">领券</span>
				<i class="iconfont icon-shanchu"></i>
				<span class="del">删除</span>
			</div>
		</div>
		<div class="contentwrap">
			<div class="content">
				<i class="iconfont icon-duigou"></i>
				<div class="contentright">
					<img src="../../static/img/pop.jpg" width="75" height="75">
					<div class="main">
						<div class="maintop">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
						<div class="mainbottom">
							<div class="mbl">
							   <span>￥39</span>
							   <span>￥132</span>
							</div>
                            <div class="mbr">
                            	<div class="down" @click="down()">-</div>
                            	<input type="number" class="txt" value="1"/>
                            	<div class="addon" @click="add()">+</div>
                            </div>
						</div>
					</div>
				</div>
			</div>
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
					              		<div class="Lshop-img"><img :src="'https://image1.51tiangou.com/'+item.imageUrl+'!s'"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.productName}}</p>
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
					              		<div class="Lshop-img"><img :src="'https://image1.51tiangou.com/'+item.imageUrl+'!s'"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.productName}}</p>
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
					              		<div class="Lshop-img"><img :src="'https://image1.51tiangou.com/'+item.imageUrl+'!s'"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.productName}}</p>
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
					              		<div class="Lshop-img"><img :src="'https://image1.51tiangou.com/'+item.imageUrl+'!s'"></div>
					              	<div class="font">
					              	   <p class="detil">{{item.productName}}</p>
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
	</div>
</template>
<!-- https://image1.51tiangou.com/seller/201711/23/11DE2DC4-F564-4D2E-BC4F-817036520FA2.jpg!s-->
<!-- seller/201711/23/11DE2DC4-F564-4D2E-BC4F-817036520FA2.jpg -->
<script>
import axios from "axios";
	export default {
		name: 'Shopcart',
		components:{
		  	 
		  },
		data(){
		  return{
		    list:[],
		    list1:[],
		    list2:[],
		    list3:[]
		  }
		},
		methods:{
			add(){
            var count=$(".txt").val();
            count++;
            $(".txt").val(count);
           },
           down(){
            var count=$(".txt").val();
            if(count==1){
            	return;
            }
            count--;
            $(".txt").val(count);
           }
		},
		mounted(){
            axios.get("https://item.51tiangou.com/mallProduct/recommend/byMember").then((res)=>{
                console.log(res.data.data);
               this.list =(res.data.data).slice(0,6);
               this.list1 =(res.data.data).slice(6,12);
               this.list2 =(res.data.data).slice(12,18);
               this.list3 =(res.data.data).slice(18);
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
   .bodyWrap{
	background: #eeeff4;
	color: #666;
	font-size: .14rem;
}
.icon-shanchu{
	font-size: .18rem;
}
header {
	height: .44rem;
	display: flex;
	color:#222;
	align-items: center;
	font-size: .14rem;
	background: #fff;
	margin-bottom: .13rem;
}
.headerone{
   min-width: 20%; 
   padding-left:.1rem; 

}
.icon-duigou{
	font-size: .17rem;
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
.store{
	padding: .1rem;
	display: flex;
	justify-content: space-between;
	background: #f8f8f8;
	color:#222;
}
.icon-duigou{
	color: #16cc90;
}
.storeleft span{
	margin-left: .1rem;
	font-size: .14rem;

}
.storeright{
	display: flex;
	align-items: center;
}
.storeright .get{
	border-right: .01rem solid #ebebeb;
	border-color: #ccc;
	font-size: .12rem;
	padding-right: .1rem;
}
.storeright .iconfont{
	color:#222;
}
.storeright .del{
	margin-left: .03rem;
}
.storeright .iconfont{
	margin-left: .13rem;
	margin-top: .03rem;
}
.contentwrap{
	background: #fff;
	font-size: .14rem;
	color:#222;
}
.content{
	padding: .1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: .01rem solid #ebebeb;
}
.contentright{
	margin-left: .13rem;
	display: flex;
	justify-content: space-between;
}
.contentright .main{
	margin-left: .1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.mainbottom{
	display: flex;
	justify-content: space-between;
}
.mbl{
	display: flex;
	align-items: center;
}
.mbl span:first-child{
	font-size: .16rem;
	color:#222;
}
.mbl span{
	font-size: .11rem;
	color:#999;
}
.mbr{
	display: flex;
	width: 1.1rem;
	align-items: center;
}
.mbr input{

    width: calc(100% - 58px);
    border-color: #999;
    height: .30rem;
    padding: .04rem .12rem;
    font-size: .16rem;
    line-height: .26rem;
    background-color: #fff;
    border: .01rem solid #ccc;
    text-align: center;
}
.down{
	    height: .3rem;
    	padding: .01rem 0;
    	border-color: #999;
    	min-width: .30rem;
    	opacity: .55;
    	text-align: center;
    	border: .01rem solid #ccc!important;
    	color: #ccc!important;
    	background-color: #fff!important;
    	margin-left: -.01rem;
    }
  .addon{
    	padding: .01rem 0;
    	border: .01rem solid #ccc;
    	border-color: #999;
    	min-width: .30rem;
    	text-align: center;
	    white-space: nowrap;
	    line-height: .26rem;
	    color: #666;
	    font-size: .16rem;
	    background-color: #fff!important;
    }
    .likeWrap{
	overflow: hidden;
	margin-top: .133rem;
	background: #fff;
	margin-bottom: .33rem;
}
.likeWrap .line{
	margin-top: .2rem;
	border-bottom: 1px solid #ebebeb;
	margin-right:.33rem ;
	margin-left:.33rem ;
}
.likeWrap h1{
	width: 1rem;
	font-size: .14rem;
	margin: -.25rem auto .2rem;
	text-align: center;
	color: #222;
	padding: .133rem 0;
	background: #fff;
}
.likelist{
	padding-bottom: .33rem;
	overflow: hidden;
}
.likelist a{
	width: 33.33%;
	display: block;
	float: left;
}
.Lshop{
	/* width: 33.33%; */
	background: #fff;
}
.detil{
	-webkit-line-clamp:2;
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient :vertical;
	text-overflow: ellipsis;
} 
.Lshop-img{
	width: .1.15rem;
	height: 1.15rem;
}
.Lshop-img img{
	max-width: 100%;
	max-height: 100%;
}
.font{
	padding: .065rem;
	-webkit-line-clamp:2;
	display: -webkit-box;
	overflow: hidden;
	-webkit-box-orient :vertical;
	text-overflow: ellipsis;
}
.price{
	font-size: .17rem;
	color: #ff4c48;
}

</style>