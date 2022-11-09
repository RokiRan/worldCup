<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import PostItemVue from "~/components/swiper/PostItem.vue";

import SubTitileVue from "~/components/layout/Title/SubTitile.vue";

const groupingBtNext = ref(null);
const groupingBtPrev = ref(null);
const ReditSwiper = ref();

const next = () => {
  ReditSwiper.value.slideNext();
};
const prev = () => {
  ReditSwiper.value.slidePrev();
};
</script>

<template>
  <div class="container5">
    <div class="columnBox">
      <SubTitileVue title="赛果海报" @more="null" />
      <div class="groupingPosetion">
        <div class="grouping">
          <div class="groupingInfo">
            <Swiper
              ref="ReditSwiper"
              :slides-per-view="1"
              :space-between="2"
              :navigation="false"
              next-el=".groupingBtNext"
              prev-el=".groupingBtPrev"
            >
              <SwiperSlide v-for="item in 4" :key="item">
                <div class="flex">
                  <PostItemVue v-for="item_ in (item % 2 !== 0 ? 4 : 2)" :key="`${item_}abc`" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper{
  // width: 1130px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {

}
.container5{
  width: 100vw;
  background-image: url(/src/assets/bg3.png);
  background-position: center;
}
.groupingPosetion {
  position: relative;
  width: 100%;
  height: 660px;
  margin: 20px auto;
}

.grouping {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>
