<template>
  <div class="cart">
    <div class="item-list">
      <div class="item-cb">
        <div>
            <div>
                <van-checkbox v-model="checked" checked-color="#ff5212"></van-checkbox>
            </div>
        </div>
      </div>
      <div class="item-detail">
        <div>
          <div class="item-img">
            <a>
              <img
                src="https://gw.alicdn.com/bao/uploaded/i2/725677994/O1CN01SkWUbm28vIeBjPwq4_!!0-item_pic.jpg_200x200q50s150.jpg_.webp"
              >
            </a>
          </div>
          <div class="item-info">
            <p class="title">TC巧克力味爆浆软心曲奇饼干办公室休闲零食茶点纯手工零食品156g</p>
            <div class="ico-img">
              <span>
                <img src="https://img.alicdn.com/bao/uploaded/TB1ayLgDhjaK1RjSZFAwu2dLFXa.png">
              </span>
              <span>
                <img src="https://gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png">
              </span>
            </div>
            <div class="item-logo-text">
              <div class="item-logo-title">天猫超市 满149减15</div>
            </div>
            <div class="pay">
                <div class="pay-price">
                    <div class="price">13.8</div>
                    <div class="weight">0.213</div>
                </div>
                <div class="edit-quantity">
                    <van-stepper v-model="value"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-cb">
        <div>
            <div>
                <van-checkbox v-model="checked" checked-color="#ff5212"></van-checkbox>
            </div>
        </div>
      </div>
      <div class="item-detail">
        <div>
          <div class="item-img">
            <a>
              <img
                src="https://gw.alicdn.com/bao/uploaded/i2/725677994/O1CN01SkWUbm28vIeBjPwq4_!!0-item_pic.jpg_200x200q50s150.jpg_.webp"
              >
            </a>
          </div>
          <div class="item-info">
            <p class="title">TC巧克力味爆浆软心曲奇饼干办公室休闲零食茶点纯手工零食品156g</p>
            <div class="ico-img">
              <span>
                <img src="https://img.alicdn.com/bao/uploaded/TB1ayLgDhjaK1RjSZFAwu2dLFXa.png">
              </span>
              <span>
                <img src="https://gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png">
              </span>
            </div>
            <div class="item-logo-text">
              <div class="item-logo-title">天猫超市 满149减15</div>
            </div>
            <div class="pay">
                <div class="pay-price">
                    <div class="price">13.8</div>
                    <div class="weight">0.213</div>
                </div>
                <div class="edit-quantity">
                    <van-stepper v-model="value"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-cb">
        <div>
            <div>
                <van-checkbox v-model="checked" checked-color="#ff5212"></van-checkbox>
            </div>
        </div>
      </div>
      <div class="item-detail">
        <div>
          <div class="item-img">
            <a>
              <img
                src="https://gw.alicdn.com/bao/uploaded/TB1zfSSx1ySBuNjy1zdL6RPxFXa_200x200q50s150.jpg_.webp"
              >
            </a>
          </div>
          <div class="item-info">
            <p class="title">欧普普通吊顶换气扇厨房卫生间强力排气排风扇排风静音8/10/12寸</p>
            <div class="ico-img">
              <span>
                <img src="https://img.alicdn.com/bao/uploaded/TB1ayLgDhjaK1RjSZFAwu2dLFXa.png">
              </span>
              <span>
                <img src="https://gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png">
              </span>
            </div>
            <div class="item-logo-text">
              <div class="item-logo-title">天猫超市 满149减15</div>
            </div>
            <div class="pay">
                <div class="pay-price">
                    <div class="price">118</div>
                    <!-- <div class="weight">0.213</div> -->
                </div>
                <div class="edit-quantity">
                    <van-stepper v-model="value"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="item-all">
        <div class="ft-cb">
            <van-radio checked-color="#ff5212"></van-radio>
        </div>
        <div class="qx">全选</div>
        <div class="pay">
            <div class="pay-price">
                <span class="hj">合计:</span>
                <p class="price"><span>￥{{price}}</span></p>
            </div>
        </div>
        <div class="btn">
            <p><span>结算</span><span>(</span><span>{{number}}</span><span>)</span></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      value: 1,
      price:0.00,
      number:0
    };
  }
};
</script>

<style scoped lang="scss">
.cart{
    position: relative;
}
.item-list {
  width: 100%;
  padding-left: 0;
  background: #fff;
  display: flex;
  font-size: 24px;
  .item-cb {
    width: 44px;
    margin-right: -12px;
    div{
        height: 120px;
        display: flex;
        align-items: center;/*水平居中*/
        justify-content: center; /*垂直居中*/
    }
  }
  .item-detail {
    flex: 1;
    > div {
      display: flex;
      width: 100%;
      .item-img {
        width: 98px;
        margin: 6px 0 6px 12px;
        background: #fff;
        overflow: hidden;
        a {
          width: 98px;
          height: 98px;
          text-align: center;
          overflow: hidden;
          display: block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .item-info {
        flex: 1;
        padding: 6px 12px;
        .title {
          height: 33px;
          font-size: 8px;
        }
        .ico-img {
          margin-top: 6px;
          height: 12px;
          line-height: 12px;
          span {
            margin-right: 6px;
            img {
              height: 12px;
              vertical-align: top;
            }
          }
        }
        .item-logo-text {
          padding-top: 4px;
          display: flex;
          .item-logo-title {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #ff5000;
            font-size: 6px;
          }
        }
        .pay {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          width: 100%;
          height: 45px;
          line-height: 45px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          .pay-price{
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
            >div{
                float: left;
                font-size: 6px;
            }
            .price{
                color:#ff6600
            }
            .weight{
                margin-left: 7px;
            }
          }
        }
      }
    }
  }
}
.item-all{
    display: flex;
    height: 49px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 10;
    .ft-cb{
        width: 44px;
        height: 49px;
        display: flex;
        align-items: center;/*垂直居中*/
        justify-content: center; /*水平居中*/
    }
    .qx{
        font-size: 16px;
        display: flex;
        align-items: center;/*垂直居中*/
        justify-content: center; /*水平居中*/
    }
    .pay{
        flex: 1;
        display: flex;
        align-items: center;/*垂直居中*/
        justify-content: flex-end; /*水平居中*/
        .pay-price{
            flex: 1;
            text-align: right;
            .hj{
                font-size: 14px;
            }
            .price{
                display: inline;
                font-size: 14px;
                color: #f50;
            }
        }
    }
    .btn{
        margin-left: 12px;
        color: #fff;
        background: #f50;
        width: 100px;
        display: flex;
        align-items: center;/*垂直居中*/
        justify-content: center; /*水平居中*/
        p{
            font-size: 14px;
        }
    }
}
</style>
