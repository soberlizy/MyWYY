<template>
    <div class="srchbg">
      <span class="parent">
        <input
          type="text"
          class="search-txt"
          placeholder="音乐/视频/电台/用户"/>
      </span>
    </div>
</template>
<script>
export default {};
</script>

<style>
.srchbg {
  float: right;
  width: 158px;
  height: 32px;
}
.nav-search .srchbg {
  margin-top: 19px;
  background-color: #fff;
  border-radius: 32px;
}
.srchbg {
  background: url(../../assets/img/topbar.png) no-repeat;
  background-position: 0 -99px;
}
 .parent {
  display: block;
  position: relative;
  margin: 8px 0 0 30px;
}
 .parent input {
  color: #333;
  line-height: 16px;
  width: 95%;
}
.search-txt:focus {
  outline: none;
}
.search-txt {
  border-style: none
}
</style>