<script lang="ts" setup>
import _ from "lodash";
import ListItemSmallVue from "~/components/layout/News/ListItemSmall.vue";
import ListItemBigVue from "~/components/layout/News/ListItemBig.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import Empty from "~/components/layout/Empty/index.vue";
import { getNews } from "~/http";
import type { NewsItem } from "~/types/News";
import { getMenuItems } from "~/utils/menu";

const props = defineProps<{
  title: string;
}>();
const newsListDom = ref<HTMLElement>();
// 是否正在加载
const loading = ref(false);
const page = ref(1); // 当前页码
const isLoadAll = ref(false);

const menuItems = getMenuItems();
const newsList = ref<NewsItem[]>([]);
const loaded = ref(false);

const title = computed(() => {
  return props.title;
});

const id = computed(() => {
  return menuItems.find(item => item.name === title.value)?.id || "";
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
// TODO: 为啥无法检测滑动事件
onMounted(async () => {
  getNewsList();
});
</script>

<template>
  <div class="newsListPage">
    <div class="newsListCtn">
      <SubTitileVue :title="$props.title" />
      <div class="itemList">
        <div ref="newsListDom" class="container" @mousemove="debounceLoadMore">
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
