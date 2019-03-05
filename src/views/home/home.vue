<template>
  <div class="home">
    <div>
      <van-swipe :autoplay="5000" :height="120" indicator-color="#ff5122">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="good-item">
      <div class="goods-title">
        <p>零食</p>
      </div>
      <div class="goods-list">
        <div class="goods-info">
          <div class="info">
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i2/3243356429/O1CN017wZrDn1xMWo57Zqgf_!!0-item_pic.jpg_360x360xzQ75s100.jpg"
              >
              <div class="img-bg">
              </div>
              <div class="info-detail">
                <span>abd吐司面包营养早餐手撕面包夹心糕点蛋糕零食食品整箱面包年货</span>
                <div class="info-pay">
                  <span class="price">￥28.8</span>
                  <span class="number">244付款</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i3/880734502/O1CN01ILqG831j7xacztBnj_!!0-item_pic.jpg_360x360xzQ75s100.jpg"
              >
              <div class="info-detail">
                <span>【三只松鼠_手撕面包1kg/整箱】网红早餐营养食品小零食蛋糕点心</span>
                <div class="info-pay">
                  <span class="price">￥67.8</span>
                  <span class="number">293付款</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="good-item">
      <div class="goods-title">
        <p>数码</p>
      </div>
      <div class="goods-list">
        <div class="goods-info">
          <div class="info">
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i4/1714128138/O1CN01DIYXWZ29zFgVemDpZ_!!0-item_pic.jpg_360x360xzQ75s100.jpg"
              >
              <div class="img-bg">
              </div>
              <div class="info-detail">
                <span>【6+128G 2499元起】Xiaomi/小米小米8年度旗舰全面屏骁龙845指纹版智能拍照游戏手机旗舰官方</span>
                <div class="info-pay">
                  <span class="price">￥2499</span>
                  <span class="number">234299付款</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i2/2838892713/O1CN01H04ZH71Vub1p3EzZX_!!0-item_pic.jpg_360x360xzQ75s100.jpg"
              >
              <div class="info-detail">
                <span>【买赠蓝牙音箱 享6期免息】Huawei/华为 Mate 20 全面屏珍珠屏超大广角徕卡三镜头麒麟980人工智能芯片手机</span>
                <div class="info-pay">
                  <span class="price">￥3999</span>
                  <span class="number">17274</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="good-item">
      <div class="goods-title">
        <p>服饰</p>
      </div>
      <div class="goods-list">
        <div class="goods-info">
          <div class="info">
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i3/1030765146/TB2sZ_xyb5YBuNjSspoXXbeNFXa_!!1030765146.jpg_360x360xzQ75s100.jpg"
              >
              <div class="img-bg">
              </div>
              <div class="info-detail">
                <span>sunday seoul / 法式浪漫 镂空蕾丝小碎花梦幻网纱无袖背心连衣裙</span>
                <div class="info-pay">
                  <span class="price">￥138</span>
                  <span class="number">251付款</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
            <a>
              <img
                src="https://gw.alicdn.com/imgextra/i1/3010847728/O1CN01Vx0aZD26xTHmXCRW9_!!0-item_pic.jpg_360x360xzQ75s100.jpg"
              >
              <div class="info-detail">
                <span>法式复古裙山本很仙的两件套套装蕾丝网纱连衣裙女装2019新款春装</span>
                <div class="info-pay">
                  <span class="price">￥98</span>
                  <span class="number">2567</span>
                  <i class="iconfont icon-gouwucheman"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
        "https://gw.alicdn.com/imgextra/i4/99/O1CN0113v8ea1CbNiByK490_!!99-0-lubanu.jpg",
        "https://gw.alicdn.com/imgextra/i3/35/O1CN01V7GoxL1C84MYyL3xB_!!35-0-lubanu.jpg"
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.home {
  .van-swipe {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .good-item {
    margin-top: 4px;
    .goods-title {
      padding: 6px 12px;
      font-size: 18px;
      background: #ffffff;
    }
    .goods-list {
      padding: 0 12px;
      .info {
        display: flex;
        justify-content: space-between; //两端对齐，项目之间的间隔都相等
        a {
          width: 171px;
          height: 255px;
          margin-top: 4px;
          overflow: hidden;
          background: #ffffff;
          position: relative;
          img {
            display: flex;
            width: 171px;
            height: 171px;
            object-fit: cover;
          }
          .img-bg{
              position: absolute;
              top: 0px;
                left: 0px;
                height: 171px;
                width: 171px;
                background-color: rgba(0, 0, 0, 0.02);
          }
          .info-detail {
            display: flex;
            flex-direction: column;
            height: 84px;
            padding: 10px;
            justify-content: space-between;
            box-sizing: border-box;
            > span {
              font-size: 13px;
              width: 151px;
              height: 38px;
              line-height: 21px;
              color: rgb(51, 51, 51);
              overflow: hidden;
            }
            .info-pay {
              margin-top: 6px;
              height: 18px;
              display: flex;
              span{
                display: block;
                font-size: 12px;
                height: 18px;
                flex: 1;
              }
              .price {
                display: flex;
                align-items:center;
                color: rgb(255, 80, 0);
              }
              .number {
                display: flex;
                justify-content:center;
                align-items:center;
                color: rgb(153, 153, 153);
              }
              i{
                  width: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
