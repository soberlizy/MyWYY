<template>
    <div class="main-model">
        <!-- 左边大模块 -->
        <detail-left-model></detail-left-model>
        <!-- 右边大模块 -->
        <detail-right-model></detail-right-model>
    </div>
</template>

<script>
import DetailLeftModel from './DetailLeftModel.vue'
import DetailRightModel from './DetailRightModel.vue'
export default {
  components: { DetailLeftModel, DetailRightModel },

}
</script>

<style>
.main-model {
  display: flex;
  border: 1px solid #d3d3d3;
  border-bottom: 1px;
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap1.png?c16f241f0c8db9b98d0b031c2a4ab999) repeat-y 100% 100%;
  width: 941px;
  min-height: 700px;
  margin: 0 auto;
  padding: 20px 20px 40px;
}
</style>