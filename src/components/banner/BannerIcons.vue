<template>
  <div class="rotation-icons">
    <a
      href="javascript:;"
      class="rotation-icon"
      :class="{ 'icons-this': index == imgindex }"
      v-for="(item, index) in 10"
      :key="index"
      @mousemove="changeindex(index)"
    ></a>
  </div>
</template>

<script>
export default {
  name: "BannerIcons",
  props: {
    imgindex: Number,
  },
  data() {
    return {
      icons: 10,
    }
  },methods:{
      changeindex(index){
          this.$emit('itemClick',index);
      }
  }
};
</script>

<style>
.rotation-icons {
  position: absolute;
  top: 259px;
  left: 0;
  width: 730px;
  height: 20px;
  text-align: center;
}
.rotation-icons a {
  display: inline-block;
  background: url(../../assets/img/banner.png);
  background-position: 3px -343px;
  width: 20px;
  height: 20px;
  background-position: 3px -343px;
}
.rotation-icons a:hover,
.icons-this {
  background-position: -16px -343px !important;
}
/* .icons-this{
  background-position: -16px -343px !important;
} */
</style>