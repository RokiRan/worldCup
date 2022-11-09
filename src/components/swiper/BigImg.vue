<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const imgs = [];
for (let i = 2; i < 10; i++) {
  imgs.push(`https://swiperjs.com/demos/images/nature-${i}.jpg`);
}
const thumbsSwiper = ref(null);

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}

const modules = [FreeMode, Navigation, Thumbs];
</script>

<template>
  <div class="container">
    <Swiper
      :style="{
        '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
      }"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      effect="coverflow"
      :grab-cursor="true"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <SwiperSlide v-for="img in imgs" :key="img">
        <img
          :src="img"
        >
      </SwiperSlide>
    </Swiper>
    <Swiper
      ref="thumbsSwiper"
      :space-between="10"
      :slides-per-view="4"
      :free-mode="false"
      :watch-slides-progress="true"
      :modules="modules"
      class="mySwiper"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide v-for="img in imgs" :key="img">
        <img
          :src="img"
        >
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.container {
    width: $min-width;
    margin: 0 auto;
    height: 600px;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
