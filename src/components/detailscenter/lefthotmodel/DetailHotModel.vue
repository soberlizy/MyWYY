<template>
  <div class="hot-recommend">
    <detail-tiltle>
      <template v-slot:big-tab>
        <a href="#" class="big-tab">热门推荐 </a>
      </template>
      <template v-slot:tab>
             <a href="#" class="hot-tab">华语</a><span class="line">|</span>
              <a href="#" class="hot-tab">流行</a><span class="line">|</span>
              <a href="#" class="hot-tab">摇滚</a><span class="line">|</span>
              <a href="#" class="hot-tab">民谣</a><span class="line">|</span>
              <a href="#" class="hot-tab">电子</a>
      </template>
    </detail-tiltle>

    <div class="m-list" >
      <!-- 推荐列表 -->
      <div class="m-list-1" v-for="(item,index) in 8" :key="index">
        <div class="m-list-img">
          <img
            src="http://p2.music.126.net/d8IhjoUO6MpL9VLp9XWiSg==/109951165474191321.jpg?param=140y140"
          />
          <a href="#" class="msk"></a>
          <div class="bottom">
            <div class="bottom-left">
              <span class="icon-headset"></span>
              <span class="play-num">36万</span>
            </div>
            <div>
              <a href="#" class="paly"> </a>
            </div>
          </div>
        </div>
        <p class="dsc">
          <a href="#" class="m-list-text">电影故事｜冬季恋歌 暖暖含光</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import DetailTiltle from "../DetailTiltle.vue";
export default {
  components: { DetailTiltle },
};
</script>

<style>
.hr-title .line {
  margin: 0 10px;
  color: #ccc;
}
.m-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.m-list-1 {
  flex: 0 0 25%;
  margin-top: 21px;
}
.m-list-text {
  width: 140px;
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  color: #000;
  font-size: 14px;
}
.m-list-img {
  position: relative;
}.msk {
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?759cd41f34edca1860f86d785f88bb91) no-repeat;
  background-position: 0 0;
}
.msk {
  position: absolute;
  height: 140px;
  width: 140px;
  left: 0px;
}
.bottom-left {
  display: flex;
  align-items: center;
}
.bottom,
.r-lists-msk,
.msk {
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?759cd41f34edca1860f86d785f88bb91) no-repeat;
  background-position: 0 0;
}
.bottom {
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 140px;
  height: 27px;
  background-position: 0 -537px;
  color: #ccc;
   display: flex;
  justify-content: space-between;
}
.icon-headset,
.paly {
  background: url(https://s2.music.126.net/style/web2/img/iconall.png?99797f6be8965b9cbe79e62d91);
}.msk {
  position: absolute;
  height: 140px;
  width: 140px;
  left: 0px;
}
.paly {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0;
}
.paly:hover {
  background-position: 0 -60px;
}
.icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
}
</style>
DetailTiltle