<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import ScheduleListItemVue from "./ScheduleListItem.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
// Import Swiper styles
import "swiper/css";

const dates = [{
  date: "11-21",
  week: "周一",
},
{
  date: "11-22",
  week: "周二",
},
{
  date: "11-23",
  week: "周三",
},
{
  date: "11-24",
  week: "周四",
},
{
  date: "11-25",
  week: "周五",
},
{
  date: "11-26",
  week: "周六",
},
{
  date: "11-27",
  week: "周日",
},
{
  date: "11-28",
  week: "周一",
},
{
  date: "11-29",
  week: "周二",
},
{
  date: "11-27",
  week: "周日",
},
{
  date: "11-28",
  week: "周一",
},
{
  date: "11-29",
  week: "周二",
},
{
  date: "11-27",
  week: "周日",
},
{
  date: "11-28",
  week: "周一",
},
{
  date: "11-29",
  week: "周二",
},
];

const currentTab = ref("11-21");
</script>

<template>
  <div class="schedulePage">
    <div class="scheduleCtn">
      <SubTitileVue title="赛程" @more="null" />
      <div class="dateLine">
        <Swiper :modules="[Navigation]" :slides-per-view="8" :navigation="true" class="ScheduleSwiper">
          <SwiperSlide v-for="item in dates" :key="`${item.date}abc`">
            <div class="dateItem" :class="currentTab === item.date ? 'dataActive' : ''">
              <div class="date">
                {{ item.date }}
              </div>
              <div class="week">
                {{ item.week }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div v-for="d in 4" :key="d" class="oneDay">
        <div class="date">
          2021-07-01 星期一
        </div>
        <div class="list">
          <ScheduleListItemVue v-for="n in 3" :key="n" />
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
