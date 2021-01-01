<template>
  <div>
    <player-bar></player-bar>
  </div>
</template>

<script>
import PlayerBar from "../player/PlayerBar";
import PlayerBtns from "../player/PlayerBtns.vue";
export default {
  name: "MainPlayer",
  components: {
    PlayerBar,
    PlayerBtns,
  },
};
</script>

<style>
</style>