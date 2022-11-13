<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import BlockVue from "./Block.vue";
// Import Swiper styles
import "swiper/css";

import PostItemVue from "./item/PostItem.vue";
import type { PostItem } from "~/types/News";

defineProps<{
  images: PostItem[];
}>();
</script>

<template>
  <div>
    <BlockVue title="小组赛积分">
      <Swiper slides-per-view="auto" :space-between="10" class="mySwiper">
        <SwiperSlide v-for="item in $props.images" :key="item.id">
          <PostItemVue :post="item" />
        </SwiperSlide>
      </Swiper>
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>
:deep(.mySwiper) {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
        text-align: center;
        font-size: 18px;

        .swiper-slide {
            width: 60%;
            height: 100%;
        }
    }
}
</style>
