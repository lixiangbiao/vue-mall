<template>
  <div class="header">
    <van-nav-bar :title="headtitle" v-show="headerIndex === 0"/>
    <van-nav-bar :title="headtitle" left-arrow @click-left="onClickLeft" v-show="headerIndex === 1"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      headtitle: ""
    };
  },
  watch: {
    $route(to, from) {
      this.headtitle = to.name;
    }
  },
  computed:{
      ...mapState({
            headerIndex: (state) => state.headfoot.headerIndex, // 第二种写法
        }),
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
  }
};
</script>
<style lang="scss" scoped>
    $background-color:#ff792b;
    $text-color:#fff;
    .header{
        z-index: 1;
        //height: 46px;
        .van-nav-bar{
            position: fixed;
            height: 46px;
            width: 100%;
            top:0;
            z-index: 10;
            background: $background-color;
            .van-nav-bar__title{
                color: $text-color;
            }
            .van-icon{
                color: $text-color;
            }
        }
        .van-hairline--bottom::after{
            border-bottom-width:0
        }
        
    }
</style>

