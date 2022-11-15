<script lang="ts" setup>
import type { OneGroup } from "~/types/News";

defineProps<{
  items: OneGroup[];
  group: String;
}>();
</script>

<template>
  <div class="crediteItem">
    <div class="head">
      <div class="group">
        {{ $props.group }}组
      </div>
      <div class="score">
        积分
      </div>
    </div>
    <div class="matches">
      <div v-for="item, key in $props.items" :key="key" class="match">
        <div class="sort">
          {{ item.ranking }}
        </div>
        <div class="sologn">
          <img v-loadFail :src="item.teamCover">
        </div>
        <div class="name">
          {{ item.team }}
        </div>
        <div class="num">
          {{ item.source }}
        </div>
      </div>
    </div>
    <div class="footImg">
      <img src="/src/assets/listBottomIcon.png" alt="" srcset="">
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
