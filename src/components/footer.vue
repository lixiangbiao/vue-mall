<template>
  <div class="footers">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item >
        <i slot="icon" class="iconfont icon-home" ></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item >
        <i slot="icon" class="iconfont icon-shop" ></i>
        <span>商店</span>
      </van-tabbar-item>
      <van-tabbar-item v-bind:dot="cartln>0">
        <i slot="icon" class="iconfont icon-cart" ></i>
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item >
        <i slot="icon" class="iconfont icon-people" ></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "footers",
  data() {
    return {
      active: 0,
    //   items: [
    //     { name: 0, label: "首页", icon: "icon-home" },
    //     { name: 1, label: "商店", icon: "icon-shop" },
    //     { name: 2, label: "购物车", icon: "icon-cart" },
    //     { name: 3, label: "我的", icon: "icon-people" }
    //   ]
    };
  },
  computed:{
      ...mapState({
          cartln:state=>state.cart.length,
      })
  },
  watch: {
    $route(to, from) {
      switch (to.path) {
        case "/home":
          this.active = 0;
          break;
        case "/shop":
          this.active = 1;
          break;
        case "/cart":
          this.active = 2;
          break;
        case "/mine":
          this.active = 3;
          break;
        default:
          this.active = 0;
      }
    }
  },
  methods: {
    onChange(active) {
      switch (active) {
        case 0:
          this.$router.push({ path: "/home" });
          break;
        case 1:
          this.$router.push({ path: "/shop" });
          break;
        case 2:
          this.$router.push({ path: "/cart" });
          break;
        case 3:
          this.$router.push({ path: "/mine" });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.footers{
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1;
}
i {
  display: block;
  font-size: 18px;
}
</style>
