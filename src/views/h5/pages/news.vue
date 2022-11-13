<script lang="ts" setup>
import { useRoute } from "vue-router";
import BlockVue from "../components/Block.vue";
import BigImgNewsItemVue from "../components/item/BigImgNewsItem.vue";
import SmallImgNewsItemVue from "../components/item/SmallImgNewsItem.vue";
import { getNews } from "~/http";
import type { NewsItem } from "~/types/News";
import { menuItems } from "~/utils/menu";

const router = useRoute();
const newsList = ref<NewsItem[]>([]);
const title = computed(() => {
  return router.query.title;
});
watchEffect(() => {
  const title = router.query.title;
  const id = menuItems.find(item => item.name === title)?.id;
  if (id) {
    newsList.value = [];
    getNewsList(id);
  }
});

onMounted(async () => {
//   getNewsList();
});
async function getNewsList(id = "1") {
  const res = await getNews(id);
  newsList.value = res.data?.data[0]?.list;
}
</script>

<template>
  <div>
    <BlockVue :title="title">
      <div v-for="news in newsList" :key="news.id">
        <BigImgNewsItemVue v-if="news.showType === 3" :news="news" />
        <SmallImgNewsItemVue v-else :news="news" style="margin-top: .3rem;" />
      </div>
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
