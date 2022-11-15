<script lang="ts" setup>
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import BlockVue from "./Block.vue";
import BigImgNewsItemVue from "./item/BigImgNewsItem.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
import type { NewsItem } from "~/types/News";

const props = defineProps({
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
const router = useRouter();
function more() {
  router.push({
    name: "News",
    query: {
      title: props.title,
    },
  });
}
</script>

<template>
  <div>
    <BlockVue :title="$props.title" :show="true" @more="more">
      <BigImgNewsItemVue v-for="n in $props.news" :key="n.id" :news="n" />
      <EmptyVue v-show="$props.news?.length === 0 || !$props.news" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
