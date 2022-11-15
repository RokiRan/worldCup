<script lang="ts" setup>
import { useRoute } from "vue-router";
import BlockVue from "../components/Block.vue";
import BigImgNewsItemVue from "../components/item/BigImgNewsItem.vue";
import SmallImgNewsItemVue from "../components/item/SmallImgNewsItem.vue";
import Empty from "~/components/layout/Empty/index.vue";
import { getNews } from "~/http";
import type { NewsItem } from "~/types/News";
import { getMenuItems, openPage } from "~/utils/menu";

const menuItems = getMenuItems();
const router = useRoute();
const newsList = ref<NewsItem[]>([]);
const loaded = ref(false);
const title = computed(() => {
  return router.query.title;
});
watchEffect(() => {
  const title = router.query.title;
  const id = menuItems.find(item => item.name === title)?.id;
  if (id) {
    loaded.value = false;
    newsList.value = [];
    getNewsList(id);
  }
});

onMounted(async () => {
//   getNewsList();
});
async function getNewsList(id = "1") {
  if (id === "1") {
    return loaded.value = true;
  }
  const res = await getNews(id);
  if (res?.data?.data && res.data.data.length > 0) {
    newsList.value = res?.data?.data[0].list;
  }
  loaded.value = true;
}
</script>

<template>
  <div>
    <BlockVue :title="title">
      <div v-for="news in newsList" :key="news.id">
        <BigImgNewsItemVue v-if="news.showType === 3" :news="news" @click="openPage(news)" />
        <SmallImgNewsItemVue v-else :news="news" style="margin-top: .3rem;" @click="openPage(news)" />
      </div>
      <Empty v-show="newsList.length === 0 && loaded" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
