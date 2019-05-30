<template>
    <div class="login" >
    <img src="~static/images/background.jpg" class="back_img" alt="">
    <div class="contanier">
      <div class="title">
        <span class="title-left">供应商登录</span>
        <span class="title-logo"><img src="~static/images/logo.png" alt=""/></span>
      </div>
      
    </div>
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
</style>