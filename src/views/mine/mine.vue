<template>
  <div class="mine">
    <div class="head">
      <div class="head-img">
        <a>
          <img src="../../assets/images/we.jpeg">
        </a>
      </div>
      <div class="head-info">
        <span class="info-name">百香果双响炮66</span>
        <span class="info-title">努力赚钱</span>
      </div>
    </div>
    <van-cell title="我的信息" is-link @click="onmessage"/>
    <van-cell title="我的订单" is-link @click="onorder"/>
    <van-cell title="我的地址" is-link @click="onaddress"/>
  </div>
</template>

<script>
import mixin from "../../components/mixins/mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      msg: "666",
      show:false
    };
  },
  created() {
    console.log("组件钩子被调用");
    console.log(this.$data);
  },
  methods: {
    onmessage() {
      this.$router.push({ path: "/info" });
    },
    onorder() {
      this.$router.push({ path: "/order" });
    },
    onaddress() {
      this.$router.push({ path: "/address" });
    },
    bar: function() {
      console.log("bar");
    },
    conflicting: function() {
      console.log("from self");
    }
  }
};
</script>

<style scoped lang="scss">
$cell-marginbottom: 10px;
.van-cell {
  margin-bottom: $cell-marginbottom;
}
.head {
  display: flex;
  height: 80px;
  background-color: #ff792b;
  .head-img {
    width: 100px;
    a {
      display: block;
      height: 50px;
      width: 50px;
      margin-top: 10px;
      margin-left: 25px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50px;
      }
    }
  }
  .head-info {
    flex: 1;
    margin-top: 15px;
    span {
      display: block;
      color: #fff;
    }
    .info-name {
      font-size: 20px;
      margin-bottom: 6px;
    }
    .info-title {
      font-size: 12px;
    }
  }
}
</style>
