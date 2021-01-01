<template>
  <div class="titles">
    <div class="title">
      <a href="#" class="title-selected">
        发现音乐
        <sub class="cor">&nbsp;</sub>
      </a>
    </div>
    <div class="title"><a href="#">我的音乐</a></div>
    <div class="title"><a href="#">朋友</a></div>
    <div class="title"><a href="#">商城</a></div>
    <div class="title"><a href="#">音乐人</a></div>
    <div class="title title-lst">
      <a href="#"
        >下载客户端
        <sup class="hot">&nbsp;</sup>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.title a:hover,
.title .title-selected {
  background: #000;
  text-decoration: none;
  color: #fff;
}
.title .cor {
  background: url(../../assets/img/topbar.png) no-repeat 0 9999px;
  display: block;
  position: absolute;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: 22px;
  background-position: -226px 0;
}
.hot {
  display: block;
  position: absolute;
  background: url(../../assets/img/topbar.png) no-repeat 0 9999px;
  top: 21px;
  margin-left: 81px;
  width: 28px;
  height: 19px;
  background-position: -190px 0;
}
</style>