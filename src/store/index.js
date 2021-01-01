import { createStore } from 'vuex'

export default createStore({
  state: {
    musics:[],
    isplay:false,
    playMusic:{
      id:1,
      name: "Smile Like You Used To",
      author: "Tim Walker",
      path: require("assets/musics/Tim Walker - Smile Like You Used To.mp3"),
      img:
        "http://p3.music.126.net/m9CkDd3lfcR4IFSbBGKq4w==/2542070883708394.jpg?param=34y34",
    },
  },
  mutations: {
    addmusic(state, playMusicItem) {
      let isadd= true;
     if(this.state.musics.indexOf(playMusicItem)==-1){
       for(let item in this.state.musics){
         isadd = !(this.state.musics[item].path==playMusicItem.path)
       }
       if(isadd){
        this.state.musics.push(playMusicItem);
       }
     }
    },
    palyMusic(state){
      state.isplay=true;
    },
    stopMusic(state){
      state.isplay=false;
    },
    changeIsplay(state){
      state.isplay=!state.isplay;
    },
    changePlayMusic(state,newPlayMusic){
      state.playMusic=newPlayMusic;
    },
    deleteMusic(state,item){
      state.musics.splice(item,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
