<template>
	<div>
		<h1>发现</h1>
		<Footer />
	</div>
</template>

<script>
import Footer from './Footer'
	export default {
		name: 'Find',
		components:{
		  	Footer 
		  },
		data(){
		  return{
		    
		  }
		}
	}
</script>

<style scoped>
   div{
	    width:100%;
	    height:100%;
	}
	h1 {
	    font-size: .14rem;
		background: green;
	}
</style>