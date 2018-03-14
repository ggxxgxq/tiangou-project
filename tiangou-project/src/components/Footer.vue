<template>
   <footer>
           <ul class="footerul">
              <li>
                 <router-link active-class="active"  to="/goshopping" class="iconfont icon-shangdian"></router-link>
                 <span>逛商场</span>
              </li>
              <li>
                 <router-link active-class="active" to="/find" class="iconfont icon-xiangji"></router-link>
                 <span>发现</span>
              </li>
              <li>
                 <router-link active-class="active" exact to="/" class="iconfont icon-gouwu"></router-link>
                 <span>购物</span>
              </li>
              <li>
                 <router-link active-class="active" to="/seashopping" class="iconfont icon-daohanghaiwaigou"></router-link>
                 <span>海外购</span>
              </li>
              <li>
                 <router-link active-class="active" to="/myshopping" class="iconfont icon-wode"></router-link>
                 <span>我的</span>
              </li>
           </ul>
     </footer>
</template> 
<script >
   export default{
       name:'Footer',
       data(){
         return{

         }
       }
   }
</script>
<style >
 footer{
   position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: .49rem;
    border-top: .01rem solid #ccc;
    font-size: .14rem;
    background: #fff;
}

.footerul{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
}
.footerul li{
  display: flex;
  flex-direction: column;
  justify-content: center;
 align-items: center;
}
.footerul .iconfont{
  font-size: .24rem;
  color:#666;
}
.footerul span{
  display: block;
  color:#666;
}
.footerul .active{
   color:#ff4c48;
}
</style>
    