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
      <NewsVue title="阿汤哥打“卡”" :news="appStore.card" />
      <PostVue :images="appStore.poster" />
      <NewsVue title="热点聚焦" :news="appStore.hot" />
      <NewsSmallVue :news="appStore.watches" title="今日看点" />
      <NewsSmallVue :news="appStore.bigTalk" title="大话世界杯" />
      <NewsSmallVue :news="appStore.godReplies" title="世界杯神回复" />
      <DailyVue :news="appStore.daily" />
      <NewsSmallVue :news="appStore.expressReport" title="比分速报" />
    </div>
  </div>
</template>

<style lang="scss">

</style>
