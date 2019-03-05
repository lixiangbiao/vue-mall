<template>
  <div class="addressadd">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast} from "vant";
import areaInfo from '../../assets/area'
export default {
  data() {
    return {
      areaList:areaInfo,
      searchResult: []
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
