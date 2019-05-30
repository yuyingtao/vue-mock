<template>
    <div class="login" >
    <img src="~static/images/background.jpg" class="back_img" alt="">
     <div class="contanier">
      <div class="title">
        <span class="title-left">供应商登录</span>
        <span class="title-logo"><img src="../image/logo.png" alt=""/></span>
      </div>
      <span class="footer">如果您的登录出现问题，请联系我们 <span>400-036-1117</span></span>
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
   width 100%
   height 100%
   position absolute 
   font-size 0px
   .back_img
    width 100%
    height 100%
   .contanier
    position absolute
</style>