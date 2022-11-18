<script lang="ts" setup>
import dayjs from "dayjs";

import ScheduleListItemVue from "./ScheduleListItem.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import LoadingVue from "~/components/Loading.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
import { getSchedule } from "~/http";
import type { ScheduleItem } from "~/types/News";

const dateNav = ref<HTMLDivElement>();

const schedule = ref<ScheduleItem[]>([]);
const weekCn = ["日", "一", "二", "三", "四", "五", "六"];
// 按日期分组
const scheduleList = computed(() => {
  const list = shallowReactive(schedule.value);
  const map = new Map<string, ScheduleItem[]>();
  const dateWeekMap = new Map<string, string>();
  const listSort = list.sort((a, b) => dayjs(a.createTime).isBefore(b.createTime) ? -1 : 1);
  listSort.forEach((item) => {
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
const currentTab = ref(dayjs().format("MM-DD"));
const loaded = ref(false);
onMounted(() =>
  getSchedule().then((res) => {
    loaded.value = true;
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
      // 移动到当前日期最近的一天
      const index = list.findIndex(t => dayjs(t.createTime).format("MM-DD") === currentTab.value);
      if (index !== -1) {
        tabScrollTo(currentTab.value);
        scrollTo(currentTab.value);
      } else {
        const today = dayjs().format("MM-DD");
        const index = list.findIndex(t => dayjs(t.createTime).format("MM-DD") === today);
        if (index !== -1) {
          tabScrollTo(today);
          scrollTo(today);
        } else {
          const index = list.findIndex(t => dayjs(t.createTime).isAfter(dayjs()));
          if (index !== -1) {
            const date = dayjs(list[index].createTime).format("MM-DD");
            tabScrollTo(date);
            scrollTo(date);
            currentTab.value = date;
          }
        }
      }
    }
  }),
);
// 绑定拖拽事件
function bindDrag(e: MouseEvent) {
  e.preventDefault();
  const { clientX } = e;
  const left = document.querySelector("#dateNav")?.scrollLeft || 0;
  const move = (e: MouseEvent) => {
    const { clientX: x } = e;
    const offset = clientX - x;
    dateNav.value?.scrollTo({ left: left + offset, behavior: "smooth" });
  };
  const up = (e: MouseEvent) => {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
  };
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", up);
}
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
    dateNav.value!.scrollTo({
      left: (el?.offsetLeft || 0) - 100,
      behavior: "smooth",
    });
  });
}
function left() {
  dateNav.value!.scrollTo({
    left: dateNav.value!.scrollLeft - 100,
    behavior: "smooth",
  });
}
function right() {
  dateNav.value!.scrollTo({
    left: dateNav.value!.scrollLeft + 100,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="schedulePage">
    <div class="scheduleCtn">
      <SubTitileVue title="赛程" @more="null" />
      <template v-if="loaded && schedule.length">
        <div class="flex w-full mt-4 mb-1">
          <img src="/src/assets/arr.png" alt="" class="h-12 cursor-pointer" @click="left">
          <div class="relative flex flex-1 overflow-hidden">
            <div id="dateNav" ref="dateNav" class="flex w-full overflow-x-scroll hideBar flex-nowrap active:cursor-grabbing">
              <div
                v-for="item in scheduleList.dateWeekMap" :key="`${item[0]}pcDate`" :archdate="item[0]" class="select-none dateItem"
                :class="currentTab === item[0] ? 'dataActive' : ''" @click.stop.prevent="chooseTab(item[0])" @mousedown="bindDrag"
              >
                <div class="date">
                  {{ item[0] }}
                </div>
                <div class="week">
                  {{ item[1] }}
                </div>
              </div>
            </div>
          </div>
          <img src="/src/assets/arr.png" class="h-12 rotate-180 cursor-pointer" alt="" srcset="" @click="right">
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
      </template>
      <LoadingVue v-if="!loaded" h="10rem" />
      <EmptyVue v-if="loaded && !schedule.length" />
    </div>
  </div>
</template>

<style lang="scss">
.schedulePage {
  margin: 0 auto;
  background-color: #56031A;

  .scheduleCtn {
    width: 1200px;
    margin: 0 auto;

    .dateLine {
      width: 100%;
      margin-top: 20px;
      display: flex;
      position: relative;

      .dateWarpper {
        flex: 1;

        .warper {
          width: 100%;
          white-space: nowrap;
          overflow-x: scroll;

          /*隐藏滚动条*/
          &::-webkit-scrollbar {
            display: none;
          }

        }

      }
    }

    .listContainer {
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
          margin: 15px 0 15px 18px;
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

.ScheduleSwiper {
  padding: 0 30px;

}
.dateItem {
  min-width: 140px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8F0F36;
  padding: 5px 0;

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
.hideBar{
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
