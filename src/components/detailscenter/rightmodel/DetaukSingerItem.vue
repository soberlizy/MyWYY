<template>
  <div class="singer-list-1">
    <a href="#" class="singer-item">
      <div class="singer-head">
        <!-- <img
          src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
          class="singer-img"
        /> -->
        <slot name="singerimg"></slot>
      </div>
      <div class="singer-ifo">
        <h4 class="singer-name">
          <!-- <span>张惠妹aMEI</span> -->
          <slot name = "singername"></slot>
        </h4>
        <span class="singer-dsc"> 
            <!-- <span>台湾歌手张惠妹</span> -->
            <slot name="singerdes"></slot>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.singer-list-1{
  margin-top: 14px;
  width: 210px;
  height: 62px;
  background: #fafafa;
}
.singer-item{
  display: flex;
  align-items: center;
}
.singer-ifo{
  padding-left: 14px;
}
.singer-name{
  font-size: 14px;
  color: #333;
}.singer-dsc {
  display: block;
  margin-top: 8px;
  color: #666;
}
</style>