<script lang="ts">
import BannerVue from "./components/Banner.vue";
import NavVue from "./components/Nav.vue";
import HeadSliderVue from "./components/HeadSlider.vue";
import CreditsVue from "./components/Credits.vue";
import DingVue from "./components/Ding.vue";
import DingResVue from "./components/DingRes.vue";
import PostVue from "./components/Post.vue";
import NewsVue from "./components/News.vue";
import DailyVue from "./components/Daily.vue";
import RankVue from "./components/Rank.vue";
import ScheduleVue from "./components/Schedule.vue";
import NewsListVue from "./components/NewsList.vue";
import Foot from "~/components/layout/Footer/index.vue";

import { getHome } from "~/http";
export default defineComponent({
  name: "Index",
  components: {
    BannerVue,
    NavVue,
    HeadSliderVue,
    CreditsVue,
    DingVue,
    PostVue,
    DingResVue,
    NewsVue,
    DailyVue,
    Foot,
    RankVue,
    ScheduleVue,
    NewsListVue,
  },
  setup() {
    const isShowSchedule = ref(false);
    const isShowNesList = ref(false);
    const toggleSchedule = () => {
      isShowSchedule.value = !isShowSchedule.value;
    };
    const toggleNewsList = () => {
      isShowNesList.value = !isShowNesList.value;
    };
    return {
      isShowSchedule,
      isShowNesList,
      toggleSchedule,
      toggleNewsList,
    };
  },
  data() {
    return {
      loaded: false,
      schedule: [],
      titleNews: [],
      source: [],
      card: [],
      poster: [],
      hot: [],
      watch: [],
      bigTalk: [],
      godReplies: [],
      daily: [],
      expressReport: [],
      shooter: [],
    };
  },
  mounted() {
    getHome().then((res) => {
      this.schedule = res.data.schedule;
      this.titleNews = res.data.titleNews;
      this.source = res.data.source;
      this.card = res.data.card;
      this.poster = res.data.poster;
      this.hot = res.data.hot;
      this.watch = res.data.watch;
      this.bigTalk = res.data.bigTalk;
      this.godReplies = res.data.godReplies;
      this.daily = res.data.daily;
      this.expressReport = res.data.expressReport;
      this.shooter = res.data.shooter;
      this.loaded = true;
    });
  },
  methods: {
    scrollTo(key: number) {
      if (this.isShowSchedule || this.isShowNesList) {
        this.isShowNesList = false;
        this.isShowSchedule = false;
      }
      this.$nextTick(() => {
        const el = document.querySelector(`div[arch=${key}]`) as HTMLElement;
        window.scrollTo({
          top: (el?.offsetTop || 0) - 20,
          behavior: "smooth",
        });
      });
    },
  },
});
</script>

<template>
  <div class="blockHolder">
    <BannerVue arch="home" />
    <NavVue @change="scrollTo" />
    <div v-if="loaded">
      <div v-show="!isShowSchedule && !isShowNesList">
        <HeadSliderVue :slider="titleNews" :schedule="schedule" @showSchedule="toggleSchedule" />
        <CreditsVue :source="source" />
        <DingVue arch="ding" :card="card" @showNewsList="toggleNewsList" />
        <PostVue :images="poster" />
        <div class="newsBlock">
          <DingResVue arch="hotFocus" :card="hot" />
          <NewsVue arch="today" title="今日看点" :news="[]" />
          <NewsVue arch="talk" title="大话世界杯" :news="bigTalk" />
          <NewsVue arch="reply" title="世界杯神回复" :news="godReplies" />
          <DailyVue arch="daily" :news="daily" />
          <NewsVue arch="score" title="比分速报" :news="expressReport" />
        </div>
      </div>
      <div v-show="isShowSchedule">
        <ScheduleVue />
      </div>
      <div v-show="isShowNesList">
        <NewsListVue />
      </div>
    </div>
    <RankVue />
    <Foot />
  </div>
</template>

<style lang="scss" scoped>
.blockHolder{
  min-width: $min-width;
  .newsBlock{
    width: 100%;
    margin-top: -20px;
    background: url(/src/assets/topBJ.png);
  }
}
</style>
