<template>
    <div class="ja-act-nav">

         <div class="act_m-nav">
            <a href="JavaScript:history.back(-1);" class="act_m_nav_back">
                <!-- <img src="../../../static/img/act-goback.png" > -->
            </a>
            <h2 class="act_m_nav_title">填写报名信息</h2>
            <div class="act_m_nav_submit" @click="submitActAttend">
                提交
            </div>
        </div>
        <div class="act-m">
            <div class="act_m_content">
                <ul>
                    <li>
                        <span class="mustDo">*</span>姓名:<input type="text" placeholder="姓名" v-model="addActivityData.name">
                    </li>
                    <li>
                        <span class="mustDo">*</span>手机:<input type="text" placeholder="手机号码" v-model="addActivityData.phone">
                    </li>
                    <li>
                        <span>&nbsp</span>邮箱:<input type="text" placeholder="邮箱地址" v-model="addActivityData.email">
                    </li>
                    <li>
                        <span>&nbsp</span>微信:<input type="text" placeholder="微信号码" v-model="addActivityData.wx">
                    </li>
                    <li>
                        <span>&nbsp</span>公司:<input type="text" placeholder="公司名称" v-model="addActivityData.company">
                    </li>
                    <li>
                        <span>&nbsp</span>职位:<input type="text" placeholder="您的职位" v-model="addActivityData.job">
                    </li>
                    <li class="act-attend-aim">
                        <span>参会目的:</span>
                        <textarea placeholder="请输入" v-model="addActivityData.intention"></textarea>
                    </li>
                </ul>

            </div>

        </div>
         <div class="mask_layer" v-show="maskShow" ></div>
         <div class="act_captcha" v-show="captchaShow">
            <div class="closemaskk">
                <span @click="closeMask">X</span>
            </div>
             <p>短信验证码</p>
             <div>
                 <input type="text" placeholder="请输入验证码"  v-model="addActivityData.captcha">
                 <div class="phone-last">手机尾号: <span>{{phoneLast}}</span><span class="fr act-m-timeColor" @click="submitActAttend">{{getVerdication}}</span></div>
                 <input type="button" value="确定" @click="submit" class="act-m-submit">
             </div>
         </div>
        <div class="act-m-success" v-show="commitSuccess">
            <div class="closemaskk">
               <a :href="'/activity'" >X</a>
                <img src="../../../static/img/act-success.png" alt="">
            </div>
            <p class="act-successInfo">提交成功</p>
            <span>您的报名信息已提交</span>
            <span>正在等待主办方审核</span>
            <a href="http://sj.qq.com/myapp/detail.htm?apkName=com.jinse.app">前往APP查看</a>
        </div>
    </div>
</template>

<script>
// import activityApi from '@/http/api/v6/activity.js'
export default {
  name: 'ActivityAttendForm',
  data () {
    return {
      addActivityData: {},
      phoneLast: '',
      getVerdication: '60',
      captchaShow: false,
      maskShow: false,
      commitSuccess: false
    }
  },
  props: ['activity_id'],
  methods: {
    submitActAttend () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.addActivityData.name === undefined) {
        alert('姓名不能为空')
        return false
      }
      if (this.addActivityData.phone === undefined) {
        alert('请输入手机号')
        return false
      } else if (!reg.test(this.addActivityData.phone)) {
        alert('手机号格式不正确')
        return false
      } else {
        this.phoneLast = this.addActivityData.phone.slice(-4)
        this.time = 60
        this.timer()
        this.getcaptcha()
      }
    },
    getcaptcha () {
      this.captchaShow = true
      this.maskShow = true
      var oAjax = new XMLHttpRequest()
      oAjax.open('GET', window.JINSECONFIG.mDomain + '/ajax/account/sms/captcha?area_code=86&mobile=' + this.addActivityData.phone + '&type=check', false)
      oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
          if (oAjax.status === 200) {
            var msg = JSON.parse(oAjax.responseText)
            if (msg.data.error_message === '验证码超过发送限制') {
              alert('验证码超过发送限制')
              // return false
              this.captchaShow = true
              this.maskShow = true
            } else if (msg.data.error_message === '验证码发送需要相隔60秒') {
              alert('验证码发送需要相隔60秒')
              return false
            } else if (msg.data.error_message === '验证码发送失败，请稍后再试') {
              alert('验证码发送失败，请稍后再试')
              return false
            } else if (msg.data.error_message === '发送成功') {
              this.captchaShow = true
              this.maskShow = true
            }
          } else {
            alert('获取验证码失败')
          }
        }
      }
      oAjax.send()
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.getVerdication = this.time + 's'
        this.disabled = true
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.getVerdication = '获取验证码'
        this.disabled = false
      }
    },
    closeMask () {
      this.maskShow = false
      this.captchaShow = false
      // this.commitSuccess = false
    },
    submit () {
      if (this.addActivityData.captcha === undefined) {
        alert('验证码不能为空')
      } else {
        this.netConfig = window.JINSECONFIG.mDomain
        this.addActivityData.activity_id = this.activity_id
      //   activityApi.postActivityAttend(
      //   this.addActivityData
      // ).then(res => {
      //   if (res.status_code === 200 && res.message === 'success!') {
      //     this.commitSuccess = true
      //     this.captchaShow = false
      //   }
      // })
      // .catch(msg => {
      //   if (msg.status_code === 409 && msg.message === '您已报名，请勿重复报名!') {
      //     alert('您已报名，请勿重复报名!')
      //     this.maskShow = false
      //     this.captchaShow = false
      //   } else if (msg.status_code === 409 && msg.message === '验证码不正确:无效的验证码') {
      //     alert('验证码错误')
      //   } else if (msg.status_code === 409 && msg.message === '活动当前状态不可报名!') {
      //     alert('活动当前状态不可报名!')
      //   }
      // })
      }
    }
  }
}
</script>

