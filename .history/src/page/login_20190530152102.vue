<template>
    <div class="login" >
    <div class="contanier">
      <div class="title">
        <span class="title-left">供应商登录</span>
        <span class="title-logo"><img src="../static/images/background.jpg" alt=""/></span>
      </div>
      <el-form autoComplete="on" :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-width="100px!important"
               :inline-message="this.showInline"
               class="login-form">
        <el-form-item prop="name" label="用户名：">
          <el-input name="name"
                    type="text"
                    v-model="loginForm.name"
                    autoComplete="on"
                    @keyup.enter.native="handLogin"
                    placeholder="请输入手机/用户名/邮箱"
                    class="login-input"/>
        </el-form-item>
        <el-form-item prop="password" label="密码：">
          <el-input name="password" :type="pwdType" @keyup.enter.native="handLogin" v-model="loginForm.password"
                    autoComplete="on"
                    width="100px"
                    placeholder="请输入账户登录密码"
                    class="login-input loginPass"></el-input>
        </el-form-item>
        <el-form-item  prop="verifycode" label="验证码：">
          <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
          <el-input v-model="loginForm.verifycode" placeholder="请输入验证码" class="identifyinput nnm" @keyup.enter.native="handLogin" ></el-input>
          <div class="identifybox">
            <div @click="refreshCode" class="login1">
              <s-identify :identifyCode="identifyCode" :contentWidth="cavesW" :contentHeight="cavesH"></s-identify>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="check">
          <el-checkbox v-model="checked" @change="remenber">记住密码</el-checkbox>
          <span class="howName" style="cursor: pointer;">

            <el-popover
              placement="bottom"
              width="200"
              popper-class="bu"
              trigger="click"
              >
              <div>

                <span class="xuan1" >&emsp;</span>
                <span class="xuan">请您先点击【注册】进行供应商信息的录入，注册完成后，请耐心等待。你的资料将在3-5个工作日内完成审核，届时请保持联系人手机畅通，方便我司工作人员与您联系并告知登录账号。</span>
              </div>
               <span class="howNamered el-icon-question"  slot="reference"><b style="font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(153,153,153,1);">如何获取账户信息</b></span>

             </el-popover>
            </span>
        </el-form-item>
        <el-form-item class="loginButto-item">
          <el-button type="primary" class="loginButton" :loading="loading"  @click.native.prevent="handLogin">
            登录
          </el-button>
          <el-button type="primary"  @click.native.prevent="handleReg">
            注册
          </el-button>
          <!--<div  class="loading" v-loading="loading"></div>-->
        </el-form-item>
      </el-form>
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
</style>
<style lang="">

</style>