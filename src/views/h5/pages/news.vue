<script lang="ts" setup>
import { useRoute } from "vue-router";
import _ from "lodash";
import BlockVue from "../components/Block.vue";
import BigImgNewsItemVue from "../components/item/BigImgNewsItem.vue";
import SmallImgNewsItemVue from "../components/item/SmallImgNewsItem.vue";
import Empty from "~/components/layout/Empty/index.vue";
import { getNews } from "~/http";
import type { NewsItem } from "~/types/News";
import { getMenuItems, openPage } from "~/utils/menu";

// 是否正在加载
const loading = ref(false);
const page = ref(1); // 当前页码
const menuItems = getMenuItems();
const router = useRoute();
const newsList = ref<NewsItem[]>([]);
const loaded = ref(false);
const isLoadAll = ref(false);
const title = computed(() => {
  return router.query.title;
});

const id = ref("");
// 监听路由
watch(
  () => router.query.title,
  () => {
    isLoadAll.value = false;
    page.value = 1;
    const title = router.query.title;
    id.value = menuItems.find(item => item.name === title)?.id || "";
    if (!id.value) {
      return;
    }
    loaded.value = false;
    newsList.value = [];
    getNewsList();
  }
  , {
    immediate: true,
  });
async function getNewsList() {
  loading.value = true;
  if (id.value === "1") {
    return loaded.value = true;
  }
  const res = await getNews(id.value, page.value);
  if (res?.data && res?.data?.data && res.data.data.length > 0 && res.data.data[0].list.length > 0) {
    newsList.value = [...newsList.value, ...res?.data?.data[0].list];
  } else {
    isLoadAll.value = true;
  }
  loaded.value = true;
  loading.value = false;
}

// 触底加载
const loadMore = () => {
  page.value = page.value + 1;
  getNewsList();
};

// 触底检测
const checkBottom = (e: any) => {
  if (loading.value || isLoadAll.value) {
    return;
  }
  const { scrollTop, scrollHeight, clientHeight } = e.target;
  if (scrollTop + clientHeight >= scrollHeight) {
    loadMore();
  }
};
// 防抖处理
const debounceLoadMore = _.debounce(checkBottom, 100);
</script>

<template>
  <div>
    <BlockVue :title="title" @touchmove="debounceLoadMore">
      <div v-for="news in newsList" :key="news.id">
        <BigImgNewsItemVue v-if="news.showType === 2" :news="news" @click="openPage(news)" />
        <SmallImgNewsItemVue v-else :news="news" style="margin-top: .3rem;" @click="openPage(news)" />
      </div>
      <Empty v-show="newsList.length === 0 && loaded" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
