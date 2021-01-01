<template>
  <div class="palyer-img">
    <img
      class="music-img"
      :src="$store.state.playMusic.img"
    />
    <a href="#" class="img-a"></a>
  </div>
</template>
<script>
export default {};
</script>

<style>
.palyer-img {
  position: relative;
  display: flex;
  align-items: center;
}
.palyer-img img {
  width: 34px;
  height: 34px;
}
.img-a {
  position: absolute;
  top: 7px;
  left: 0px;
  display: block;
  width: 34px;
  height: 35px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: 0 -80px;
}
</style>