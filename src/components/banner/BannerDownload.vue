<template>
  <div class="download">
    <a href="#" class="download-btn"> </a>
    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.download {
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(https://s2.music.126.net/style/web2/img/index/download.png?d88b3a45d5320accd0d4a7ddbf3c01c8);
}
.download,.download-btn:hover  {
  background: url(https://s2.music.126.net/style/web2/img/index/download.png?d88b3a45d5320accd0d4a7ddbf3c01c8);
}
.download .download-btn {
  display: block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
  background-position: 0 9999px;
}
.download-btn:hover {
  background-position: 0 -290px;
}
.download p {
  margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
}
</style>