<script lang="ts" setup>
import dayjs from "dayjs";
import { useRouter } from "vue-router";
import { type PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, type Swiper as SwiperType } from "swiper";
import BlockVue from "./Block.vue";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import ScheduleItemVue from "./item/ScheduleItem.vue";
import ScheduleBigImgItemVue from "./item/ScheduleBigImgItem.vue";
import type { NewsItem, ScheduleItem } from "~/types/News";

const props = defineProps({
  slider: {
    type: Array as PropType<NewsItem[]>,
    default: () => [],
  },
  schedule: {
    type: Array as PropType<ScheduleItem[]>,
    default: () => [],
  },
});

const router = useRouter();
const sendEvent = () => {
  router.push({
    name: "Schedule",
  });
};
function setSwiper(swiper: SwiperType) {
  const today = dayjs().format("MM-DD");
  const list = (props.schedule || []).sort((a, b) => dayjs(a.createTime).isBefore(b.createTime) ? -1 : 1);
  if (list.length === 0) {
    return;
  }
  const index = list.findIndex(t => dayjs(t.createTime).format("MM-DD") === today);
  // 是否未开始
  if (dayjs().isBefore(dayjs(list[0].createTime))) {
    swiper.slideTo(0);
  } else if (dayjs().isAfter(dayjs(list[list.length - 1].createTime))) {
    swiper.slideTo(list.length - 1);
  } else if (index > -1) {
    swiper.slideTo(index);
  } else {
    // 移动到最近的一天
    const index = list.findIndex(t => dayjs(t.createTime).isAfter(dayjs()));
    swiper.slideTo(index);
  }
}
</script>

<template>
  <div>
    <BlockVue title="赛程" :show="true" @more="sendEvent()">
      <div>
        <Swiper slides-per-view="auto" :space-between="10" class="mySwiper" @swiper="setSwiper">
          <SwiperSlide v-for="item in $props.schedule" :key="item.teamOne">
            <ScheduleItemVue :item="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div class="black" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper v-if="$props.slider?.length" slides-per-view="auto" :loop="true" :space-between="10" class="mySwiper2" :navigation="true" :modules="[Navigation]">
          <SwiperSlide v-for="item in $props.slider" :key="item.id">
            <ScheduleBigImgItemVue :news="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>
.black{
  visibility: hidden !important;
}
:deep(.mySwiper) {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
        text-align: center;
        font-size: 18px;

        .swiper-slide {
            width: 60%;
            overflow: hidden;
            &:last-child{
              // filter: ;
            }
        }
    }
}
:deep(.mySwiper2) {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
        text-align: center;
        font-size: 18px;

        .swiper-slide {
          overflow: hidden !important;
        }
    }
    .swiper-button-prev::before {
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 2.5rem;
        background: url("/src/assets/arr.png") no-repeat;
        background-size: 100% 100%;
        transform: translateY(50%);
        position: absolute;
        left: 0;
        bottom: 50%;
        z-index: 999999;
    }
    .swiper-button-next::after{
        content: "";
        display: inline-block;
        width: 1.5rem;
        height: 2.5rem;
        background: url("/src/assets/arr.png") no-repeat;
        transform-origin:center 50%;
        transform: rotate(180deg) translateY(-50%);
        background-size: 100% 100%;
        position: absolute;
        right: 0;
        bottom: 50%;
        z-index: 999999;
    }
}
</style>
