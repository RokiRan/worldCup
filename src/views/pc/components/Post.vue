<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
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
            <Swiper slides-per-view="auto" :space-between="2" :navigation="true" :modules="[Navigation]" class="postSlider">
              <SwiperSlide v-for="item in imageArr" :key="item">
                <div class="flex imgWarp">
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
        width: 1256px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;

        .groupingInfo {
          :deep(.postSlider) {
            padding: 0 26px;
            .swiper-wrapper {

              .swiper-slide {
                width: 1229px !important;
                .imgWarp{
                  width: 1200px;
                  justify-content: space-between;
                }
              }
            }
            .swiper-button-prev{
              left: 0;
            }
            .swiper-button-prev::after {
              content: "";
              display: inline-block;
              width: 2.5rem;
              height: 2.5rem;
              background: url("/src/assets/leftSmallBt2.png") no-repeat;
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
              background: url("/src/assets/leftSmallBt2.png") no-repeat;
              transform-origin: center 50%;
              transform: rotate(180deg) translateY(-50%);
              background-size: 100% 100%;
              position: absolute;
              right: -6px;
              bottom: 50%;
              z-index: 999999;
            }
          }
        }
      }
    }
  }
}
</style>
