<template>
  <div class="music-list">
    <div class="music-list-title">
      播放列表(
      <span class="music-num-1">{{ $store.state.musics.length}}</span>
      )
    </div>
    <div class="music-list-main">
      <ul class="music-list-name">
        <li v-for="item in $store.state.musics" :key="item.id"  >
          <div @click="palyThisMusic(item)">{{ item.name}}</div>
          <div @click="palyThisMusic(item)">{{ item.author }}</div>
          <span class="list-del" @click="delMusic(index)">删除</span>
        </li>
      </ul>
      <div class="music-list-right">歌词</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    delMusic(item){
      this.$store.commit('deleteMusic',item)
    },
    palyThisMusic(item){
      this.$store.commit('changePlayMusic',item)
      this.$store.commit('palyMusic')
    }
  }
};
</script>

<style>
.music-list {
  top: -300px;
  left: -854px;
  position: absolute;
  height: 301px;
  width: 986px;
  background-color: black;
  opacity: 0.9;
  border: 1px #424242 solid;
  /* visibility: hidden; */
  z-index: 10;
}
.music-list-title {
  line-height: 40px;
  padding-left: 20px;
  font-size: 14px;
  color: #e2e2e2;
  height: 40px;
  width: 97.9%;
  border: 1px solid #424242;
}
.music-list-name {
  width: 558px;
  height: 100%;
  background: rgb(30, 31, 33);
  overflow-y: scroll;
  list-style-type: none;
}
.music-list-name::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgb(24, 24, 24);
}
.music-list-name::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, 0.5);
}
.music-list-name::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  background-color: black;
}
.music-list-name li {
  display: flex;
}
.music-list-name li:hover {
  background: rgb(22, 22, 23);
  cursor: pointer;
}
.music-list-name > li > div {
  padding-left: 20px;
  line-height: 28px;
  color: #fff;
}
.music-list-name > li > div:nth-child(1) {
  height: 28px;
  width: 300px;
}
.music-list-name > li > div:nth-child(2) {
  height: 28px;
  width: 150px;
}
.music-list-name > li > div:nth-child(3) {
  height: 28px;
  width: 100px;
}
.music-list-main {
  display: flex;
  height: 260px;
  width: 986px;
}
.music-list-right {
  width: 420px;
  height: 100%;
  background: rgb(60, 60, 59);
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
}
.list-del {
  color: #e2e2e2;
  display: inline-block;
  margin-top: 6px;
}
.list-del:hover{
  color: #ffffff;
}
</style>