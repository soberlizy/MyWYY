<template>
  <div class="user">
    <div class="myinfo">
      <p class="note">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="#" class="login-btn">用户登录</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.user{
    margin-left: 2px;
    margin: 8px 2px 20px;
}
.myinfo {
  height: 126px;
  width: 250px;
  background: url(../../../assets/img/index.png);
  background-position: 0 0;
}
.note {
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
}
.login-btn {
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 31px;
  line-height: 31px;
  text-shadow: 0 1px 0 #8a060b;
  text-align: center;
  color: #fff;
  background: url(../../../assets/img/index.png);
  background-position: 0 -195px;
}
.login-btn:hover {
  background-position: -110px -195px;
}
</style>