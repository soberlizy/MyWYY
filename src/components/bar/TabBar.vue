<template>
    <div class="m-top">
    <div class="m-logo"><tab-bar-logo></tab-bar-logo></div>
    <div class="nav-title">
      <div class="nav-title-left">
       <tab-bar-title></tab-bar-title>
      </div>
      <div class="nav-title-right">
        <div class="nav-login"><tab-bar-login-btn></tab-bar-login-btn></div>
        <div class="nav-CreateBtn"><tab-bar-crea-btn></tab-bar-crea-btn></div>
        <div class="nav-search"><tab-bar-search></tab-bar-search></div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBarCreaBtn from './TabBarCreaBtn.vue';
import TabBarLoginBtn from './TabBarLoginBtn.vue';
import TabBarLogo from './TabBarLogo.vue';
import TabBarSearch from './TabBarSearch.vue';
import TabBarTitle from './TabBarTitle.vue';
export default {
  name: "TabBar",
  components: {TabBarLogo, TabBarTitle, TabBarLoginBtn, TabBarCreaBtn, TabBarSearch},
};
</script>

<style>
.m-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
}
.m-logo {
  width: 1100px;
  margin: 0 auto;
}
.nav-title{
    width: 1100px;
    height: 34px;
    margin: 0 auto;

}
.nav-title-left a {
  padding: 0 19px;
  float: left;
  height: 70px;
  color: #ccc;
  font-size: 14px;
  line-height: 70px;
}
.title .title-selected {
  background: #000;
  text-decoration: none;
  color: #fff;
}
.nav-title span {
  height: 100%;
}
.nav-login {
  float: right;
  height: 45px;
  margin: 25px 0 0 20px;
  padding: 0 22px 0 0;
}
.nav-title-right{
    position: relative;
}
/* 搜索栏 */
.nav-search{
  float: right;
  width: 158px;
  height: 32px;
}
</style>