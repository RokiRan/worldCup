<script lang="ts" setup>
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import SmallImgVue from "~/components/layout/News/SmallImg.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
import type { NewsItem } from "~/types/News";
defineProps<{
  title: string;
  news: NewsItem[];
}>();
const emit = defineEmits<{
  (event: "showNewsList", index: number): void;
}>();
const change = (index: number) => {
  emit("showNewsList", index);
};
</script>

<template>
  <div class="newsblock">
    <SubTitileVue :title="$props.title" :show="true" @more="change" />
    <div class="news">
      <SmallImgVue v-for="item in $props.news" :key="item.id" :image="item" />
      <EmptyVue v-if="$props.news.length === 0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsblock{
    width: 1200px;
    margin: 0 auto;
    .news{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
    }
    .news div{
        width: 48%;
    }
}
</style>
