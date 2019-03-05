<template>
  <div id="app">
    <Header></Header>
    <div class="page">
      <div v-bind:class="{'container-footrt':footShow}" class="container">
        <!-- <transition name="vux-pop-in"> -->
        <router-view v-wechat-title="$route.meta.title"/>
        <!-- </transition> -->
      </div>
    </div>
    <Footer v-show="footShow"></Footer>
  </div>
</template>
<script>
import Footer from "./components/footer";
import Header from "./components/header";
import { mapState } from "vuex";
export default {
  components: {
    Footer,
    Header
  },
  computed: {
    ...mapState({
      //tabindex: 'tabindex', // 第一种写法
      footShow: state => state.headfoot.footShow // 第二种写法
    })
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  //  overflow-y: scroll;
  //  -webkit-overflow-scrolling: touch;
}
.container {
  flex: 1;
  padding-top: 45px;
  //padding-bottom: 50px;
}
.container-footrt{
    padding-bottom: 50px;
}

.slide-back-enter-active,
.slide-back-leave-active {
  transition: all 0.5s;
  width: 100%;
  left: 0;
  position: fixed;
}

.slide-back-enter,
.slide-back-leave-to {
  transition: all 0.5s;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 600ms;
  width: 100%;
  left: 0;
  position: fixed;
  //position: absolute;
  //backface-visibility: hidden;
  //perspective: 1000;

  // will-change: transform;
  // transition: all .3s;
  // position: absolute;
  // width:100%;
  // left:0;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  //transform: translate3d(100%, 0, 0);
  transform: translateX(-100%);
}

.vux-pop-in-leave-active {
  opacity: 0;
  //transform: translate3d(-100%, 0, 0);
  transform: translateX(100%);
}
</style>
