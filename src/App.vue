<template>
<div id="app" class="wrapper">
<main-tab-bar></main-tab-bar>
<main-sub-bar></main-sub-bar>
<main-player></main-player>
<router-view></router-view>
<router-link to="/"></router-link>
<my-footer></my-footer>
</div>
</template>
<script>
import MainPlayer from './components/content/MainPlayer.vue'
import MainSubBar from './components/content/MainSubBar.vue'
import MainTabBar from './components/content/MainTabBar.vue'
import MyFooter from './components/footer/MyFooter.vue'
export default {
  name :'app',
  components:{
    MainTabBar,
    MainSubBar,
    MainPlayer,
    MyFooter,
  }
}
</script>
<style>
  @import 'assets/css/base.css';
</style>
