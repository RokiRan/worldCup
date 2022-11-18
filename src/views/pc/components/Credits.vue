<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, type Swiper as SwiperType } from "swiper";
import CreditItemVue from "~/components/swiper/CreditItem.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import type { OneGroup } from "~/types/News";

defineProps<{
  source: Record<string, OneGroup[]>;
}>();

const sliderInstance = ref<SwiperType>();
const updateSwiper = (swiper: SwiperType) => {
  sliderInstance.value = swiper;
};
</script>

<template>
  <div class="creditContainier">
    <SubTitileVue title="小组赛分组/积分" />
    <div class="creditContent">
      <div class="swiper-button-prev3" @click="sliderInstance?.slideNext()" />
      <Swiper
        :slides-per-view="4" :space-between="2" :navigation="{
          prevEl: '.swiper-button-next3',
          nextEl: '.swiper-button-prev3',
        }" :modules="[Navigation]"
        class="creditSwiper"
        @swiper="updateSwiper"
      >
        <SwiperSlide v-for="(item, key, index) in $props.source" :key="`${key}credite`" class="grab">
          <CreditItemVue :key="index" :items="item" :group="key" />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-button-next3" @click="sliderInstance?.slidePrev()" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creditContainier {
  background-image: url(/src/assets/groupBJ.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .creditContent{
    width: 1300px;
    margin: 20px auto 0 auto;
    position: relative;
    padding-bottom: 40px;
    .creditSwiper{
      width: 1210px;
    }
    .swiper-button-next3 {
      position: absolute;
      top: 40%;
      left: 12px;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      background: url(/src/assets/arr-left-big.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      z-index: 999999;
    }

    .swiper-button-prev3 {
      position: absolute;
      top: 40%;
      right: 12px;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      background: url(/src/assets/arr-right-big.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      z-index: 10;
    }
  }
}
</style>
