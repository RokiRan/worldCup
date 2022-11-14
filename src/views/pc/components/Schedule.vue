<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import dayjs from "dayjs";

import ScheduleListItemVue from "./ScheduleListItem.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
// Import Swiper styles
import "swiper/css";

import { getSchedule } from "~/http";
import type { ScheduleItem } from "~/types/News";

const schedule = ref<ScheduleItem[]>([]);
const weekCn = ["日", "一", "二", "三", "四", "五", "六"];
// 按日期分组
const scheduleList = computed(() => {
  const list = schedule.value;
  const map = new Map<string, ScheduleItem[]>();
  const dateWeekMap = new Map<string, string>();
  list.forEach((item) => {
    const date = dayjs(item.createTime).format("MM-DD");
    const date2 = dayjs(item.createTime).format("YYYY-MM-DD");
    const week = `周${weekCn[dayjs(item.createTime).day()]}`;
    const arr = map.get(date2) || [];
    dateWeekMap.set(date, week);
    arr.push(item);
    map.set(date2, arr);
  });
  return { scheduleMap: map, dateWeekMap };
});

// const currentTab = ref(dayjs().format("MM-DD"));
const listContainer = ref<HTMLElement>();
const currentTab = ref("11-25");
onMounted(() =>
  getSchedule().then((res) => {
    const { data } = res;
    if (data) {
      schedule.value = data;
    }
  }),
);
function chooseTab(date: string) {
  currentTab.value = date;
  scrollTo(date);
}
function scrollTo(key: string) {
  nextTick(() => {
    const el = document.querySelector(`div[arch='${key}']`) as HTMLElement;
    listContainer.value!.scrollTo({
      top: (el?.offsetTop || 0),
      behavior: "smooth",
    });
  });
}
</script>

<template>
  <div class="schedulePage">
    <div class="scheduleCtn">
      <SubTitileVue title="赛程" @more="null" />
      <div class="dateLine">
        <Swiper ref="mySwiper" :modules="[Navigation]" :slides-per-view="8" :navigation="true" class="ScheduleSwiper" :hash-navigation="{ replaceState: true }">
          <SwiperSlide v-for="item in scheduleList.dateWeekMap" :key="`${item[0]}abc`" :data-hash="item[0]" @click="chooseTab(item[0])">
            <div class="dateItem" :class="currentTab === item[0] ? 'dataActive' : ''">
              <div class="date">
                {{ item[0] }}
              </div>
              <div class="week">
                {{ item[1] }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div ref="listContainer" class="listContainer">
        <div v-for="schedule in scheduleList.scheduleMap" :key="schedule[0]" class="oneDay">
          <div class="date" :arch="schedule[0].slice(5, 10)">
            {{ schedule[0] }} {{ `星期${weekCn[dayjs(schedule[0]).day()]}` }}
          </div>
          <div class="list">
            <ScheduleListItemVue v-for="n in schedule[1]" :key="n.teamOne + n.teamTwo" :item="n" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.schedulePage {
    width: 100vw;
    margin: 0 auto;
    background-color: #56031A;

    .scheduleCtn {
        width: 1200px;
        margin: 0 auto;

        .dateLine {
            width: 100%;
            border-radius: 20px;
            margin-top: 20px;
        }
        .listContainer{
          max-height: 100vh;
          overflow-y: scroll;
          margin-top: 1px;
          position: relative;
          /*隐藏滚动条*/
          &::-webkit-scrollbar {
            display: none;
          }
          .oneDay {
            width: 100%;
            .date {
                font-size: 14px;
                color: #fff;
                margin: 15px 0 15px 18px ;
            }

            .list {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                flex-direction: column;
            }
        }
        }

    }
}

.dateItem {
    width: 140px;
    height: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8F0F36;
    cursor: pointer;
    .date {
        font-size: 14px;
        color: #fff;
    }

    .week {
        font-size: 12px;
        color: #fff;
    }
}

.dataActive {
    background-color: #E00041;
    .date {
        color: #fff;
    }

    .week {
        color: #fff;
    }
}
.ScheduleSwiper{
    padding: 0 30px;
    .swiper-button-prev::before {
        content: "";
        display: inline-block;
        width: 36px;
        height: 56px;
        background: url("/src/assets/arr.png") no-repeat;
        background-color: #fa074c;
        background-size: 100% 100%;
        transform: translateY(50%);
        position: absolute;
        left: -14px;
        bottom: 50%;
        z-index: 999999;
    }
    .swiper-button-prev::after{
        display: none;
    }
    .swiper-button-next::after{
        content: "";
        display: inline-block;
        width: 36px;
        height: 56px;
        background: url("/src/assets/arr.png") no-repeat;
        background-color: #fa074c;
        transform-origin:center 50%;
        transform: rotate(180deg) translateY(-50%);
        background-size: 100% 100%;
        position: absolute;
        opacity: 1;
        right: -14px;
        bottom: 50%;
        z-index: 999999;
    }
}
</style>
