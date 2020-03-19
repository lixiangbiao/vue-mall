<template>
  <div class="goodsdetail">
    <div class="group">
      <div class="preview">
        <a>
          <img
            src="https://img.alicdn.com/imgextra/i3/725677994/O1CN01Zhrrao28vIeQJE0eX_!!725677994-0-sm.jpg_760x760Q50s50.jpg_.webp"
            data-src="https://img.alicdn.com/imgextra/i3/725677994/O1CN01Zhrrao28vIeQJE0eX_!!725677994-0-sm.jpg_760x760Q50s50.jpg_.webp"
          >
        </a>
      </div>
      <div class="moudle-wrap">
          <div class="moudle-title">
              <div class="share-warp">
                  <div class="main cell">TC巧克力味爆浆软心曲奇饼干办公室休闲零食茶点纯手工零食品156g</div>
              </div>
          </div>
      </div>
      <div class="moudle-wrap">
          <div class="moudle-adds">
              <span class="postage">满88包邮(20kg内)</span>
              <span class="sales">月销量770件</span>
              <span class="delivery">浙江杭州</span>
          </div>
      </div>
    </div>
    <div class="action-bar">
        <div class="action-bar-warp">
            <a>
                <span class="icon"><i class=" iconfont icon-cart"></i></span>
                <span>购物车</span>
            </a>
            <a>
                <span class="icon"><i class=" iconfont icon-favor"></i></span>
                <span>收藏</span>
            </a>
            <div class="trade">
                <a class="button">
                    <span>加入购物车</span>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsdetail",
  data(){
      return{

      }
  },
  created(){
      console.log(this.$route.params)
      //console.log(this.$router.params.id)
  }
};
</script>

<style scoped lang="scss">
.goodsdetail {
    .group{
        a{
            display: block;
            width: 100%;
            height: 375px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .moudle-title{
            .share-warp{
                padding: 3px 10px 0!important;
                background-color: #FFF;
                .main{
                    font-size: 14px;
                    color: #051B28;
                    line-height: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    max-height: 63px;
                    -webkit-box-orient: vertical;
                    -webkit-box-pack: center;
                    overflow: hidden;
                    word-break: break-all;
                }
            }
        }
    }
    .moudle-adds{
        display: flex;
        background-color: #FFF;
        line-height: 30px;
        padding: 0 10px;
        font-size: 12px;
        color: #999;
        span{
            flex: 1;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        span:first-child{
            text-align: left;
        }
        span:last-child{
            text-align: right;
        }
    }
    .action-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        .action-bar-warp{
            height: 50px;
            line-height: 50px;
            width: 100%;
            background: #fff;
            display: flex;
            a{
                width: 50px;
                height: 50px;
                line-height: normal;
                .icon{
                    width: 22PX;
                    height: 22PX;
                    display: block;
                    margin: 6px auto 2px;
                    .iconfont{
                        font-size: 22PX;
                    }
                }
                span{
                    font-size: 12PX;
                    display: block;
                    line-height: normal;
                    text-align: center;
                    color: #999
                }
            }
            .trade{
                flex: 1;
                display: flex;
                .button{
                    flex: 1;
                    background-color: #FF9500;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span{
                        font-size: 15PX;
                        font-weight: 600;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
