<script lang="ts" setup>
import ListItemSmallVue from "~/components/layout/News/ListItemSmall.vue";
import ListItemBigVue from "~/components/layout/News/ListItemBig.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import Empty from "~/components/layout/Empty/index.vue";

import { getNews } from "~/http";
import type { NewsItem } from "~/types/News";
import { menuItems } from "~/utils/menu";

const props = defineProps<{
  title: string;
}>();

const newsList = ref<NewsItem[]>([]);
const loaded = ref(false);

onMounted(async () => {
  getNewsList();
});

async function getNewsList() {
  const title = props.title;
  const id = menuItems.find(item => item.name === title)?.id || "1";
  const res = await getNews(id);
  newsList.value = res.data?.data[0]?.list;
  loaded.value = true;
}
</script>

<template>
  <div class="newsListPage">
    <div class="newsListCtn">
      <SubTitileVue :title="$props.title" />
      <div class="itemList">
        <div class="container">
          <div v-for="news in newsList" :key="news.id">
            <ListItemBigVue v-if="news.showType === 3" :news="news" />
            <ListItemSmallVue v-else :news="news" style="margin-top: .3rem;" />
          </div>
          <Empty v-show="newsList.length === 0 && loaded" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.newsListPage {
    width: 100vw;
    margin: 0 auto;
    background-color: #56031A;
    .newsListCtn{
      width: 1200px;
      margin: 0 auto;
      .container{
        padding: 10px 80px;
        background-color: #8F0F36;
        margin: 0 auto;
        margin-top: 20px;
      }
    }
}
</style>
