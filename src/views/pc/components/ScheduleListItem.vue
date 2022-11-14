<script lang="ts" setup>
import dayjs from "dayjs";
import type { ScheduleItem } from "~/types/News";

defineProps<{
  item: ScheduleItem;
}>();
</script>

<template>
  <div class="scheduleMatch">
    <div class="time">
      {{ dayjs($props.item?.createTime).format("HH:mm") }}
    </div>
    <div class="group">
      <div class="groupA">
        {{ $props.item?.sessions }}
      </div>
    </div>
    <div class="flag">
      <img v-loadFail :src="$props.item.teamOneCover" alt="" srcset="">
      <div class="country">
        {{ $props.item?.teamOne }}
      </div>
    </div>
    <div class="score">
      <template v-if="$props.item.mode !== '1'">
        <div class="scoreA">
          {{ $props.item?.team_one_score }}
        </div>
        :
        <div class="scoreB">
          {{ $props.item?.team_two_score }}
        </div>
      </template>
      <template v-else>
        VS
      </template>
    </div>
    <div class="flag">
      <img v-loadFail :src="$props.item.teamTwoCover" alt="" srcset="">
      <div class="country">
        {{ $props.item?.teamTwo }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scheduleMatch{
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: .4rem;
  background-color: #8F0F36;
  margin-bottom: 1px;
  .time{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    width: 10%;
  }
  .group{
    display: flex;
    width: 20%;
    justify-content: center;
    .groupA{
      font-size: .8rem;
      color: #fff;
      margin-right: 10px;
    }
    .groupB{
      font-size: .8rem;
      color: #fff;
    }
  }
  .flag{
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
      margin-right: 10px;
    }
    .country{
      font-size: .8rem;
      color: #fff;
      max-width: 4.5rem;
    }
  }
  .score{
    width: 10%;
    font-size: 1.2rem;
    color: #fff;
    display: flex;
    justify-content: center;
  }
}
</style>
