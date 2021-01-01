<template>
  <div class="singer">
    <h3 class="singer-tit">
      <span>入驻歌手</span>
      <a href="#" class="singer-more">查看全部 ></a>
    </h3>
    <div class="singer-list">
      <detauk-singer-item v-for="(item,index) in 5" :key="index">
        <template v-slot:singerimg>
          <img
            src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"/>
        </template>
        <template v-slot:singername>
            <span>张惠妹aMEI</span>
        </template>
           <template v-slot:singerdes>
            <span>台湾歌手张惠妹</span>
        </template>
      </detauk-singer-item>
      <deatil-to-singer-btn></deatil-to-singer-btn>
    </div>
  </div>
</template>

<script>
import DeatilToSingerBtn from './DeatilToSingerBtn.vue';
import DetaukSingerItem from "./DetaukSingerItem.vue";
export default {
  components: { DetaukSingerItem, DeatilToSingerBtn },
};
</script>

<style>
.singer {
  margin-top: 15px;
}
.singer-tit {
  display: flex;
  justify-content: space-between;
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.singer-more {
  color: #666;
}
.singer-list {
  margin: 6px 0 14px 20px;
}
</style>