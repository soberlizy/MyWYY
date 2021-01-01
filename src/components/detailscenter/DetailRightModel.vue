<template>
  <div class="small-model">
      <detail-user></detail-user>
      <deatil-singer></deatil-singer>
      <detail-anchor></detail-anchor>
  </div>
</template>

<script>
import DetailAnchor from './rightanchor/DetailAnchor.vue';
import DeatilSinger from './rightmodel/DeatilSinger.vue';
import DetailUser from './rightmodel/DetailUser.vue';
export default {
  components: { DetailUser, DeatilSinger, DetailAnchor },};
</script>

<style>
.small-model {
  width: 255px;
  height: 920px;
  margin-left: 20px;
}
</style>