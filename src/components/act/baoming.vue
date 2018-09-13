<template>
	<div class="activity-main">
		<div class="activity-title">
			<span>我发布的</span>
			<span>我参与的</span>
			<span class="fr orange">+发布活动</span>
		</div>
		<div class="activity-content">
			<div class="activity-content-state">
				<span>待审核</span>
				<span>已通过</span>
				<span>草稿</span>
				<span class="avtivity-content-search fr"><input type="text"></span>
				<span class="activity-content-nums fr">共<i>6</i>条活动</span>
			</div>
		</div>
		<div id="qrcode">二维码
			<!-- <qrcode size="200"   :val="'https://github.com/'"></qrcode> -->
		</div>
	</div>
</template>

<script>

</script>

<style>
.orange{
	color:rgba(243,151,0,1);
	width: 80px!important;
	margin-right: 0!important;
}
.fr{
	float: right;
}
.activity-main{
width: 870px;
height: 1310px;
}
.activity-title span{
	width: 64px;
	height: 22px;
	display: inline-block;
	margin-right: 30px;
}
.activity-content-state{
	width: 870px;
	height: 60px;
}
.activity-content-state span{
	width: 42px;
	height:20px;
	margin-top: 29px;
	display: inline-block;
	font-size: 14px;
}
.activity-content-nums{
	width: 84px!important;
}
.avtivity-content-search{
	width: 258px!important;
	height: 30px;
	border: 1px solid rgba(220,220,220,1);
	border-radius: 4px;
}
.avtivity-content-search input{
	height: 30px;
	width: 259px;
	border: none;
}
</style>
