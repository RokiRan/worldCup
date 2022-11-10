<script lang="ts" setup>
import BlockVue from "./Block.vue";

import ScheduleListItemVue from "./item/ScheduleListItem.vue";

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
];
</script>

<template>
  <div>
    <BlockVue title="赛程">
      <div class="sheduleList">
        <div class="dateLine">
          <div class="dataContainer">
            <div v-for="date in dates" :key="date.date" class="dateItem" :class=" date.week === '周一' ? 'dataActive' : ''">
              <div class="date">
                {{ date.date }}
              </div>
              <div class="week">
                {{ date.week }}
              </div>
            </div>
          </div>
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
        .dataContainer {
            width: 100%;
            display: flex;
            overflow-x: scroll;

            .dateItem {
                display: flex;
                flex-direction: column;
                align-items: center;
                white-space: nowrap;
                min-width: 4rem;
                overflow-x: scroll;

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

    .oneDay {
        margin-bottom: .3rem;

        .date {
            color: #fff;
            margin-bottom: .2rem;
            font-size: .9rem;
        }

        .list {
            .item {
                margin-bottom: .2rem;
            }
        }
    }
}
</style>
