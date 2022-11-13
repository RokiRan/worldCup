<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import HeadSliderItemVue from "~/components/swiper/HeadSliderItem.vue";
import BigImgVue from "~/components/swiper/BigImg.vue";
// Import Swiper Vue.js components

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    HeadSliderItemVue,
    BigImgVue,
  },
  props: {
    slider: {
      type: Array,
      default: () => [],
    },
    schedule: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["showSchedule"],
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    showSchedule() {
      this.$emit("showSchedule");
    },
  },
};
</script>

<template>
  <div class="bg">
    <div class="contentArea">
      <Swiper
        :slides-per-view="4"
        :space-between="20"
        :navigation="false"
        class="headSwiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="item in $props.schedule" :key="item">
          <HeadSliderItemVue :item="item" />
        </SwiperSlide>
      </Swiper>
      <div class="groupmore">
        <div class="Dot" />
        <div class="Dot" />
        <div class="moreBt" @click="showSchedule">
          查看更多
        </div>
        <div class="Dot" />
        <div class="Dot" />
      </div>
    </div>
    <div class="bigImg">
      <BigImgVue :slider-items="slider" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg{
  background-image: url(/src/assets/bj.png);
  background-position: center;
  background-size: 100%;
}
.contentArea {
  width: $min-width;
  position: relative;
  z-index: 999;
  margin: auto;
  height: auto;
  padding: 10px 0;
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
.groupmore {
  width: 56px;
  height: 154px;
  background: linear-gradient(360deg, #811133 0%, #950832 100%);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  margin: 0 0 0 10px;
  color: #fff;
  cursor: pointer;
}

.groupTime div.team {
  display: inline-block;
  width: 33%;
  vertical-align: middle;
  text-align: center;
}

.teamLogo {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}

.teamLogo img {
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
  color: #ff004c;
  cursor: pointer;
}
.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}
.headSwiper{
  margin-left: 0;
  .swiper-wrapper{
    .swiper-slide{
      width: 282.5px !important;
    }
  }
}
</style>
