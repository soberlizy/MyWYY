<template>
  <div
    class="banner"
    id="banner"
    :style="{ backgroundImage: 'url(' + imgsbg[imgindex] + ')' }"
  >
    <div class="banner-main">
      <!-- 上一张按钮 -->
      <banner-left-btn
        @mousemove="stop"
        @mouseleave="start"
        @click="preimg()"
      ></banner-left-btn>
      <div class="rotation">
        <!--轮播图片-->
        <banner-imgs
          :imgindex="imgindex"
          @mousemove="stop"
          @mouseleave="start"
        ></banner-imgs>
        <!-- 小图标 -->
        <banner-icons 
        :imgindex="imgindex"
         @itemClick="itemClick"></banner-icons>
      </div>
      <!-- 下载 -->
      <banner-download></banner-download>
      <!-- 下一张 -->
      <banner-right-btn
        @mousemove="stop"
        @mouseleave="start"
        @click="nextimg"
      ></banner-right-btn>
    </div>
  </div>
</template>

<script>
import BannerDownload from "./BannerDownload.vue";
import BannerIcons from "./BannerIcons.vue";
import BannerImgs from "./BannerImgs.vue";
import BannerLeftBtn from "./BannerLeftBtn.vue";
import BannerRightBtn from "./BannerRightBtn.vue";
export default {
  components: {
    BannerLeftBtn,
    BannerImgs,
    BannerIcons,
    BannerDownload,
    BannerRightBtn,
    BannerLeftBtn,
    BannerDownload,
  },
  data() {
    return {
      imgsbg: [
        [
          "http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/vofJSatUOm88E2NHtSnovQ==/109951165537605415.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/TAIZcsxsP4_woeriwMNR4Q==/109951165539975878.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/stZxwKU7X5FBcmB2uJXuaA==/109951165540888053.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/7AQR8rnStD5Hgu6_n12sqA==/109951165540302472.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/dAL7PsAhV85t0Uwk63hrDw==/109951165539765762.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/kfpjIf7uI2U3DdpwmheCgQ==/109951165546835368.jpg?imageView&blur=40x20",
        ],
        [
          "http://p1.music.126.net/8tI6FrHD51T1kw90BapSwQ==/109951165540314347.jpg?imageView&blur=40x20",
        ],
      ],
      imgindex: 0,
      timer: 0,
    };
  },
  methods: {
    //   定时轮播
    run() {
      this.timer = setInterval(() => {
        this.imgindex =
          ++this.imgindex > this.imgsbg.length - 1 ? 0 : this.imgindex;
      }, 2000);
    },
    // 停止轮播
    stop() {
      clearInterval(this.timer);
    },
    start() {
      this.run();
    }, // 切换到上一张
    preimg() {
      this.imgindex =
        --this.imgindex < 0 ? this.imgsbg.length - 1 : this.imgindex;
    },
    // 下一张
    nextimg() {
      this.imgindex =
        ++this.imgindex > this.imgsbg.length - 1 ? 0 : this.imgindex;
    },
    // 获取iocn的index赋值给imgindex
    itemClick(index){
        this.imgindex=index;
    }
  },
  mounted() {
    this.run();
  },
};
</script>

<style>
.banner {
  /* background-image: url(http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&blur=40x20); */
  background-size: 6000px;
  background-position: center center;
  height: 285px;
}
.banner-main {
  display: flex;
  justify-content: center;
}
.rotation {
  display: flex;
  height: 284px;
  width: 730px;
  overflow: hidden;
  position: relative;
}
</style>