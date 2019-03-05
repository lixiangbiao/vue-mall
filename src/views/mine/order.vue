<template>
  <div class="order">
    <div class="fixed-top">
      <div class="fixed-wrap">
        <div class="tab-bar-container">
          <ul>
            <li :class="{'acitve-tab':active===0}" @click="tabclick(0)">
              <div>全部</div>
            </li>
            <li :class="{'acitve-tab':active===1}" @click="tabclick(1)">
              <div>待付款</div>
            </li>
            <li :class="{'acitve-tab':active===2}" @click="tabclick(2)">
              <div>待发货</div>
            </li>
            <li :class="{'acitve-tab':active===3}" @click="tabclick(3)">
              <div>待收货</div>
            </li>
            <li :class="{'acitve-tab':active===4}" @click="tabclick(4)">
              <div>待评价</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ordercontainer">
      <li class="searchbar__wrap">
        <div class="searchbar__input">
          <div class="search-icon">
            <i class="iconfont icon-search"></i>
          </div>
          <input type="text" placeholder="搜索全部订单">
        </div>
        <div class="searchbar__button">
          <span>搜索</span>
        </div>
      </li>
      <div v-show="active === 0">
        <div class="item-card">
          <div class="card-shop-list">
            <div class="card-shop">
              <div class="shop-name">
                <div class="shop-image">
                  <div class="image"></div>
                </div>
                <div class="shop-title">
                  <span class="title">corou可心柔旗舰店</span>
                </div>
              </div>
              <div class="shop-state">
                <div class="shop-text">
                  <span class="text">卖家已发货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-goods-list">
            <div class="card-goods">
              <div class="goods-image">
                <div class="image">
                  <div class="image-url"></div>
                </div>
                <div class="goods-content">
                  <div class="goods-text">
                    <span class="text">可心柔V9婴儿抽纸专用120抽宝宝柔纸巾整箱批发家庭装500旗舰店</span>
                  </div>
                  <div class="goods-text goods-tip">
                    <span class="tip">KB-50B蓝色单喷头装送袋</span>
                  </div>
                  <div class="goods-activity">
                    <div class="activity-view">
                      <div class="view-text">
                        <span class="text">公益捐赠0.02元</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="goods-price">
                  <div class="price">
                    <div class="price-text">
                      <span class="text">￥36</span>
                    </div>
                    <div class="price-text" style="margin-left:0">
                      <span class="text">.</span>
                    </div>
                    <div class="price-text" style="font-size: 10px;margin-left:0;">
                      <span class="text">17</span>
                    </div>
                  </div>
                  <div class="number">
                    <span class="text">x1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-serve">
            <div class="serve-liner-layout">
              <div class="serve-frame-layout">
                <div class="server-view-layout">
                  <div class="serve-text-view">
                    <span class="serve-text">保险服务</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-totalprice">
            <div class="totalprice-frame-layout">
              <div class="totalprice-liner-layout">
                <div class="total-text-view">
                  <span class="total-text">共1件商品</span>
                </div>
                <div class="price-text-view">
                  <span class="price-text">合计:￥36.17</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-button">
            <div class="button-group">
              <div class="line-view"></div>
              <div class="view-layout">
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">查看物流</span>
                  </div>
                </div>
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">延长收货</span>
                  </div>
                </div>
                <div class="button-layout button-active">
                  <div class="button-text-view">
                    <span class="button-text">确认收货</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-card">
          <div class="card-shop-list">
            <div class="card-shop">
              <div class="shop-name">
                <div class="shop-image">
                  <div class="image"></div>
                </div>
                <div class="shop-title">
                  <span class="title">corou可心柔旗舰店</span>
                </div>
              </div>
              <div class="shop-state">
                <div class="shop-text">
                  <span class="text">卖家已发货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-goods-list">
            <div class="card-goods">
              <div class="goods-image">
                <div class="image">
                  <div class="image-url"></div>
                </div>
                <div class="goods-content">
                  <div class="goods-text">
                    <span class="text">可心柔V9婴儿抽纸专用120抽宝宝柔纸巾整箱批发家庭装500旗舰店</span>
                  </div>
                  <div class="goods-text goods-tip">
                    <span class="tip">KB-50B蓝色单喷头装送袋</span>
                  </div>
                  <div class="goods-activity">
                    <div class="activity-view">
                      <div class="view-text">
                        <span class="text">公益捐赠0.02元</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="goods-price">
                  <div class="price">
                    <div class="price-text">
                      <span class="text">￥36</span>
                    </div>
                    <div class="price-text" style="margin-left:0">
                      <span class="text">.</span>
                    </div>
                    <div class="price-text" style="font-size: 10px;margin-left:0;">
                      <span class="text">17</span>
                    </div>
                  </div>
                  <div class="number">
                    <span class="text">x1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-serve">
            <div class="serve-liner-layout">
              <div class="serve-frame-layout">
                <div class="server-view-layout">
                  <div class="serve-text-view">
                    <span class="serve-text">保险服务</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-totalprice">
            <div class="totalprice-frame-layout">
              <div class="totalprice-liner-layout">
                <div class="total-text-view">
                  <span class="total-text">共1件商品</span>
                </div>
                <div class="price-text-view">
                  <span class="price-text">合计:￥36.17</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-button">
            <div class="button-group">
              <div class="line-view"></div>
              <div class="view-layout">
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">查看物流</span>
                  </div>
                </div>
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">延长收货</span>
                  </div>
                </div>
                <div class="button-layout button-active">
                  <div class="button-text-view">
                    <span class="button-text">确认收货</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-card">
          <div class="card-shop-list">
            <div class="card-shop">
              <div class="shop-name">
                <div class="shop-image">
                  <div class="image"></div>
                </div>
                <div class="shop-title">
                  <span class="title">corou可心柔旗舰店</span>
                </div>
              </div>
              <div class="shop-state">
                <div class="shop-text">
                  <span class="text">卖家已发货</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-goods-list">
            <div class="card-goods">
              <div class="goods-image">
                <div class="image">
                  <div class="image-url"></div>
                </div>
                <div class="goods-content">
                  <div class="goods-text">
                    <span class="text">可心柔V9婴儿抽纸专用120抽宝宝柔纸巾整箱批发家庭装500旗舰店</span>
                  </div>
                  <div class="goods-text goods-tip">
                    <span class="tip">KB-50B蓝色单喷头装送袋</span>
                  </div>
                  <div class="goods-activity">
                    <div class="activity-view">
                      <div class="view-text">
                        <span class="text">公益捐赠0.02元</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="goods-price">
                  <div class="price">
                    <div class="price-text">
                      <span class="text">￥36</span>
                    </div>
                    <div class="price-text" style="margin-left:0">
                      <span class="text">.</span>
                    </div>
                    <div class="price-text" style="font-size: 10px;margin-left:0;">
                      <span class="text">17</span>
                    </div>
                  </div>
                  <div class="number">
                    <span class="text">x1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-serve">
            <div class="serve-liner-layout">
              <div class="serve-frame-layout">
                <div class="server-view-layout">
                  <div class="serve-text-view">
                    <span class="serve-text">保险服务</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-totalprice">
            <div class="totalprice-frame-layout">
              <div class="totalprice-liner-layout">
                <div class="total-text-view">
                  <span class="total-text">共1件商品</span>
                </div>
                <div class="price-text-view">
                  <span class="price-text">合计:￥36.17</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card-button">
            <div class="button-group">
              <div class="line-view"></div>
              <div class="view-layout">
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">查看物流</span>
                  </div>
                </div>
                <div class="button-layout">
                  <div class="button-text-view">
                    <span class="button-text">延长收货</span>
                  </div>
                </div>
                <div class="button-layout button-active">
                  <div class="button-text-view">
                    <span class="button-text">确认收货</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="active === 1">
        <div class="noorder">
          <img src="../../assets/images/we.jpeg" alt>
          <p>代付款</p>
        </div>
      </div>
      <div v-show="active === 2">
        <div class="noorder">
          <img src="../../assets/images/we.jpeg" alt>
          <p>代发货</p>
        </div>
      </div>
      <div v-show="active === 3">
        <div class="noorder">
          <img src="../../assets/images/we.jpeg" alt>
          <p>代收货</p>
        </div>
      </div>
      <div v-show="active === 4">
        <div class="noorder">
          <img src="../../assets/images/we.jpeg" alt>
          <p>待评价</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    tabclick(val) {
      this.active = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.order {
  .fixed-top {
    height: 40px;
    .fixed-wrap {
      position: fixed;
      top: 46px;
      left: 0;
      width: 100%;
      z-index: 100;
      .tab-bar-container {
        ul {
          display: flex;
          justify-content: center;
          background: #fcfcfc;
          font-size: 14px;
          li {
            flex: 1;
            max-width: 25%;
            height: 40px;
            line-height: 40px;
            align-items: stretch;
            justify-content: center;
            display: flex;
          }
          .acitve-tab {
            > div {
              border-bottom: 3px solid #ff5000;
              color: #ff5000;
            }
          }
        }
      }
    }
  }
  .ordercontainer {
    .searchbar__wrap {
      margin: 10px 12px 10px 12px;
      overflow: hidden;
      display: flex;
      .searchbar__input {
        overflow: hidden;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        border-radius: 15px;
        position: relative;
        input {
          width: 100%;
          font-size: 14px;
          padding: 5px 0.1rem 5px 30px;
          border: none;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .search-icon {
          position: absolute;
          left: 0;
          top: 0;
          color: #b2b2b2;
          padding: 0.05rem 0 0.05rem 0.1rem;
        }
      }
      .searchbar__button {
        background: #ff5000;
        width: 75px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        margin-left: 12px;
      }
    }
    .item-card {
      margin: 0 12px 12px;
      border-radius: 12px;
      overflow: hidden;
      .card-shop,
      .card-goods {
        display: flex;
        overflow: hidden;
        height: auto;
        width: 100%;
        background-color: rgb(255, 255, 255);
        .shop-name {
          display: flex;
          overflow: hidden;
          flex: 0 0 auto;
          height: auto;
          //  width: -webkit-fit-content; 
          .shop-image {
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            width: 15px;
            height: 15px;
            margin-top: 16px;
            margin-bottom: 16px;
            margin-left: 12px;
            .image {
              width: 100%;
              height: 100%;
              background-image: url(https://gtd.alicdn.com/tps/i4/TB1f.8ZFVXXXXXvaXXXEDhGGXXX-32-32.png);
              background-repeat: no-repeat;
              background-position: center center;
              background-size: contain;
            }
          }
          .shop-title {
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            max-width: 155px;
            font-size: 12px;
            margin-top: 16px;
            margin-bottom: 16px;
            margin-left: 5px;
            height: auto;
            width: -webkit-fit-content;
            -webkit-box-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            .title {
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 14.4px;
              white-space: nowrap;
            }
          }
        }
        .shop-state {
          display: flex;
          overflow: hidden;
          -webkit-box-flex: 1;
          flex: 1 1 0%;
          //  width: -webkit-fit-content; 
          .shop-text {
            display: flex;
            overflow: hidden;
            -webkit-box-flex: 1;
            flex: 1 1 0%;
            font-size: 12px;
            color: rgb(255, 80, 0);
            margin: 16px 12px;
            height: auto;
            width: -webkit-fit-content;
            -webkit-box-pack: end;
            justify-content: flex-end;
            -webkit-box-align: center;
            align-items: center;
            .text {
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 14.4px;
              white-space: nowrap;
            }
          }
        }
        .goods-image {
          display: flex;
          overflow: hidden;
          height: 90px;
          width: 100%;
          margin-bottom: 12px;
          
          position: relative;
          .image {
            display: flex;
            overflow: hidden;
            position: absolute;
            width: 90px;
            height: 90px;
            margin-left: 12px;
            border-radius: 6px;
            visibility: visible;
            .image-url {
              width: 100%;
              height: 100%;
              background-image: url(../../assets/images/goods.jpg);
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
            }
          }
          .goods-content {
            display: flex;
            overflow: hidden;
            position: absolute;
            background-color: rgb(255, 255, 255);
            height: auto;
            width: 225px;
            right: 0px;
            top: 0px;
            margin-right: 12px;
            -webkit-box-orient: vertical;
            flex-direction: column;
            .goods-text {
              display: flex;
              overflow: hidden;
              flex: 0 0 auto;
              color: rgb(51, 51, 51);
              max-width: 170px;
              margin-bottom: 5px;
              height: auto;
              width: -webkit-fit-content;
              font-size: 12px;
              -webkit-box-pack: start;
              justify-content: flex-start;
              -webkit-box-align: center;
              align-items: center;
              .text {
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                line-height: 16px;
              }
            }
            .goods-tip {
              max-width: 170px;
              color: rgb(153, 153, 153);
              .tip {
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }
            .goods-activity {
              display: flex;
              overflow: hidden;
              -webkit-box-orient: horizontal;
              flex-direction: row;
              width: 100%;
              height: auto;
              margin-bottom: 5px;
              visibility: visible;
              
              .activity-view {
                display: flex;
                overflow: hidden;
                flex: 0 0 auto;
                width: -webkit-fit-content;
                height: auto;
                background-color: rgb(255, 241, 235);
                border-radius: 4px;
                margin-right: 4px;

                .view-text {
                  display: flex;
                  overflow: hidden;
                  flex: 0 0 auto;
                  font-size: 10px;
                  height: auto;
                  width: -webkit-fit-content;
                  color: rgb(255, 80, 0);
                  margin: 2px;
                  -webkit-box-pack: start;
                  justify-content: flex-start;
                  -webkit-box-align: center;
                  align-items: center;
                  .text {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 12px;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
          .goods-price {
            display: flex;
            overflow: hidden;
            position: absolute;
            right: 0px;
            top: 0px;
            margin-right: 12px;
            -webkit-box-orient: vertical;
            flex-direction: column;
            height: auto;
            width: -webkit-fit-content;
            .price {
              display: flex;
              overflow: hidden;
              flex: 0 0 auto;
              margin-top: 3.5px;
              margin-bottom: 3.5px;
              height: auto;
              width: -webkit-fit-content;
              
              .price-text {
                display: flex;
                overflow: hidden;
                flex: 0 0 auto;
                color: rgb(51, 51, 51);
                margin-left: 12px;
                font-size: 12px;
                visibility: visible;
                height: auto;
                width: -webkit-fit-content;
                -webkit-box-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                align-items: center;
              }
            }
            .number {
              display: flex;
              overflow: hidden;
              color: rgb(153, 153, 153);
              font-size: 12px;
              visibility: visible;
              margin-top: 3.5px;
              margin-bottom: 3.5px;
              -webkit-box-pack: end;
              justify-content: flex-end;
              -webkit-box-align: center;
              align-items: center;
              height: auto;
              width: 100%;
            }
            .text {
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 14.4px;
              white-space: nowrap;
            }
          }
        }
      }
      .card-serve {
        .serve-liner-layout {
          display: flex;
          overflow: hidden;
          height: auto;
          width: 100%;
          background-color: rgb(255, 255, 255);
          .serve-frame-layout {
            display: flex;
            overflow: hidden;
            height: 22px;
            width: 100%;
            margin-bottom: 12px;
            
            position: relative;
            .server-view-layout {
              display: flex;
              overflow: hidden;
              position: absolute;
              background-color: rgb(255, 255, 255);
              height: auto;
              width: 225px;
              right: 0px;
              top: 0px;
              margin-right: 12px;
              -webkit-box-orient: vertical;
              flex-direction: column;
              .serve-text-view {
                display: flex;
                overflow: hidden;
                flex: 0 0 auto;
                color: rgb(51, 51, 51);
                max-width: 170px;
                margin-bottom: 5px;
                height: auto;
                width: -webkit-fit-content;
                font-size: 12px;
                -webkit-box-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                align-items: center;
                .serve-text {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                }
              }
            }
          }
        }
      }
      .card-totalprice {
        .totalprice-frame-layout {
          display: flex;
          overflow: hidden;
          height: 32px;
          width: 100%;
          background-color: rgb(255, 255, 255);
          position: relative;
          .totalprice-liner-layout {
            display: flex;
            overflow: hidden;
            position: absolute;
            height: auto;
            width: -webkit-fit-content;
            margin-right: 12px;
            right: 0px;
            top: 0px;
            margin-bottom: 12px;
            margin-top: 6px;
            .total-text-view {
              display: flex;
              overflow: hidden;
              flex: 0 0 auto;
              margin-left: 12px;
              color: rgb(153, 153, 153);
              height: auto;
              width: -webkit-fit-content;
              font-size: 12px;
              visibility: visible;
              -webkit-box-pack: start;
              justify-content: flex-start;
              -webkit-box-align: center;
              align-items: center;
              .total-text {
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 14.4px;
                white-space: nowrap;
              }
            }
            .price-text-view {
              display: flex;
              overflow: hidden;
              flex: 0 0 auto;
              margin-left: 12px;
              font-size: 12px;
              color: rgb(51, 51, 51);
              visibility: visible;
              height: auto;
              width: -webkit-fit-content;
              -webkit-box-pack: start;
              justify-content: flex-start;
              -webkit-box-align: center;
              align-items: center;
              .price-text {
                text-overflow: ellipsis;
                overflow: hidden;
                line-height: 14.4px;
                white-space: nowrap;
              }
            }
          }
        }
      }
      .card-button {
        .button-group {
          display: flex;
          overflow: hidden;
          -webkit-box-orient: vertical;
          flex-direction: column;
          height: auto;
          background-color: rgb(255, 255, 255);
          width: 100%;
          .line-view {
            display: flex;
            overflow: hidden;
            width: 100%;
            background-color: rgb(248, 248, 248);
            height: 1px;
            visibility: visible;
            
          }
          .view-layout {
            display: flex;
            overflow: hidden;
            flex: 0 0 auto;
            background-color: rgb(255, 255, 255);
            height: auto;
            width: -webkit-fit-content;
            .button-layout {
              display: flex;
              overflow: hidden;
              flex: 0 0 auto;
              height: 28px;
              width: 81px;
              border-radius: 15px;
              margin-top: 9px;
              margin-bottom: 9px;
              visibility: visible;
              border-color: rgb(153, 153, 153);
              border-style: solid;
              border-width: 1px;
              margin-right: 9px;
              
              position: relative;
              .button-text-view {
                display: flex;
                overflow: hidden;
                position: absolute;
                color: rgb(102, 102, 102);
                height: 100%;
                width: 80px;
                font-size: 13px;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                .button-text {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  line-height: 15.6px;
                  white-space: nowrap;
                }
              }
            }
            .button-active {
              border-color: rgb(255, 80, 0);
              .button-text-view {
                color: rgb(255, 80, 0);
              }
            }
          }
        }
      }
    }

    .noorder {
      text-align: center;
      padding-top: 80px;
      img {
        width: 128px;
        height: 128px;
        border-radius: 128px;
      }
      p {
        margin-top: 10px;
        font-size: 20px;
      }
    }
  }
}
</style>


