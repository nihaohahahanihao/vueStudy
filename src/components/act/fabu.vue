<template>
	<div>
		<div class="">活动发布</div>
		<div>
			<ul class="act-egistration-ul">
				<li>
					<span class="act-egistration-list"><i>*</i>活动标题</span> <input type="text" placeholder="0/30"/>
				</li>
				<li style="position:relative;" class="province">
					<span class="act-egistration-list"><i>*</i>活动地点</span>
                    <v-distpicker></v-distpicker>
                    <input type="text" class="act-adress" placeholder="详细地址，如:国家会议中心1-1"/>
				</li>
				<li>
					<span class="act-egistration-list"><i>*</i>活动时间</span>
				</li>
				<li>
					<span class="act-egistration-list"><i>*</i>活动海报</span>

				</li>
				<li>
					<span class="act-egistration-list"><i>*</i>活动时间</span> <input type="text"/>
				</li>
				<li>
					<span class="act-egistration-list"><i>*</i>主办方</span> <input type="text" placeholder="主办方单位"/>
				</li>
                	<li>
					<span class="act-egistration-list"><i>*</i>活动分类</span>
                    <select name="" id="act-release-items">
                        <option value="">峰会/系列活动/沙龙 论坛/培训/线上活动/其他</option>
                    </select>
				</li>
				<li style="position:relative">
					<span class="act-egistration-list">活动费用</span>
                    <div class="act-money"><span class="act-money-rmb">￥</span><input type="text" style="width:450px;height:35px;position:absolute;top:2px;left:197px;border:none;"></div>元
                    <p class="act-money-tips">请输入纯数字正整数</p>
				</li>
                <li class="act-radio">
					<span class="act-egistration-list"><i>*</i>活动报名</span>
                    <input type="radio" name="sex" value="open">开启
                    <input type="radio" name="sex" value="close">关闭
				</li>
               	<li style="position:relative">
					<span class="act-egistration-list">报名上限</span>
                     <input type="number" placeholder="0"/>人
                   <p class="act-money-tips">请输入纯数字正整数</p>
				</li>
                  <li class="act-radio">
					<span class="act-egistration-list"><i>*</i>赞助商申报</span>
                    <input type="radio" name="sex" value="open">开启
                    <input type="radio" name="sex" value="close">关闭
				</li>
                <li class="act-outline">
                    <span class="act-egistration-list"><i>*</i>活动概要</span>
					<textarea rows="7" cols="70">
                    150/0
                    </textarea>
				</li>
                <li>
					<span class="act-egistration-list"><i>*</i>活动详情</span>

				</li>
				<li>
					<div class="act-egistration-btn ">提交报名</div> <div class="act-egistration-btn ">存草稿</div>
				</li>
				<li>
          <qrcode size="200" bg-color="#green" fg-color="#000000" val="https://github.com/"></qrcode>
        <!-- <vue-qr :bgSrc='src' :logoSrc="src2" text="http://www.baidu.com" :size="200"></vue-qr> -->
                </li>
                <li>
                 <div class="js-acl">
                        <div class="aclink">
                  <p><a href="javascript:" class="icon">删除</a> 后面的文字</p>
               </div>
        </div>
                </li>
                <li>
    <div class="img-responsive">
        <img src="../../../static/mail.png">
    </div>
    <div class="close"><a href="javescript:;">1000人</a></div>
                </li>
			</ul>
		</div>
	</div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import VueQr from 'vue-qr'
export default {
    components: {
        VDistpicker,
        VueQr
        }
}
</script>

<style>
    *{padding:0;margin:0;}
    .close-btn{background:red;color:#fff;height:45px;width:120px;border-radius:5px;text-align:center;display: table}
    .img-responsive , .close{display: table-cell;vertical-align: middle}

.act-title{
    width:300pt;
    height:45pt;
    display: inline-block;
    border-bottom: #F0F0F0;
    line-height: 45pt;
}
.icon {
    display: inline-block;
    width:20px; height:20px;
    background: url(../../../static/mail.png) no-repeat center;
    background-size: 20pt 20pt;
    white-space:nowrap;
    letter-spacing: -1em;
    text-indent: -99em;
    color: transparent;
}
    .img-responsive img{
width:30pt;
height: 30pt;
    }
.icon:before {
    content: '\3000';
}
.js-acl .aclink a {
    font-weight: bold;
     height: 44px;
     line-height: 44px;
     display: block;
      border-top: #F5F5F5 1px solid;
      /* background: url(../img/mk-morer-icon9.svg) right 15px no-repeat scroll;  */
      padding-right: 26px;
      }
ul li{
    list-style: none;
    height: 60px;
    width: 700px;
}
.act-egistration-list{
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: right;
    margin-right: 50px;
}
.act-egistration-getCoin{
    display: inline-block;
    width: 100px;
    height: 43px;
    border: 1px solid rgba(228, 228, 228, 1);
    background-color: rgba(242, 242, 242, 1);
    border-radius: 5px;
    line-height: 40px;
    text-align: center;
}
.act-egistration-ul input{
    width: 500px;
    height: 40px;
    vertical-align:middle;
    border-width: 1px;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 5px;
}
.act-verification-code{
    width: 395px!important;
}
.act-egistration-btn{
    display: inline-block;
    width: 120px;
    height: 40px;
    background-color: rgba(255, 153, 0, 1);
    color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
}
:-moz-placeholder{
  text-align: right;
}
::-moz-placeholder{
  text-align: right;
}
:-ms-input-placeholder{
   text-align: right;
}
::-webkit-input-placeholder{
    text-align: right;
}
.province{
    height: 120px;
}
.province div{
    position: absolute;
    top: -5px;
    left: 174px;
}
.act-adress{
    position: absolute;
    top: 50px;
}
.act-egistration-ul i{
    color: red;
}
#act-release-items{
    width: 500px;
    height: 40px;
    border-radius: 5px;
    color: #cccccc;
}
.act-money{
    display: inline-block;
    width: 480px;
   height: 40px;
   border: 1px solid rgb(169, 169, 169);
   border-radius: 5px;
}
.act-money-rmb{
    display: block;
    width: 20px;
    height: 20px;
    border-right: 1px solid #cccccc;
    margin-top: 10px;
}
.act-money-tips{
    color: #cccccc;
    font-size: 10px;
    position: absolute;
    top: 28px;
    left: 175px;
}
.act-radio input{
    width: 15px;
    height: 15px;
}
.act-outline{
    width: 100%;
    height: 130px;
}
</style>
