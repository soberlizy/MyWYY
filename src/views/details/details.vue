<template>
  <div class="main-model">
    <div class="g-wrap">
      <div class="m-info f-cb">
        <div class="cover u-cover u-cover-dj">
          <img
            src="http://p4.music.126.net/M3IfYi1iYv6VIXgCUNOeuQ==/109951165422364981.jpg?param=200y200"
          />
        </div>
      </div>
      <div class="cnt">
        <h2 class="f-ff2 f-brk">{{ $route.query.name }}</h2>
        <div class="user f-cb">
          <img :src="$route.query.img" />
          <span class="name"> {{ $route.query.author }} </span>
        </div>
      </div>
      <div class="cnt1 cnt">
        <div class="user f-cb">
          <button style="width: 70px; height: 25px" @click="toPlay">
            播放
          </button>
          <button style="width: 70px; height: 25px" @click="addMusic">添加</button>
          <button style="width: 70px; height: 25px">分享</button>
          <button style="width: 70px; height: 25px">下载</button>
        </div>
        <div class="user f-cb">歌词：</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toPlay() {
      this.$store.commit("changePlayMusic", this.$route.query);
      this.$store.commit("addmusic", this.$route.query);
    },addMusic(){
      this.$store.commit("addmusic", this.$route.query);
    }
  },
};
</script>

<style>
.details {
  height: 1000px;
  width: 100%;
}
.g-wrap {
  padding: 47px 30px 40px 39px;
  height: 337px;
  width: 640px;
}
.cnt {
  margin-left: 230px;
  height: 50px;
}
.cover {
  position: relative;
  display: inline;
  margin: 0 -220px 0 0;
}
.u-cover img {
  float: left;
    width: 200px;
  height: 200px;
  display: block;
}
.cnt h2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.user {
  margin: 8px 0 20px;
  line-height: 35px;
  position: relative;
}
.m-info .tit {
  margin-left: 64px;
  position: relative;
}
.name {
  color: #0c73c2;
  position: absolute;
  left: 51px;
}
.cnt1 {
  margin-top: 30px;
}
.cnt1 button {
  margin-right: 10px;
}
</style>