<template>
  <div class="big-model">
    <detail-hot-model></detail-hot-model>
    <!-- 间隔 -->
    <div class="fill"></div>
    <detail-new-disk></detail-new-disk>
    <div class="fill"></div>
    <detail-rank></detail-rank>
  </div>
</template>

<script>
import DetailHotModel from "./lefthotmodel/DetailHotModel";
import DetailNewDisk from "./leftnewdiskmodel/DetailNewDisk";
import DetailRank from './leftrankmodel/DetailRank';
export default {
  components: { DetailHotModel, DetailNewDisk, DetailRank },
};
</script>

<style>
.big-model {
  width: 729px;
  height: 1350px;
}

.fill {
  margin: 0 0 50px;
}
</style>