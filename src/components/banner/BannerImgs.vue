<template>
  <div class="rotation-imgs">
    <a href="#">
      <img
        class="rotation-img"
        :src="imglist[imgindex]"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "BannerImg",
  props: {
      imgindex: Number,
  },
  data() {
    return {
      imglist: [
        "http://p1.music.126.net/kTrKiEURddarIEoDKYOwWA==/109951165528290386.jpg?imageView&quality=89",
        "http://p1.music.126.net/vofJSatUOm88E2NHtSnovQ==/109951165537605415.jpg?imageView&quality=89",
        "http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&quality=89",
        "http://p1.music.126.net/TAIZcsxsP4_woeriwMNR4Q==/109951165539975878.jpg?imageView&quality=89",
        "http://p1.music.126.net/stZxwKU7X5FBcmB2uJXuaA==/109951165540888053.jpg?imageView&quality=89",
        "http://p1.music.126.net/7AQR8rnStD5Hgu6_n12sqA==/109951165540302472.jpg?imageView&quality=89",
        "http://p1.music.126.net/AaeF99qPWALAr4y_Y11TfQ==/109951165539819938.jpg?imageView&quality=89",
        "http://p1.music.126.net/dAL7PsAhV85t0Uwk63hrDw==/109951165539765762.jpg?imageView&quality=89",
        "http://p1.music.126.net/kfpjIf7uI2U3DdpwmheCgQ==/109951165546835368.jpg?imageView&quality=89",
        "http://p1.music.126.net/8tI6FrHD51T1kw90BapSwQ==/109951165540314347.jpg?imageView&quality=89",
      ],
    };
  },methods:{
    //   stop(){
    //       this.timer=
    //   },
    }
};
</script>

<style>
.rotation-imgs {
  display: flex;
  height: 284px;
  width: 730px;
}
.rotation-img {
  width: 730px;
}
</style>