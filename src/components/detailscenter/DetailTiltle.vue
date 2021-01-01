<template>
  <div class="hr-title">
          <div class="hr-left">
            <slot name="big-tab"></slot>
            <div class="tab">
                <slot name="tab"></slot>
            </div>
          </div>
          <div class="more">
              <!-- <slot name="more"></slot> -->
              <a class="hot-tab">更多</a>
            <i class="cor to-r">&nbsp;</i>
          </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hr-title {
  display: flex;
  height: 33px;
  justify-content: space-between;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  background: url(../../assets/img/index.png) no-repeat 0 9999px;
  background-position: -225px -156px;
}

.hr-title a {
  color: #333;
}
.hr-left {
  display: flex;
  justify-content: flex-start;
}
.big-tab {
  font-size: 20px;
  font-weight: normal;
}
.tab {
  margin: 7px 0 0 20px;
}
.hr-title .more {
  margin-left: 0px;
  margin-top: 9px;
  justify-self: self-end;
}
.hot-tab:hover {
  text-decoration: underline;
}
.title .cor {
  background: url(../../assets/img/topbar.png) no-repeat 0 9999px;
  display: block;
  position: absolute;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: 22px;
  background-position: -226px 0;
}
.to-r {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
  vertical-align: middle;
  background: url(../../assets/img/index.png);
  background-position: 0 -240px;
}
</style>