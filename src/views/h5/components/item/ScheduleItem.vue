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
      <div class="matchName line-clamp-1">
        {{ $props.item?.sessions }}
      </div>
      <div class="date">
        {{ time }}
      </div>
    </div>
    <div class="dz">
      <div class="text-left match">
        <div class="teamLogo">
          <img v-loadFail :src="$props.item?.teamOneCover" alt="">
        </div>
        <div class="teamName line-clamp-1">
          {{ $props.item?.teamOne }}
        </div>
      </div>
      <div class="score">
        <div v-if="$props.item?.mode === '2'" class="ing">
          <div class="scoreNum">
            {{ $props.item?.team_one_score }}
          </div>:
          <div class="scoreNum">
            {{ $props.item?.team_two_score }}
          </div>
        </div>
        <div v-else class="pre">
          VS
        </div>
      </div>
      <div class="match">
        <div class="teamLogo">
          <img v-loadFail :src="$props.item?.teamTwoCover" alt="">
        </div>
        <div class="teamName line-clamp-1">
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
        padding: .5rem .5rem .25rem 1rem;
        color: #fff;
        min-height: 6.5rem;
        .title{
            display: flex;
            flex-direction: column;
            text-align: left;
            .matchName{
                font-size: .95rem;
            }
            .date{
                font-size: .95rem;
            }
        }
        .dz{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .match{
                display: flex;
                flex-direction: column;
                align-items: center;
                .teamLogo{
                    height: 2rem;
                    width: 2rem;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .teamName{
                    font-size: .95rem;
                }
            }
            .score{
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                flex: 1;
                .ing{
                    display: flex;
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