<style>
.act_m-nav{
    position: relative;
    background: #F8F8F8;
}
.act_m_nav_title{
    height: 3.4rem;
    padding: 10px 0;
    font-size: 1.25rem;
    color: #29293B;
    line-height: 3.4rem;
    text-align: center;
    font-weight: 400;
}
.act_m_nav_back{
    display: inline-block;
    height: 3.4rem;
    padding: 7px 0 7px 6px;
    color: #fff;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    overflow: hidden;
}
.act_m_nav_submit{
    position: absolute;
    top: 1.8rem;
    right: 1rem;
    color:#F39700;
}
.act_m_content{
    margin-bottom: 2rem;
}
.act_m_content ul{
    margin: 0 1.206rem 0 1.206rem;
}
.act_m_content ul>li{
    height:3rem;
    width:100%;
    font-size:1rem;
    line-height: 3rem;
    border-bottom: 1px solid #EEEEEE;
}
.act_m_content ul>li>input{
    border:none;
    height:2.2rem;
    width: 80%;
    margin-left: 1rem;
}
.mustDo{
    color:#E0051E;
}
.act-attend-aim span{
    vertical-align: top;
}
.act-attend-aim{
    height: 5.7rem!important;
}
.act-attend-aim textarea{
    border:none;
    width:70%;
    outline: none;
    height:4.5rem;
    margin-top: 1rem;
}
.act-attend-aim>textarea:focus{
    border: none;
    outline: none;
}
.ja-act-nav{
    margin-top: -2rem;
}
.act_captcha,.act-m-success{
    width:18rem;
    height: 15rem;
    border-radius: 0.3rem;
    background: #fff;
    overflow: auto;
    margin: auto;
    position: absolute;
    top: -15rem;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:999;
    text-align: center;
}
.act_captcha p{
    margin-top: 2rem;
    font-size: 1rem;
}
.act_captcha input{
    height:2.5rem;
    width:12rem;
    outline: none;
    border:#EEEEEE;
    border-radius: 0.3rem;
    background: #EEEEEE;
    margin-top: 1rem;
    display: inline-block;
}
.act_captcha input::-ms-input-placeholder{
    text-align: center;
}
.act_captcha input::-webkit-input-placeholder{
    text-align: center;
}
.phone-last{
    width:12rem;
    margin: 0.8rem auto;
    text-align: left;
}
.act-m-submit{
    background: #F39700!important;
    color:#fff;
}
.act-m-timeColor{
    color: #F39700;
}
.act-m-success{
     height:20rem!important;
}
.act-m-success img{
    margin-top: 2.5rem;
}
.act-m-success span{
    display: inherit;
    color: #9999A6;
    margin-top:10px;
}
.act-m-success a{
    color: #F39700;
    margin-top: 1rem;
    display: inline-block;
}
.closemaskk{
  position: relative;
}
.closemaskk a{
  position: absolute;
  right:20px;
  font-size: 1.2rem;
}
.act_captcha .closemaskk{
  top: 0.5rem;
  right: -8rem;
}
</style>
