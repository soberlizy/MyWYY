<template>
  <!-- 其他按钮 -->
  <div class="palyer-ctrl">
    <!-- 音量条 -->
    <div class="volume-bar-bg" v-show="states.volumeStatus">
      <input
        class="volume-input"
        type="range"
        @input="changeVolume"
        v-model="states.volume"
        :style="{'background-size': states.volume+'%'}"
      />
    </div>
    <!-- 音量按钮 -->
    <div>
      <a class="palyer-volume icn" @click="clickVolume"></a>
    </div>
    <!-- 播放方式 -->
    <div>
      <a class="palyer-mode-default icn"></a>
    </div>
    <!-- 音乐列表 -->
    <player-list v-show="states.listStatus"></player-list>
    <!-- 音乐列表的按钮 -->
    <span class="palyer-musiclist">
      <a class="music-num" @click="clickList">{{ $store.state.musics.length}}</a>
    </span>
  </div>
</template>

<script>
import PlayerList from "./PlayerList.vue";
export default {
  name: "PlayerCtrl",
  data() {
    return {
      states: {
        //音乐的播放方式 1是随机 2 是顺序 0是单曲
        type: 1,
        // 音量是否弹出
        volumeStatus: false,
        volume: 50,
        // 音乐列表是否显示
        listStatus: false
      }
    };
  },
  methods: {
    // 显示或隐藏列表
    clickList() {
      this.states.listStatus = !this.states.listStatus;
        this.$emit("lockbar", this.states.listStatus);
    },
    // 音量调节
    clickVolume() {
      this.states.volumeStatus = !this.states.volumeStatus;
    },
    changeVolume() {
      this.$emit("volume", this.states.volume / 100);
    }
  },
  components: { PlayerList }
};
</script>

<style>
.icn {
  float: left;
  width: 25px;
  height: 25px;
  margin: 11px 2px 0 0;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865)
    no-repeat 0 9999px;
}
.palyer-ctrl {
  display: flex;
  position: relative;
  width: 113px;
  padding-left: 13px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865)
    no-repeat 0 9999px;
  background-position: -147px -238px;
}
.volume-bar-bg {
  position: absolute;
  top: -70px;
  left: -33px;
  width: 113px;
  height: 32px;
  background-color: #272727;
  transform: rotate(-90deg);
  line-height: 30px;
  opacity: 0.9;
  z-index: 20;
  /* visibility: hidden; */
}

.volume-input {
  -webkit-appearance: none; /*清除系统默认样式*/
  display: inline-block;
  background: -webkit-linear-gradient(red, red) no-repeat, #ddd;
  background-size: 50% 100%;
  width: 100px;
  height: 5px;
  background-color: black;
  border: none;
  outline: none;
}
/*拖动块的样式*/
.volume-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #fff;
  border-radius: 50%;
}
.palyer-volume {
  background-position: -2px -248px;
}
.palyer-volume:hover {
  background-position: -31px -248px;
}

.palyer-mode-default {
  background-position: -66px -248px;
}
.palyer-mode-default:hover {
  background-position: -93px -248px;
}
/* 循环播放 */
.palyer-mode-cycle {
  background-position: -3px -344px;
}
.palyer-mode-cycle:hover {
  background-position: -33px -344px;
}
/* 单曲循环 */
.palyer-mode-single {
  background-position: -66px -344px;
}
.palyer-mode-single:hover {
  background-position: -93px -344px;
}

.palyer-musiclist {
  float: left;
  width: 59px;
  height: 36px;
}
.music-num {
  float: left;
  margin: 11px 2px 0 0;
  display: block;
  text-align: center;
  line-height: 27px;
  height: 25px;
  width: 68px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865)
    no-repeat 0 9999px;
  background-position: -42px -68px;
}
</style>