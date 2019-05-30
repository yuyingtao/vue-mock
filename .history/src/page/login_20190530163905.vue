<template>
    <div class="login" >
    <img src="~static/images/background.jpg" class="back_img" alt="">
     <div class="contanier">
      <div class="title">
        <span class="title-left">供应商登录</span>
        <span class="title-logo"><img src="~static/images/logo.png" alt=""/></span>
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
    position: absolute;
    display: flex;
    left: 0px;
    right: 0px;
    justify-content: center;
    align-items: center;
    top: 0px;
    bottom: 0px;
    .title
        border-bottom :1px solid #D9D9D9
        vertical-align :middle
        height :80PX
        width:100%
        span
          display :inline-block
          height :50PX
          img
            width :155PX;
            height :51PX
        .title-left
          position :absolute
          height :24PX
          left:23PX
          top:32PX
          line-height :24PX
          border-left :4px solid #E77920
          padding-left :20PX
          font-size :18PX
          color :#232B39
          font-weight :400
          font-family :"Microsoft YaHei"
        .title-logo
          text-align :center
          width :100%
          height :80PX
          display :flex
          justify-content:center
          align-items:center
</style>