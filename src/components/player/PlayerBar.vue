<template>
  <div class="music-palyer">
    <audio ref="audio" id="palyer" :src="$store.state.playMusic.path"></audio>
    <div class="palyer-button">
      <div class="palyer-spread"></div>
      <div class="bg" :class="{ 'bg-1': audio.lockStatus }">
        <div class="palyer-main">
          <div class="palyer-main-content">
            <!-- 上一首，播放，下一首 -->
            <player-btns></player-btns>
            <!-- 音乐的小图 -->
            <player-img></player-img>
            <!-- 中间模块 -->
            <div class="palyer-bar">
              <!-- 音乐信息（歌手、歌名） -->
              <div class="music-name">
                <a href="#" class="m_name">{{ $store.state.playMusic.name }}</a>
                <span>
                  <a href="#" class="m-author">
                    {{
                    $store.state.playMusic.author
                    }}
                  </a>
                </span>
                <a href="#" class="music-link"></a>
              </div>
              <!-- 进度条 -->
              <div class="music-bar" ref="musicBar">
                <div class="m-bar" ref="mbar" @click="clickBar($event)"></div>
                <div class="music-cur" ref="musicCur">
                  <span class="f-btn" ref="fbtn" @mousedown="mousedownBar($event)">●</span>
                </div>
                <span class="music-time">
                  <em class="m-thistime">{{ currentDuration }}</em>
                  /
                  <span class="m-totaltime">{{ totalDuration }}</span>
                </span>
              </div>
            </div>
            <!-- 收藏与分享 -->
            <player-oper></player-oper>
            <!--其他按钮-->
            <player-ctrl @volume="getVolume" @lockbar="LockBar"></player-ctrl>
          </div>
        </div>
        <!--锁定按钮 -->
        <div class="spread-rightbtn">
          <a class="lock-btn" @click="lock()" :class="{ 'lock-btn-1': audio.lockStatus }"></a>
        </div>
        <!-- 播放器条的补充div -->
        <div class="spread-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerBtns from "./PlayerBtns.vue";
