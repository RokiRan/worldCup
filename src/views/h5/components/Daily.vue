<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
import BlockVue from "./Block.vue";
import DailyItemVue from "./item/DailyItem.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
// Import Swiper styles
import "swiper/css";

import type { NewsItem } from "~/types/News";
import { openPage } from "~/utils/menu";
defineProps<{
  news: NewsItem[];
}>();

const router = useRouter();
function more() {
  router.push({
    name: "News",
    query: {
      title: "世界杯日报",
    },
  });
}
</script>

<template>
  <div>
    <BlockVue title="世界杯日报" :show="true" @more="more">
      <Swiper v-if="$props.news?.length" slides-per-view="auto" :space-between="10" class="mySwiper">
        <SwiperSlide v-for="item in $props.news" :key="item.id">
          <DailyItemVue :news="item" @click="openPage(item)" />
        </SwiperSlide>
      </Swiper>
      <EmptyVue v-else />
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
            height: 11.5rem;
        }
    }
}
</style>
