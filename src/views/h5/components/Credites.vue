<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import BlockVue from "./Block.vue";
// Import Swiper styles
import "swiper/css";

import CrediteItemVue from "./item/CrediteItem.vue";
import type { OneGroup } from "~/types/News";

defineProps<{
  source: Record<string, OneGroup[]>;
}>();
</script>

<template>
  <div>
    <BlockVue title="小组赛积分">
      <Swiper slides-per-view="auto" :space-between="10" class="mySwiper">
        <SwiperSlide v-for="(item, key, index) in $props.source" :key="`${index}mySwiper`">
          <CrediteItemVue :key="`${index}crediteSwiperItem`" :items="item" :group="key" />
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
        }
    }
}
</style>