import PlayerCtrl from "./PlayerCtrl.vue";
import PlayerImg from "./PlayerImg.vue";
import PlayerOper from "./PlayerOper.vue";
export default {
  components: {
    PlayerBtns,
    PlayerImg,
    PlayerOper,
    PlayerCtrl
  },
  data() {
    return {
      audio: {
        // 播放状态
        playing: false,
        // 当前音乐的地址：
        musicPath: "",
        // 当前播放的音乐位置
        musicindex: 0,
        // 音频当前播放时长
        currentTime: 0,
        // 音频最大播放时长
        maxTime: 0,
        minTime: 0,
        // 锁定状态
        lockStatus: false
      }
    };
  },
  watch: {
    //监听播放状态
    musicPlay(newval, oldval) {
      if (newval) {
        this.audioPlay();
        this.$store.commit("addmusic", this.$store.state.playMusic);
      } else {
        this.$refs.audio.pause();
      }
    },
    // 切歌播放音乐 更新信息
    playingMusic() {
      this.$store.commit("palyMusic");
      this.audioPlay();
      // this.changeMA();
    },
    // deep:true
    immediate: true
  },
  methods: {
    lock() {
      this.audio.lockStatus = !this.audio.lockStatus;
      this.$refs.audio.currentTime;
    },
    // 格式化时间的工具方法
    contime(second) {
      var date = new Date(second * 1000);
      return (
        ("0" + date.getMinutes()).slice(-2) +
        ":" +
        ("0" + date.getSeconds()).slice(-2)
      );
    },
    audioPlay() {
      this.$store.state.isplay = true;
      this.$nextTick(() => {
        this.$refs.audio.play();
      });
      setInterval(() => {
        this.curBar();
      }, 500);
    },
    // 进度条跟随
    curBar() {
      // 当前播放时长
      this.audio.currentTime = this.$refs.audio.currentTime;
      // 算出当前播放时长和总时长的之比
      var prop = this.audio.currentTime / this.audio.maxTime;
      // 进度条总长（-2是减去按钮的宽度的一半）
      let maxlength = this.$refs.mbar.offsetWidth - 2;
      // 当前应该播放的时长百分比
      var musiccur = prop.toFixed(4) * 100 + "%";
      // 更新按钮和当前进度位置
      this.$refs.fbtn.style.marginLeft = (prop * maxlength).toFixed(4) + "px";
      this.$refs.musicCur.style.width = musiccur;
      // 播放完成切换下一首
      if (this.$refs.audio.ended) {
        let thismusicindex = this.$store.state.musics.indexOf(
          this.$store.state.playMusic
        );
        thismusicindex =
          ++thismusicindex > this.$store.state.musics.length - 1
            ? 0
            : thismusicindex;
        this.$store.commit(
          "changePlayMusic",
          this.$store.state.musics[thismusicindex]
        );
      }
    }, // 拖拽进度条
    mousedownBar(event) {
      let that = this;
      document.onmousemove = function(event) {
        that.clickBar(event);
      };
      document.onmouseup = function() {
        this.onmousedown = null;
        this.onmousemove = null;
      };
    }, // 点击进度条
    clickBar(event) {
      // this.$store.commit("palyMusic");
      // 获取点击位置距离进度条最左边的距离
      var barleftsize = this.$refs.musicBar.offsetLeft;
      var clickbar;
      if (event.x - barleftsize < 0) {
        clickbar = 0;
      } else if (event.x - barleftsize > this.$refs.mbar.offsetWidth) {
        clickbar = this.$refs.mbar.offsetWidth - 2;
      } else {
        clickbar = event.x - barleftsize;
      }
      // 设置小圆圈的位置
      this.$refs.fbtn.style.marginLeft = clickbar + "px";
      // 设置进度条的位置
      this.$refs.musicCur.style.width = clickbar + "px";
      // 设置音乐的当前播放时间
      this.$refs.audio.currentTime =
        (clickbar / this.$refs.mbar.offsetWidth) * this.audio.maxTime;
      //让进度条跳转
      this.$store.state.isplay = true;
    },
    getVolume(data) {
      this.$refs.audio.volume = data;
    },
    LockBar(data) {
      this.audio.lockStatus = data;
    }
  },
  computed: {
    musicPlay() {
      return this.$store.state.isplay;
    },
    totalDuration() {
      return this.contime(this.audio.maxTime);
    },
    currentDuration() {
      return this.contime(this.audio.currentTime);
    },
    playingMusic() {
      return this.$store.state.playMusic;
    }
  },
  mounted() {
    this.$refs.audio.load();
    this.$refs.audio.oncanplay = () => {
      this.audio.maxTime = this.$refs.audio.duration;
    };
  }
};
</script>
<style>
.music-palyer {
  position: fixed;
  bottom: -45px;
  left: 0;
  right: 0;
  width: calc(100% + 15px);
  z-index: 9999;
  user-select: none;
}
.bg {
  display: flex;
  top: 0px;
  position: absolute;
  height: 53px;
  width: 100%;
  position: relative;
  transition: ease-out top 0.5s;
}
.bg-1 {
  top: -45px;
}
.palyer-main {
  display: flex;
  justify-content: center;
  height: 53px;
  width: 100%;
  margin-right: 67px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: 0 0px;
  background-repeat: repeat-x;
}
.spread-right {
  position: absolute;
  right: 0px;
  width: 15px;
  height: 54px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: 0 0px;
  background-repeat: repeat-x;
}
.palyer-main-content {
  display: flex;
  margin-top: 5px;
  width: 980px;
  height: 47px;
  margin-left: 52px;
}
.palyer-spread {
  top: -10px;
  position: absolute;
  width: 100%;
  height: 20px;
  cursor: pointer;
}
.palyer-button:hover > .bg {
  top: -45px;
}
.spread-rightbtn {
  position: absolute;
  right: 15px;
  width: 52px;
  height: 67px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: 0 -380px;
  top: -14px;
}
.lock-btn {
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: -80px -380px;
  display: block;
  width: 18px;
  height: 18px;
  margin: 6px 0 0 17px;
}
.lock-btn-1 {
  background-position: -100px -400px;
}
.palyer-bar {
  width: 608px;
  margin-left: 10px;
}
.music-bar {
  margin-top: 4px;
  position: relative;
  width: 493px;
}
.music-name {
  margin-top: 8px;
  margin-left: 8px;
}
.music-name span a {
  margin-left: 8px;
  color: #9b9b9b;
}
.m-bar {
  height: 9px;
  background: url(https://s2.music.126.net/style/web2/img/frame/statbar.png?de1a88cd3ed9616213978f7e497adba0);
  background-position: right 0;
}
.music-cur {
  position: absolute;
  height: 9px;
  top: 0;
  left: 0;
  width: 0%;
  background: url(https://s2.music.126.net/style/web2/img/frame/statbar.png?de1a88cd3ed9616213978f7e497adba0);
  background-position: left -66px;
}
.f-btn {
  position: absolute;
  top: -4px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  height: 15px;
  width: 15px;
  border-radius: 20px;
  background-color: rgb(234, 234, 235);
  cursor: pointer;
}
.f-btn {
  color: rgb(185, 24, 15);
}
.f-btn:hover {
  background-color: rgb(251, 252, 254);
}
.music-time {
  position: absolute;
  top: -3px;
  right: -84px;
  color: #797979;
  text-shadow: 0 1px 0 #121212;
}
.music-time em {
  color: #a1a1a1;
  font-style: normal;
  text-align: left;
}
.music-link {
  display: inline-block;
  margin-left: 13px;
  width: 14px;
  height: 15px;
  background: url(https://s2.music.126.net/style/web2/img/frame/playbar.png?c5e4da1ee05b1d56461f3e12a1c81865);
  background-position: -110px -103px;
}
</style>