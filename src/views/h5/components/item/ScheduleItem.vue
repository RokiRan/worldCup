<script lang="ts">
import type { PropType } from "vue";
import dayjs from "dayjs";
import type { ScheduleItem } from "~/types/News";
export default {
  props: {
    item: {
      type: Object as PropType<ScheduleItem>,
    },
  },
  setup(props) {
    const time = dayjs(props.item?.createTime).format("MM-DD HH:mm");
    return {
      time,
    };
  },
};
</script>

<template>
  <div class="scheduleItem">
    <div class="title">
      <div class="matchName">
        {{ $props.item?.sessions }}
      </div>
      <div class="date">
        {{ time }}
      </div>
    </div>
    <div class="dz">
      <div class="match">
        <div class="teamLogo">
          <img v-loadFail :src="$props.item?.teamOneCover" alt="">
        </div>
        <div class="teamName">
          {{ $props.item?.teamOne }}
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
          <img v-loadFail :src="$props.item?.teamTwoCover" alt="">
        </div>
        <div class="teamName">
          {{ $props.item?.teamTwo }}
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
                    // width: 2rem;
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
                    // display: flex;
                    display: none;
                    .scoreNum{
                        font-size: 1.2rem;
                    }
                }
                .pre{

                    font-size: 1.2rem;
                    margin-top: .5rem;
                }
            }
        }
    }
</style>
