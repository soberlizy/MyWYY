<template>
  <div>
    <i-sub-bar>
      <a href="#" class="navsub-first" hidefocus="true"> 推荐 </a>
      <a href="#" hidefocus="true"> 排行榜 </a>
      <a href="#" hidefocus="true"> 歌单<span class="r-icon" style="width:8px;height:8px;top:80px;background-size:cover;"></span> </a>
      <a href="#" hidefocus="true"> 主播电台 </a>
      <a href="#" hidefocus="true"> 歌手 </a>
      <a href="#" hidefocus="true"> 新碟上架 </a>
    </i-sub-bar>
  </div>
</template>
<script>
import ISubBar from "../subbar/ISubBar.vue";

export default {
  name: "MainSubBar",
  components: {
    ISubBar,
  },
};
</script>

<style>
.r-icon {
  display: block;
  position: absolute;
  margin-left: 24px;
  background: url(../../assets/img/r.png);
}
</style>