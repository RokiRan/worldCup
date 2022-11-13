<script>
export default {

};
</script>

<template>
  <div class="crediteItem">
    <div class="head">
      <div class="group">
        A组
      </div>
      <div class="score">
        积分
      </div>
    </div>
    <div class="matches">
      <div v-for="m in 4" :key="m" class="match">
        <div class="sort">
          1
        </div>
        <div class="sologn">
          <img v-loadFail src="/src/assets/Senegal.png" alt="" srcset="">
        </div>
        <div class="name">
          卡塔尔
        </div>
        <div class="num">
          0
        </div>
      </div>
    </div>
    <div class="footImg">
      <img v-loadFail src="/src/assets/listBottomIcon.png" alt="" srcset="">
    </div>
  </div>
</template>

<style lang="scss">
    .crediteItem{
        border-radius: .2rem;
        color: #000;
        background: #fff;
        .head{
            display: flex;
            justify-content: space-between;
            background: linear-gradient(90deg,#C20A3C 0%, #790025 100%);
            color: #fff;
            padding: .4rem;
            .group{
                font-size: .8rem;
            }
            .score{
                font-size: .8rem;
            }
        }
        .matches{
          padding: .2rem .5rem;
            .match{
                display: flex;
                justify-content: space-between;
                margin-top: .5rem;
                border-radius: .2rem;
                background-color: #EEEEE4;
                align-items: center;
                .sort{
                    font-size: .8rem;
                    min-width: 1rem;
                }
                .sologn{
                    width: 1.5rem;
                    height: 1.5rem;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .name{
                    font-size: .8rem;
                    flex: 1;
                    text-align: left;
                    padding-left: .5rem;
                }
                .num{
                    font-size: .8rem;
                    min-width: 1rem;
                }
            }
        }
        .footImg{
            display: flex;
            padding: .5rem;
            justify-content: center;
            align-items: center;
            img{
                height: 1rem;
                object-fit: cover;
            }
        }
    }
</style>
