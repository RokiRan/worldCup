<script lang="ts" setup>
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import BlockVue from "./Block.vue";
import SmallImgNewsItemVue from "./item/SmallImgNewsItem.vue";
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
const newsList = computed(() => {
  return props.news.slice(0, 3);
});
</script>

<template>
  <div>
    <BlockVue :title="$props.title" :show="true" @more="more">
      <SmallImgNewsItemVue v-for="n in newsList" :key="n.id" :news="n" />
      <EmptyVue v-if="newsList?.length === 0" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
