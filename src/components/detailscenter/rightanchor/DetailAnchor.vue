<template>
  <div class="hot-anchor">
    <h3 class="singer-tit">
      <span>热门主播</span>
    </h3>
    <div class="anchor-list">
      <detail-anchor-item v-for="(item,index) in 6" :key="index">
        <template v-slot:anchorimg>
          <img
            src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
          />
        </template>
        <template v-slot:anchorname>
         陈立
        </template>
          <template v-slot:anchornamedsc>
        心理学家、美食家陈立教授
        </template>
      </detail-anchor-item>
    </div>
  </div>
</template>

<script>
import DetailAnchorItem from "./DetailAnchorItem.vue";
export default {
  components: { DetailAnchorItem },
};
</script>

<style>
.hot-anchor {
  margin-top: 30px;
}
.anchor-list {
  margin: 20px 0 0 20px;
}
</style>