<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4">
    <md-tab-bar v-model="current" :items="items" :has-ink="false" @change="onChange">
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item">
          <div class="icon">
			<i class="iconfont" v-bind:class="item.icon"></i>
          </div>
          <div class="text">
            <span v-text="item.label"></span>
          </div>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script>
import {Toast} from 'mand-mobile'
export default {
  name: "home",
  data() {
    return {
      current: 0,
      items: [
        { name: 0, label: "首页", icon: "icon-home" },
		{ name: 1, label: "商店", icon: "icon-shop" },
		{ name: 2, label: "购物车", icon: "icon-cart" },
		{ name: 3, label: "我的", icon: "icon-people" },
      ]
    };
  },
  methods: {
    onChange(item, index, prevIndex) {
      Toast.info(
        `index: ${index}, prevIndex: ${prevIndex}, label: ${item.label}`
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.md-example-child-tab-bar-4 {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .custom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
    .text {
      font-size: 20px;
    }
  }
}
</style>

