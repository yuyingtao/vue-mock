<template>
    <div class="login" >
    <img src="~static/images/background.jpg" class="back_img" alt="">
     <div class="contanier">
      <div class="title">
        <span class="title-left">供应商登录</span>
        <span class="title-logo"><img src="~static/images/logo.png" alt=""/></span>
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
  import $ from 'jquery'
  export default {
    name: 'Login',
    components:{
     
    },
    data () {
      const validateUsername = (rule, value, callback) => {
        if (value.trim().length < 1) {
          this.loginIF_1=false;
          callback(new Error('用户名不能为空'))
        } else {
          this.loginIF_1=true;
          callback()
        }
      };
      const verifycode = (rule, value, callback) => {
        if (value === '') {
          this.loginIF=false;
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          this.loginIF=false;
          callback(new Error('验证码不正确!'))
          this.refreshCode()
        } else {
          this.loginIF=true;
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.trim().length < 1) {
          this.loginIF_2=false;
          callback(new Error('密码不能为空'))
        } else {
          this.loginIF_2=true;
          callback()
        }
      };
      return {
        loginForm: {
          name: '',
          password: '',
          verifycode: '',
        },
        loading:false,
        loginIF:false,
        loginIF_1:false,
        loginIF_2:false,
        identifyCodes: '1234567890',
        identifyCode: '',
        loginRules: {
          name: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}],
          verifycode: [{required: true, trigger: 'blur', validator: verifycode}],
        },
        checked:true,
        pwdType: 'password',
        showInline:false,
        imageLogo:"./static/image/logo.png",
        cavesW:100,
        cavesH:39
      }
    },
    created(){
      this.refreshCode()
      if(window.localStorage.getItem("name")!=null)
        this.loginForm.name=window.localStorage.getItem("name")
      else
        this.loginForm.name=""
      if(window.localStorage.getItem("password")!=null)
        this.loginForm.password=window.localStorage.getItem("password")
      else
        this.loginForm.password=""
      this.loginForm.verifycode=""
    },
    mounted(){
      this.initDom()
    },
    methods: {
    remenber(){
},
      getAjax(){
        var pass=md5(this.loginForm.password)
        var axaj=this.$apiUrl.api+'/supLogin.jsp'
        axios.post(this.$apiUrl.api+'/supLogin.jsp',{
          login_id:this.loginForm.name,
          login_pwd:pass
        }).then((res) => {
          if(res.data.status=='200'){
            this.setCode(res.data.data)
            this.loading=false
            debugger
            if(this.checked){
              window.localStorage.setItem("name", this.loginForm.name)
              window.localStorage.setItem("password", this.loginForm.password)
              window.localStorage.setItem("checked", this.checked)
                    }else {
              window.localStorage.setItem("name", "")
              window.localStorage.setItem("password", "")
              window.localStorage.setItem("checked", this.checked)
                    }
            this.$router.push('/index')
          }else if(res.data.status==400) {
            this.$message.error(res.data.msg);
            this.loading=false
          }

        })
          .catch((response) => {
            console.log(response)
          })
      },
      initDom() {
        $(".login").height($(document).height());
        if(980<$(document.body.clientWidth).height()<1300){
          console.log(this.cavesW),
            this.cavesW=50
        }
      },
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 切换验证码
      refreshCode() {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
        }
      },
      handleReg(){
        this.$router.push('/register')
      },
      handLogin(){
        if(this.loginForm.name=="")
          this.$message.error("请输入用户名")
        else if(this.loginForm.password=="")
          this.$message.error("请输入密码")
        else if(this.loginForm.verifycode=="")
          this.$message.error("验证码为空")
        else if(this.loginForm.verifycode!=this.identifyCode)
        {
          this.$message.error("验证码不正确")
          this.refreshCode()
        }
        else if(this.loginForm.name!=""&&this.loginForm.password!=""&&this.loginForm.verifycode!=""&&this.loginForm.verifycode==this.identifyCode||this.loginIF&&this.loginIF_1&&this.loginIF_2){

          this.loading=true
          $('.login1').click();
          this.getAjax()
        }
      },
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
    .login-form
        width :600PX
        margin-left:170PX
        margin-top:38PX
        margin-bottom :0PX
        .check
          font-size :14PX
          color :#999
          .info
            line-height :24PX
            width :75%
            text-align :right
          .howName
            margin-left 199PX
            .howNamered
              width:28%;
              height:16px;
              border-radius:50%;
              color: rgba(111,152,255,1);
              font-size: 19px;
              margin-right 10px
              padding 0px 1px
        .login-input
          width :320PX
          height:40px
        .loginPass
          margin-bottom :10PX
        .loginButton
          margin-right 76PX
        .identifyinput
          width:184PX
        .identifybox
          float :right
          margin-right :200PX
          width :100PX
          height :39PX
          canvas
            width :72PX
            height :39PX      
</style>