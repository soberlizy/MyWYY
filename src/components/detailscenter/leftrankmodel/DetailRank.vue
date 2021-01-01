<template>
  <div class="detail-rank">
    <detail-tiltle>
      <template v-slot:big-tab>
        <a href="#" class="big-tab">榜单 </a>
      </template>
    </detail-tiltle>
    <div class="r-list-main">
        <!-- 飙升 -->
      <detail-rankmodel>
        <template v-slot:img>
          <img
            src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
            style="width: 80px; height: 80px"/>
        </template>
        <template v-slot:name>
         <h3 class="d-title r-tit">云音乐飙升榜</h3>
        </template>
      </detail-rankmodel>
       <!-- 飙升 -->
      <detail-rankmodel>
        <template v-slot:img>
          <img src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
                    style="width: 80px;height: 80px;"/>
        </template>
        <template v-slot:name>
         <h3 class="d-title r-tit">云音乐新歌榜</h3>
        </template>
      </detail-rankmodel>
       <!-- 飙升 -->
      <detail-rankmodel>
        <template v-slot:img>
         <img src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
                    style="width: 80px;height: 80px;"/>
        </template>
        <template v-slot:name>
         <h3 class="d-title r-tit">网易原创歌曲榜</h3>
        </template>
      </detail-rankmodel>
      
    </div>
  </div>
</template>

<script>
import DetailRankmodel from "../leftrankmodel/DetailRankmodel";
import DetailTiltle from "../DetailTiltle.vue";
export default {
  components: { DetailTiltle, DetailRankmodel },
};
</script>

<style>
.r-list-main {
  display: flex;
  height: 472px;
  width: 689px;
  margin-top: 20px;
  background: url(https://s2.music.126.net/style/web2/img/index/index_bill.png?28cfbb9f722e172edcaff86501e1f482);
}
.d-title {
  padding-top: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 106px;
}
.r-tit {
  color: #333;
}

</style>