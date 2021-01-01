<template>
  <div class="detail-new-disk">
    <detail-tiltle>
      <template v-slot:big-tab>
        <a href="#" class="big-tab">新碟上架 </a>
      </template>
    </detail-tiltle>
    <div class="n-disk">
      <div class="n-disk-main">
        <a href="#" class="disk-click-l bg-btn">&nbsp;</a>
        <div class="n-disk-list">
          <!-- 内容 -->
          <div class="n-disk-1" v-for="(item, index) in musics" :key="index">
            <div class="disk-dsc">
              <img
                src="http://p3.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg?param=100y100"
                class="d-img"
              />
              <a class="d-msk" @click="toPlay(index)"></a>
              <a class="d-play"></a>
            </div>
            <p class="d-title">
              <a class="d-tit">{{item.name}}</a>
              <a href="#" class="d-tit-play"></a>
              <a href="#" class="d-tit-add"></a>
              <a href="#" class="d-tit-coll"></a>
            </p>
            <p class="d-title">
              <a href="" class="d-author">{{item.author}}</a>
            </p>
          </div>
        </div>
        <!-- 右按钮 -->
        <a href="#" class="disk-click-r bg-btn">&nbsp;</a>
      </div>
    </div>
  </div>
</template>

<script>
import DetailTiltle from "../DetailTiltle.vue";
export default {
  name: "DetailNewDisk",
  data() {
    return {
      musics: [
        {
          id:1,
          name: "Smile Like You Used To",
          author: "Tim Walker",
          path: require("assets/musics/Tim Walker - Smile Like You Used To.mp3"),
          img:
            "http://p3.music.126.net/m9CkDd3lfcR4IFSbBGKq4w==/2542070883708394.jpg?param=34y34",
        },
        {
          id:2,
          name: "真的爱你",
          author: "beyond",
          path: require("assets/musics/真的爱你 (电影《摆渡人》插曲)-Beyond.mp3"),
          img:
            "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34",
        },
        {
          id:3,
          name: "海阔天空",
          author: "beyond",
          path: require("assets/musics/海阔天空 (网络电影《九五2班》插曲)-Beyond.mp3"),
          img:
            "https://p2.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=34y34",
        },
        {
          id:4,
          name: "光辉岁月",
          author: "beyond",
          path: require("assets/musics/光辉岁月 (电影《摆渡人》插曲)-Beyond.mp3"),
          img:
            "https://p1.music.126.net/g4HWPlA6pqYixCw6pFZuLg==/109951165460311280.jpg?param=34y34",
        },
        {
          id:5,
          name: "后来的我们",
          author: "五月天",
          path: require("assets/musics/后来的我们-五月天.mp3"),
          img:
            "http://p1.music.126.net/_B1Fn_Z1WxHzqGLzLZDf-w==/109951163263882447.jpg?param=34y34",
        },
      ],
    };
  },
  components: {
    DetailTiltle,
  },methods:{
    toPlay(index){
      this.$router.push({
        path:'/details',
        query:this.musics[index]
      })
    }
  },
};
</script>

<style>
.n-disk {
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
}
.n-disk-1ist {
  height: 184px;
  padding-left: 16px;
  border: 1px solid #fff;
}
.bg-btn {
  background: url(../../../assets/img/index.png) no-repeat;
  position: absolute;
  top: 71px;
  width: 17px;
  height: 17px;
}
.n-disk-list {
  height: 184px;
  padding-left: 16px;
  border: 1px solid #fff;
}
.disk-click-l {
  left: 4px;
  background-position: -260px -75px;
}
.n-disk-list {
  width: 660px;
  height: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.n-disk-1 {
  height: 150px;
}
.disk-click-r {
  right: 4px;
  background-position: -320px -75px;
}
.disk-dsc {
  position: relative;
}
.disk-dsc:hover .d-play {
  visibility: visible;
}
.d-img {
  display: block;
  margin-top: 9px;
  height: 100%;
}
.d-msk {
  position: absolute;
  top: 0px;
  width: 118px;
  height: 100px;
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?759cd41f34edca1860f86d785f88bb91);
  background-position: 0 -570px;
}
.d-play {
  position: absolute;
  background: url(https://s2.music.126.net/style/web2/img/iconall.png?99797f6be8965b9cbe79e62d91);
  left: 75px;
  top: 75px;
  width: 22px;
  height: 22px;
  background-position: 0 -85px;
  visibility: hidden;
}
.d-title {
  padding-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 106px;
}
.d-tit {
  color: #333;
}
.d-title {
  padding-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 106px;
}
.d-author {
  color: #666;
}
</style>