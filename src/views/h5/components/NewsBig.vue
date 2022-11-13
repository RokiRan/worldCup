<script lang="ts" setup>
import type { PropType } from "vue";
import BlockVue from "./Block.vue";

import BigImgNewsItemVue from "./item/BigImgNewsItem.vue";
import type { NewsItem } from "~/types/News";

defineProps({
  title: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
  news: {
    type: Array as PropType<NewsItem[]>,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <BlockVue :title="$props.title">
      <BigImgNewsItemVue v-for="n in $props.news" :key="n.id" :news="n" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
