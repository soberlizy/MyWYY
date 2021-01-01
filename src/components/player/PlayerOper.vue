<template>
  <div class="palyer-oper">
    <a href="javascript:;" class="oper-link">收藏</a>
    <a href="javascript:;" class="oper-share">分享</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.palyer-oper {
  width: 60px;
  height: 100%;
}
.palyer-oper a{
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  text-indent: -9999px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
}
.palyer-oper .oper-link{
  background-position: -88px -163px;
}
.palyer-oper .oper-link:hover{
  background-position: -88px -189px;
}
.palyer-oper .oper-share{
  background-position: -114px -163px;
}
.palyer-oper .oper-share:hover{
  background-position: -114px -189px;
}
</style>