<template>
  <div class="nav-sub">
      <div class="wrap">
          <div class="navsub-text">
                <div class="sub-text gedan"><slot></slot></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* 子导航栏 */
.nav-sub {
  height: 35px;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
}
.nav-sub .navsub-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 180px;
  height: 100%;
}.navsub-text a {
  display: inline-block;
  line-height: 21px;
  padding: 0 13px;
  margin: 0px 17px;
}
.wrap {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}
.navsub-text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 180px;
  height: 100%;
}
.navsub-text a:hover,
.navsub-text a:nth-child(1) {
  background: #9B0909;
  border-radius: 20px;
}

</style>