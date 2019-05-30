<template>
    <div class="login" >
    <img src="~static/images/background.jpg" class="back_img" alt="">
    
  </div>
</template>
<script>
  import Regist from './../axios/regist.js'
  export default {
    name: 'Login',
    components:{
    },
    data (){
    
    },
    created(){
     
    },
    mounted(){
    
    },
    methods: {
   
    }
  }

</script>
<style  lang="stylus" scoped="scoped">
  .login
   display flex
   align-items: center;
   justify-content: center;
   .back_img
    width 100%
    height 100%
   .contanier
    position absolute
    top 0px
    left 0px
    right 0px
    bottom 0px 
</style>