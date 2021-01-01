<template>
  <div class="to-singer-btn">
    <a class="to-singer">
      <i>申请成为网易云音乐人</i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.to-singer-btn{
  margin-top: 20px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  cursor: pointer;
}
.to-singer, .to-singer i{
  background: url(https://s2.music.126.net/style/web2/img/button2.png?29263e8f1878d2a13e1f0562ed18b037);
}
.to-singer{
  display: block;
  width: 210px;
  height: 31px;
  border-radius: 4px;
  background-position: right -100px;
}
.to-singer i{
  font-style: normal;
  display: block;
  text-align: center;
  width: 206px;
  height: 31px;
  background-position: 0 -59px;
  font-weight: bold;
  color: #333;
}
</style>