<template>
	<div>
		<h1>逛商场</h1>
		<Footer />
	</div>
</template>

<script>
import Footer from './Footer'
	export default {
		name: "Goshopping",
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
	h1 {
	    font-size: .14rem;
		background: green;
	}
	div{
	    width:100%;
	    height:100%;
	}
</style>