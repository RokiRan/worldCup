<script lang="ts" setup>
import dayjs from "dayjs";
import BlockVue from "./Block.vue";
import ScheduleListItemVue from "./item/ScheduleListItem.vue";
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

const listContainer = ref<HTMLElement>();
const dataContainer = ref<HTMLElement>();
const currentTab = ref(dayjs().format("MM-DD"));

onMounted(() => {
  getSchedule().then((res) => {
    const { data } = res;
    if (data) {
      schedule.value = data.sort((a: any, b: any) => dayjs(a.createTime).isBefore(b.createTime) ? -1 : 1);
    }

    const list = schedule.value || [];

    const first = dayjs(list[0].createTime).format("MM-DD");
    const last = dayjs(list[list.length - 1].createTime).format("MM-DD");
    // 是否未开始
    if (dayjs().isBefore(list[0].createTime)) {
      tabScrollTo(first);
      scrollTo(first);
    } else if (dayjs().isAfter(dayjs(list[list.length - 1].createTime))) {
      tabScrollTo(last);
      scrollTo(last);
    } else {
      // 比赛中 移动到最近的一天
      const today = dayjs().format("MM-DD");
      const index = list.findIndex(t => dayjs(t.createTime).format("MM-DD") === today || dayjs(t.createTime).isAfter(dayjs()));
      const date = dayjs(list[index].createTime).format("MM-DD");
      tabScrollTo(date);
      scrollTo(date);
      currentTab.value = date;
    }
  });
});

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
function tabScrollTo(key: string) {
  nextTick(() => {
    const el = document.querySelector(`div[archdate='${key}']`) as HTMLElement;
    dataContainer.value!.scrollTo({
      left: (el?.offsetLeft || 0) - 10,
      behavior: "smooth",
    });
  });
}
</script>

<template>
  <div>
    <BlockVue title="赛程">
      <div class="sheduleList">
        <div class="dateLine">
          <div ref="dataContainer" class="dataContainer">
            <div v-for="item in scheduleList.dateWeekMap" :key="`${item[0]}abc`" :archdate="item[0]" class="dateItem" :class=" currentTab === item[0] ? 'dataActive' : ''" @click="chooseTab(item[0])">
              <div class="date">
                {{ item[0] }}
              </div>
              <div class="week">
                {{ item[1] }}
              </div>
            </div>
          </div>
        </div>
        <div ref="listContainer" class="scheduleContainer">
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
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>
.sheduleList {

    .dateLine {
        color: #fff;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        width: 100%;
        position: relative;
        padding: 0 1rem;
        background-color: #AA0838;
        .dataContainer {
            width: 100%;
            display: flex;
            overflow-x: scroll;
            /*隐藏滚动条*/
            -ms-overflow-style: none;
            .dateItem {
                display: flex;
                flex-direction: column;
                align-items: center;
                white-space: nowrap;
                min-width: 4rem;
                overflow-x: scroll;
                padding: .02rem 0;

                .date {
                    font-size: 14px;
                }

                .week {
                    font-size: 10px;
                }
            }
            .dataActive{
                background-color: #E00041 ;
            }
        }

    }

    .dateLine::before {
        content: "";
        width: 1rem;
        height: 1rem;
        background: url(/src/assets/leftSmallBt2.png) no-repeat;
        background-size: cover;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .dateLine::after {
        content: "";
        width: 1rem;
        height: 1rem;
        background: url(/src/assets/leftSmallBt2.png) no-repeat;
        background-size: cover;
        position: absolute;
        transform: rotate(180deg) translateY(-50%);
        right: 0;
        bottom: 50%;
    }
    .scheduleContainer{
      max-height: 25rem;
      overflow-y: scroll;
      position: relative;
      .oneDay {
        margin-bottom: .3rem;

        .date {
            color: #fff;
            margin-bottom: .2rem;
            font-size: 1rem;
            line-height: 36px;
        }

        .list {
            .item {
                margin-bottom: .2rem;
            }
        }
    }
    }

}
</style>
