<template>
	<div>
			<ul class="act-egistration-ul">
                <li>
					<h2 class="act-egistration-list">成为赞助商</h2> 
				</li>
				<li>
					<span class="act-egistration-list"><i>*</i>联系人姓名</span> <input type="text"/>
				</li>
                <li>
                   <span class="act-egistration-list">公司</span> <input type="text"/>
                </li>
                <li>
					<span class="act-egistration-list">职位</span> <input type="text"/>
				</li>
				<li>
					<span class="act-egistration-list">微信号</span> <input type="text"/>
				</li>
				<li>
					<span class="act-egistration-list">邮箱</span> <input type="text"/>
				</li>
				<li class="act-outline">
					<span class="act-egistration-list">赞助意向</span><textarea name="" id="" cols="70" rows="7"></textarea>
				</li>
                	<li style="position:relative;">
					<span class="act-egistration-list"><i>*</i>联系人手机号</span> <input type="text"/>
                   <p style="font-size:10px;position:absolute;top:10px;left:20px;top:35px;left:174px;">请填写正确的11位个人手机号码</p>
				</li>
				<li>
					<span class="act-egistration-list">手机验证码</span> <span><input type="text" class="act-verification-code"/></span> <span class="act-egistration-getCoin">获取验证码</span>
				</li>
				<li>
					<div class="act-egistration-btn ">提交报名</div> 
				</li>
				<li></li>
			</ul> 
	</div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
    components: { VDistpicker }
}
</script>

<style>
ul li{
    list-style: none;
    height: 60px;
    width: 700px;
    margin: 2px 0;
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
    width: 120px;
    height: 40px;
    margin: 0 auto;
    background-color: rgba(255, 153, 0, 1);
    color: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
}
.act-outline{
    width: 100%;
    height: 130px;
    border-radius: 5px;
}
</style>
