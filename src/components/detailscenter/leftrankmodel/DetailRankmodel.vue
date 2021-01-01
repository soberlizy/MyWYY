<template>
  <div class="r-list-1">
    <div class="r-list-top">
      <div class="r-list-img">
        <slot name="img"></slot>
        <a href="#" class="r-list-msk"></a>
      </div>
      <div class="r-list-img-tit">
        <a href="#">
            <slot name="name"></slot>
          <!-- <h3 class="d-title r-tit">云音乐飙升榜</h3> -->
        </a>
        <a href="#" class="r-btn r-paly"></a>
        <a href="#" class="r-btn r-collection"></a>
      </div>
    </div>
    <div class="r-uplist" v-for="(item,index) in 5" :key=index>
      <div>
        <span class="first">{{index+1}}</span>
        <a href="#" class="up-name">如果你也这样过</a>
      </div>
      <div class="hover-btn">
        <a href="#" class="up-name-play h-btn"></a>
        <a href="#" class="up-name-add h-btn"></a>
        <a href="#" class="up-name-coll h-btn"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.r-list-1 {
  height: 100%;
  flex: 0 0 33%;
  margin-left: 2px;
}
.r-list-top {
  display: flex;
  justify-content: flex-start;
  height: 100px;
  padding: 20px 0 0 18px;
}
.r-list-img {
  display: block;
  position: relative;
}
.r-list-msk {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80px;
  height: 80px;
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?759cd41f34edca1860f86d785f88bb91);
  background-position: -145px -57px;
}
.r-list-img-tit {
  width: 116px;
  height: 51px;
  margin: 6px 0 0 10px;
}
.r-btn {
  display: block;
  float: left;
  margin: 10px 10px 0px 0px;
  width: 22px;
  height: 22px;
  background: url(../../../assets/img/index.png);
}
.r-paly {
  background-position: -267px -235px;
}
.r-collection {
  background-position: -300px -205px;
}
.r-uplist {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.first {
  color: #c10d0c;
  font-size: 16px;
}
.up-name {
  color: #000;
  padding-left: 10px;
  padding-bottom: 5px;
}
.hover-btn{
  display: flex;
  align-items: center;
  height: 32px;
  width: 82px;
  visibility: hidden;
}
.up-name-play{
  background-position: -267px -268px
}
.up-name-add{
  margin: 0 10px 0;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?5bedeef5dd763af947fab4fbd01b06f9);
  background-position: 0 -700px;
}
.up-name-coll{
  background-position: -297px -268px;
}
.h-btn{
  background: url(../../../assets/img/index.png);
  width: 17px;
  height: 17px;
}
</style>