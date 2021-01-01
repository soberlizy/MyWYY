<template>
  <div class="g-wrap">
    <div class="m-info f-cb">
      <div class="cover u-cover u-cover-dj">
        <img
          src="http://p4.music.126.net/M3IfYi1iYv6VIXgCUNOeuQ==/109951165422364981.jpg?param=200y200"
        />
      </div>
    </div>
    <div class="cnt">
      <h2 class="f-ff2 f-brk">{{$route.query.name}}</h2>
      <div class="user f-cb">
        <img
          src="http://p1.music.126.net/3MtteLxgrd7TvEynpDy61g==/109951165550429565.jpg?param=40y40"
        />
        <span class="name"> 我是作者 </span>
      </div>
    </div>
    <div class="cnt1 cnt">
      <div class="user f-cb">
        <button style="width:70px;height:25px">播放</button>
        <button style="width:70px;height:25px">添加</button>
        <button style="width:70px;height:25px">分享</button>
        <button style="width:70px;height:25px">下载</button>
        <button style="width:70px;height:25px">播放</button>
      </div>
       <div class="user f-cb">
        标签：
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.g-wrap {
  padding: 47px 30px 40px 39px;
  height: 337px;
  width: 640px;
}
.cnt {
  margin-left: 230px;
  height: 50px;
}
.cover {
  float: left;
  position: relative;
  display: inline;
  margin: 0 -220px 0 0;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.cnt h2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.user {
  margin: 8px 0 20px;
  line-height: 35px;
  position: relative;
}
.m-info .tit {
  margin-left: 64px;
  position: relative;
}
.name {
  color: #0c73c2;
  position: absolute;
  left: 51px;
}
.cnt1{
    margin-top:30px;
}
.cnt1 button{
    margin-right: 10px;
}
</style>