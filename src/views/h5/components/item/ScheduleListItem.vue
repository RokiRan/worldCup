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
  justify-content: space-between;
  align-items: center;
  padding: .4rem;
  background-color: #AA0838;
  margin-bottom: 1px;
  .time{
    font-size: .8rem;
    color: #fff;
  }
  .group{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .groupA{
      font-size: .8rem;
      color: #fff;
      width: 6.7rem;
      text-align: center;
    }
    .groupB{
      font-size: .8rem;
      color: #fff;
    }
  }
  .flag{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img{
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
    }
    .country{
      font-size: .8rem;
      color: #fff;
      max-width: 2.5rem;
    }
  }
  .score{
    font-size: 1.2rem;
    color: #fff;
    display: flex;
  }
}
</style>
