<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import CreditItemVue from "~/components/swiper/CreditItem.vue";
// Import Swiper styles
import "swiper/css";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import type { OneGroup } from "~/types/News";
defineProps<{
  source: Record<string, OneGroup[]>;
}>();
</script>

<template>
  <div class="creditContainier">
    <SubTitileVue title="小组赛分组/积分" @more="null" />
    <div class="content">
      <div class="groupingBtPrev" />
      <Swiper
        class="creditSwiper"
        :slides-per-view="4" :space-between="2" :navigation="{
          prevEl: '.groupingBtPrev',
          nextEl: '.groupingBtNext',
        }" :modules="[Navigation]" :pagination="{
          dynamicBullets: true,
        }"
      >
        <SwiperSlide v-for="(item, key, index) in $props.source" :key="key" class="grab">
          <CreditItemVue :key="index" :items="item" :group="key" />
        </SwiperSlide>
      </Swiper>
      <div class="groupingBtNext" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creditContainier {
  background-image: url(/src/assets/groupBJ.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  .content{
    width: 1300px;
    margin: 20px auto 0 auto;
    position: relative;
    padding-bottom: 40px;
    .creditSwiper{
      width: 1210px;
    }
    .groupingBtPrev {
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

    .groupingBtNext {
      position: absolute;
      top: 40%;
      right: 12px;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      background: url(/src/assets/leftSmallBt2.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      z-index: 10;
      // translate: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
</style>
