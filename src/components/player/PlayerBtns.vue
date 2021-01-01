<template>
  <div class="palyer-btns">
    <a href="javascript:;" class="palyer-pre palyer-btn" @click="preMusic"></a>
    <a
      href="javascript:;"
      class="palyer-paly palyer-btn"
      @click="audioPlay"
      :class="{'palyer-paly-true':$store.state.isplay}"
    ></a>
    <a href="javascript:;" class="palyer-next palyer-btn" @click="nextMusic"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    audioPlay() {
      this.$store.commit("changeIsplay");
      this.$store.commit("addmusic", this.$store.state.playMusic);
    },
    preMusic() {
      let thismusicindex = this.$store.state.musics.indexOf(
        this.$store.state.playMusic
      );
      thismusicindex =
        --thismusicindex < 0 ? this.$store.state.musics.length - 1 : thismusicindex;
      this.$store.commit(
        "changePlayMusic",
        this.$store.state.musics[thismusicindex]
      );
      this.audioPlay();
    },nextMusic(){
        let thismusicindex = this.$store.state.musics.indexOf(
        this.$store.state.playMusic
      );
      thismusicindex =
        ++thismusicindex > this.$store.state.musics.length - 1 ? 0 : thismusicindex;
      this.$store.commit(
        "changePlayMusic",
        this.$store.state.musics[thismusicindex]
      );
      this.audioPlay();
    }
  }
};
</script>
<style>
.palyer-btns {
  display: flex;
  align-items: center;
  width: 137px;
}
.palyer-btn {
  display: block;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
}
.palyer-pre {
  background-position: 0 -130px;
}
.palyer-pre:hover {
  background-position: -30px -130px;
}
.palyer-paly {
  width: 36px;
  height: 36px;
  background-position: 0 -204px;
}
.palyer-paly:hover {
  background-position: -40px -204px !important;
}
.palyer-next {
  background-position: -80px -130px;
}
.palyer-next:hover {
  background-position: -110px -130px;
}
.palyer-paly-true {
  width: 36px;
  height: 36px;
  background-position: 0 -165px;
}
.palyer-paly-true:hover {
  background-position: -40px -165px !important;
}
</style>