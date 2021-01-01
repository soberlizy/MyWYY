<template>
  <div class="anchor-list-1">
    <a href="#" class="anchor-img">
      <!-- <img
        src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40"
      /> -->
      <slot name="anchorimg"></slot>
    </a>
    <div class="anchor-info">
      <p>
        <a href="#" class="anchor-name"> <slot name="anchorname"></slot></a>
      </p>
      <p class="anchor-name-dsc"><slot name="anchornamedsc"></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.anchor-list-1 {
  display: flex;
  float: left;
  width: 210px;
  height: 50px;
}
.anchor-info {
  margin-left: 10px;
}
.anchor-name {
  color: #000;
}
.anchor-name-dsc {
  color: #666;
  display: inline-block;
  margin-top: 5px;
}
</style>