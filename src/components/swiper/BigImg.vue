<script lang="ts" setup>
import { type PropType } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import { newsImgFmt } from "~/utils/image";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import required modules

import type { NewsItem } from "~/types/News";

import { openPage } from "~/utils/menu";

const props = defineProps({
  sliderItems: {
    type: Array as PropType<NewsItem[]>,
    default: () => [],
  },
});

const thumbsSwiper = ref(null);
function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}
const effect = {
  rotate: 10, // 滑动时旋转角度
  stretch: 206, // 聚合宽度
  depth: 200, // 景深
  modifier: 1, // 覆盖叠加层数
  slideShadows: false, // 是否阴影
};
const modules = [FreeMode, Navigation, Thumbs, EffectCoverflow];
</script>

<template>
  <div class="container">
    <Swiper
      :style="{
        '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
      }" :coverflow-effect="effect" effect="coverflow" :grab-cursor="true" :loop="true" :space-between="10"
      :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiperBig"
    >
      <SwiperSlide v-for="img in props.sliderItems" :key="img.id">
        <div class="myImg" @click="openPage(img)">
          <img v-loadFail :src="newsImgFmt(img)">
          <div class="title line-clamp-1">
            {{ img.title }}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      ref="thumbsSwiper" :space-between="10" :slides-per-view="4" :free-mode="false" :watch-slides-progress="true"
      :modules="modules" class="mySwiperSmall" @swiper="setThumbsSwiper"
    >
      <SwiperSlide v-for="img in props.sliderItems" :key="img.id">
        <img v-loadFail :src="newsImgFmt(img)">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: $min-width;
  margin: 0 auto;
}

.mySwiperBig {
  height: 80%;
  width: 100%;

  .swiper-wrapper {
    .swiper-slide {
      .myImg {
        position: relative;
        img {
          width: 970px;
          height: 544px;
          margin: 0 auto;
          object-fit: cover;
        }

        .title {
          position: absolute;
          left: 115px;
          bottom: 0;
          /*渐变阴影*/
          // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
          background: linear-gradient(180deg, rgba(86,3,29,0) 0%, #171717 100%);
          font-size: 20px;
          padding: 5px;
          color: #fff;
          width: 970px;
        }
      }
    }

    .swiper-slide-prev {
      overflow: hidden;
    }

    .swiper-slide-next {
      overflow: hidden;
    }
  }
}

.mySwiperSmall {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;

  .swiper-wrapper {
    .swiper-slide {
      width: 25%;
      height: 129px;
      opacity: 0.4;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .swiper-slide-thumb-active{
      opacity: 1;
    }
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
