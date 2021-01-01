<template>
   <div class="footer">
    <div class="footer-main">
      <div class="footer-text">
        <p class="agreement">
          <a href="#">服务条款</a>|
          <a href="#">隐私政策</a>|
          <a href="#">儿童隐私政策</a>|
          <a href="#">版权投诉指引</a>|
          <a href="#">意见反馈</a>|
        </p>
        <p class="company">
          <span>网易公司版权所有©1997-2020</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="#">浙网文[2018]3506-263号</a>
        </p>
        <p class="number">
          <span>违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <a href="#">xxxx@163.com</a>
        </p>
        <p class="police">
          <span>粤B2-20090191-18</span>
          <span>工业和信息化部备案管理系统网站</span>
          <img src="https://s2.music.126.net/style/web2/img/3rd/police.png?409804de0953652689cfdb4614a14dfc"
            style="width: 14px;height: 14px;">
          <a href="#">浙公网安备 33010902002564号</a>
        </p>
      </div>
      <div class="footer-logos">
        <div>
          <a href="#" class="footer-logos-1 logo-1"></a>
          <span class="tt tt-1"></span>
        </div>
        <div>
          <a href="#" class="footer-logos-1 logo-2"></a>
          <span class="tt tt-2"></span>
        </div>
        <div>
          <a href="#" class="footer-logos-1 logo-3"></a>
          <span class="tt tt-3"></span>
        </div>
        <div>
          <a href="#" class="footer-logos-1 logo-4"></a>
          <span class="tt tt-4"></span>
        </div>
        <div>
          <a href="#" class="footer-logos-1 logo-5"></a>
          <span class="tt tt-5"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.footer-main{
  display: flex;
  height: 115px;
  width: 980px;
  margin: 0 auto;
}
.footer-text{
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
}
.agreemen,.agreement a{
  color: #999999;
}
.company a{
  color: #666;
}
.police a,.number a{
  color: #333;
}
.footer-logos{
  display: flex;
  align-items: center;
  width: 420px;
  margin-top: 33px;
}
.footer-logos-1{
  display: block;
  width: 47px;
  height: 45px;
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?F124b6aa29b6a002d6a981c55ab9f918);
  background-size: 110px 552px;
}
.tt{
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
    margin-left: -6px;
    width: 72px;
    background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?76b25c7889cc6723baace03c9c162d21f);

    background-size: 180px 139px;
}
.logo-1{
  background-position: -63px -456.5px;
}
.tt-1{
  background-position: 0 -108px;
}
.logo-2{
  background-position: -63px -101px;
}
.tt-2{
  background-position: -1px -91px;
}
.logo-3{
  background-position: 0 0;
}
.tt-3{
  background-position: 0 0;
}
.logo-4{
  background-position: -63px -50px;
}
.tt-4{
  background-position: 3px  -54px;
}
.logo-5{
  background-position: 0 -101px;
}
.tt-5{
  background-position: -1px -72px;
}
</style>