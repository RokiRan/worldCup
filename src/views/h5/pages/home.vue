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
    <!-- v-animate="'fadeAnimation'" -->
    <div>
      <ScheduleVue :slider="appStore.titleNews" :schedule="appStore.schedule" />
      <CreditesVue v-lazyShow="'fadeAnimation'" :source="appStore.source" />
      <NewsVue v-lazyShow="'fadeAnimation'" title="阿汤锅打“卡”" :news="appStore.card.filter(t => t.showType === 2)" />
      <PostVue v-lazyShow="'fadeAnimation'" :images="appStore.poster" />
      <NewsVue v-lazyShow="'fadeAnimation'" title="热点聚焦" :news="appStore.hot.filter(t => t.showType === 2)" />
      <NewsSmallVue v-lazyShow="'fadeAnimation'" :news="appStore.watches" title="今日看点" />
      <NewsSmallVue v-lazyShow="'fadeAnimation'" :news="appStore.bigTalk" title="大话世界杯" />
      <NewsSmallVue v-lazyShow="'fadeAnimation'" :news="appStore.godReplies" title="世界杯神回复" />
      <DailyVue v-lazyShow="'fadeAnimation'" :news="appStore.daily" />
      <NewsSmallVue v-lazyShow="'fadeAnimation'" :news="appStore.expressReport" title="比分速报" />
    </div>
  </div>
</template>

<style lang="scss">

</style>
