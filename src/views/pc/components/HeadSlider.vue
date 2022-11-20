<script lang="ts">
import type { PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, type Swiper as SwiperType } from "swiper";
import dayjs from "dayjs";
import HeadSliderItemVue from "~/components/swiper/HeadSliderItem.vue";
import BigImgVue from "~/components/swiper/BigImg.vue";
// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";

import type { NewsItem, ScheduleItem } from "~/types/News";

export default {
  components: {
    Swiper,
    SwiperSlide,
    HeadSliderItemVue,
    BigImgVue,
  },
  props: {
    slider: {
      type: Array as PropType<NewsItem[]>,
      default: () => [],
    },
    schedule: {
      type: Array as PropType<ScheduleItem[]>,
      default: () => [],
    },
  },
  emits: ["showSchedule"],
  setup() {
    const ScheduleSwiper = ref<SwiperType>();
    return {
      Navigation,
      ScheduleSwiper,
    };
  },
  computed: {
    scheduleList() {
      const list = shallowReactive(this.$props?.schedule || []);
      return list.sort((a, b) => dayjs(a.createTime).isBefore(b.createTime) ? -1 : 1);
    },
  },
  methods: {
    showSchedule() {
      this.$emit("showSchedule");
    },
    setSwiper(swiper: SwiperType) {
      this.ScheduleSwiper = swiper;
      const today = dayjs().format("MM-DD");
      const list = this.scheduleList || [];
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
        // 比赛中 需要找到最近的比赛
        const now = dayjs();
        const index = list.findIndex(t => now.isBefore(dayjs(t.createTime)));
        if (index > -1) {
          swiper.slideTo(index);
        } else {
          swiper.slideTo(list.length - 1);
        }
      }
    },
  },
};
</script>

<template>
  <div class="bg">
    <div class="contentArea">
      <Swiper slides-per-view="auto" :space-between="10" :navigation="true" :free-mode="true" :modules="[Navigation]" class="headSwiper" @swiper="setSwiper">
        <SwiperSlide v-for="item in scheduleList" :key="item.sessions" class="grab">
          <HeadSliderItemVue :item="item" />
        </SwiperSlide>
        <SwiperSlide v-for="i in 4" :key="i" class="black grab">
          <div class="w-1 h-1 opacity-0" />
        </SwiperSlide>
      </Swiper>
      <div class="groupmore">
        <div class="Dot" />
        <div class="Dot" />
        <div class="moreBt" @click="showSchedule">
          查看全部
        </div>
        <div class="Dot" />
        <div class="Dot" />
      </div>
    </div>
    <div v-if="slider.length">
      <BigImgVue :slider-items="slider" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-image: url(/src/assets/bj.png);
  background-position: center;
  background-size: 100%;
}

.contentArea {
  width: 1256px;
  position: relative;
  z-index: 999;
  margin: auto;
  height: auto;
  padding: 16px 0;
  display: flex;
}

.swiper-container {
  width: 100%;
  height: 100%;
  // margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2);

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  width: 276px;
  background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  border-radius: 0px 20px 0px 0px;
  opacity: 1;
}
.black{
  visibility: hidden !important;
}

.groupmore {
  width: 57px;
  height: 154px;
  background: linear-gradient(360deg, #811133 0%, #950832 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  margin: 0 0 0 10px;
  position: absolute;
  right: 27px;
  z-index: 21;
  color: #fff;
  cursor: pointer;
}

.groupTime {
  display: inline-block;
  // width: 33%;
  vertical-align: middle;
  text-align: center;
}

.teamLogo {
  width: 44px;
  height: 44px;
  margin: 0 auto;
}

.teamLogo img {
  width: 44px;
  height: 44px;
  width: 100%;
}

.groupTime div.teamName {
  font-size: 12px;
  text-align: center;
}

.info {
  display: inline-block;
  width: 30%;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  margin-top: 5px;
}

.groupTime div.score {
  font-size: 18px;
  text-align: center;
}

.Dot {
  width: 7px;
  height: 7px;
  background: #ff004c;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  transform: rotate(45deg);
  margin: 10px auto;
}

.moreBt {
  width: 56px;
  text-align: center;
  font-size: 14px;
  writing-mode: vertical-lr;
  /*从左向右从右向左是writing-mode:vertical-rl;*/
  writing-mode: tb-lr;
  /*IE浏览器的从左向右从右向左是writing-mode:tb-rl；*/
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  cursor: pointer;
}

:deep(.headSwiper) {
  margin-left: 0;
  width: 12640px;
  .swiper-wrapper {
    padding: 0 28px;
    .swiper-slide {
      width: 276px;
      height: 154px;
    }
  }
  .swiper-button-prev{
    background-color: #590419;
    height: 154px;
    top: 22px;
    left: 0;
  }
  .swiper-button-next{
    background-color: #590419;
    height: 154px;
    top: 22px;
    right: 0;
  }
  .swiper-button-prev::after {
    content: "";
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background: url("/src/assets/arr-left-big.png") no-repeat;
    background-size: 100% 100%;
    transform: translateY(50%);
    position: absolute;
    left: 0;
    bottom: 50%;
    z-index: 999999;
  }

  .swiper-button-next::after {
    content: "";
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background: url("/src/assets/arr-left-big.png") no-repeat;
    transform-origin: center 50%;
    transform: rotate(180deg) translateY(-50%);
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    bottom: 50%;
    z-index: 999999;
  }
  .swiper-button-disabled{
    opacity: 1;
  }
}
</style>
