<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import PostItemVue from "~/components/swiper/PostItem.vue";
import type { PostItem } from "~/types/News";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";

const props = defineProps<{
  images: {
    type: PostItem[];
  };
}>();
const imageArr = computed(() => {
  // reduce 一位数组转二维数组
  return props.images.reduce((acc: PostItem[], cur: PostItem, index: number) => {
    const page = Math.floor(index / 4);
    if (!acc[page]) {
      acc[page] = [];
    }
    acc[page].push(cur);
    return acc;
  }, []);
});
</script>

<template>
  <div class="container5">
    <div class="columnBox">
      <SubTitileVue title="赛果海报" @more="null" />
      <div class="groupingPosetion">
        <div class="grouping5">
          <div class="groupingInfo">
            <Swiper
              :slides-per-view="1" :space-between="2" :navigation="false"
              next-el=".groupingBtNext" prev-el=".groupingBtPrev" class="postSlider"
            >
              <SwiperSlide v-for="item in imageArr" :key="item">
                <div class="flex">
                  <PostItemVue v-for="item_ in item" :key="`${item_}`" :post="item_" />
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
.container5 {
  background-image: url(/src/assets/bg3.png);
  background-size: cover;
  background-repeat: no-repeat;

  .columnBox {
    .groupingPosetion {
      position: relative;
      width: 100%;
      height: 660px;
      margin: 20px auto;

      .grouping5 {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
      }
    }
  }
}
</style>
