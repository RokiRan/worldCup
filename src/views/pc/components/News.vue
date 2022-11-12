<script lang="ts" setup>
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import SmallImgVue from "~/components/layout/News/SmallImg.vue";
import type { NewsItem } from "~/types/News";
defineProps<{
  title: string;
  news: NewsItem[];
}>();
</script>

<template>
  <div class="newsblock">
    <SubTitileVue :title="$props.title" @more="null" />
    <div class="news">
      <SmallImgVue v-for="item in $props.news" :key="item.id" :image="item" />
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
