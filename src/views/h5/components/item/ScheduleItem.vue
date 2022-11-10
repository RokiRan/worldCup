<script>
export default {

};
</script>

<template>
  <div class="scheduleItem">
    <div class="title">
      <div class="matchName">
        世界杯小组赛-A组 第一轮
      </div>
      <div class="date">
        11月10日 12点19分
      </div>
    </div>
    <div class="dz">
      <div class="match">
        <div class="teamLogo">
          <img src="/src/assets/Netherlands.png" alt="">
        </div>
        <div class="teamName">
          日版
        </div>
      </div>
      <div class="score">
        <div class="ing">
          <div class="scoreNum">
            0
          </div>:
          <div class="scoreNum">
            0
          </div>
        </div>
        <div class="pre">
          VS
        </div>
      </div>
      <div class="match">
        <div class="teamLogo">
          <img src="/src/assets/Netherlands.png" alt="">
        </div>
        <div class="teamName">
          米国
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .scheduleItem{
        background: linear-gradient(180deg,#C20A3C 0%, #790025 100%);
        border-top-right-radius: 1rem;
        padding: 1rem 1rem .5rem 1rem;
        color: #fff;
        .title{
            display: flex;
            flex-direction: column;
            text-align: left;
            .matchName{
                font-size: .8rem;
            }
            .date{
                font-size: .7rem;
            }
        }
        .dz{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .match{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .teamLogo{
                    width: 2rem;
                    height: 2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .teamName{
                    font-size: .8rem;
                }
            }
            .score{
                display: flex;
                flex-direction: column;
                align-items: center;
                .ing{
                    display: flex;
                    .scoreNum{
                        font-size: 1.2rem;
                    }
                }
                .pre{
                    display: none;
                    font-size: 1.2rem;
                    margin-top: .5rem;
                }
            }
        }
    }
</style>
