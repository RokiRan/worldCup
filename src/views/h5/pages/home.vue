<script lang="ts">
import ScheduleVue from "../components/Schedule.vue";
import CreditesVue from "../components/Credites.vue";
import NewsVue from "../components/NewsBig.vue";
import NewsSmallVue from "../components/NewsSmall.vue";
import PostVue from "../components/Post.vue";
import DailyVue from "../components/Daily.vue";
import { useAppStore } from "~/store/app";
export default {
  components: {
    ScheduleVue,
    CreditesVue,
    NewsVue,
    NewsSmallVue,
    PostVue,
    DailyVue,
  },
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    };
  },
  methods: {
    toggleScheduleList() {
    //   this.showScheduleList = !this.showScheduleList;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <ScheduleVue :slider="appStore.titleNews" :schedule="appStore.schedule" />
      <CreditesVue :source="appStore.source" />
      <NewsVue title="阿汤哥打“卡”" :news="appStore.titleNews" />
      <PostVue :images="appStore.poster" />
      <!-- <NewsVue /> -->
      <NewsSmallVue :news="appStore.titleNews" title="哈哈哈哈" />
      <DailyVue :news="appStore.titleNews" />
    </div>
  </div>
</template>

<style lang="scss">

</style>
