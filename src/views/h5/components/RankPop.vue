<script lang="ts" setup>
import type { Shooter } from "~/types/News";

defineProps<{
  items: Shooter[];
}>();
const emits = defineEmits(["close"]);
</script>

<template>
  <div class="rankPop">
    <div class="content">
      <div class="head">
        <div class="title">
          <img src="/src/assets/rankHeader.png" alt="" srcset="">
        </div>
        <div class="close" @click="emits('close')">
          <img src="/src/assets/close.png" alt="" srcset="">
        </div>
      </div>
      <div class="record">
        <div class="thead">
          <div>球员</div>
          <div>球队</div>
          <div>进球</div>
        </div>
        <div class="tbody">
          <div v-for="item in items" :key="item.name" class="line">
            <div class="name item">
              <div class="name_ line-clamp-1">
                {{ item.name }}
              </div>
            </div>
            <div class="item">
              {{ item.team }}
            </div>
            <div class="item">
              {{ item.goals }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.rankPop{
    height: 100vh;
    width: 100vw;
    background-color: #00000085;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 90%;
        position: relative;
        background-color: #80001F;
        border-radius: .3rem;
        overflow: hidden;
        .head{
            width: 100%;
            height: 2.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: url("/src/assets/block-bg.png") no-repeat;
            position: relative;
            .title{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .close{
                width: 1.5rem;
                height: 1.5rem;
                right: .5rem;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .record{
            width: 100%;
            padding: 1rem;
            .thead{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(360deg, #A1003A 0%, #FC104F 100%);
                div{
                    width: 33.33%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1rem;
                    padding: .5rem;
                    color: #FAE6AE;
                    font-weight: bold;
                }
            }
            .tbody{
                width: 100%;
                overflow-y: scroll;
                max-height: 15rem;
                .line{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 38px;
                    .item{
                        width: 33.33%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: .85rem;
                        padding: .5rem;
                        color: #FFD8D8;
                        text-align: center;
                        font-family: FZLanTingHei-R-GBK-Reg;
                    }
                    .name{
                      .name_{
                        width: 100%;
                      }
                    }
                }
                .line:nth-child(2n-1){
                    background-color: #960830;
                }
                .line:nth-child(2n){
                    background-color: #B70830;
                }
            }
        }
    }
}
</style>
