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
import { isMobile } from "~/utils/isMobile";
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
    const curNewsTitle = ref("");
    const toggleSchedule = () => {
      isShowSchedule.value = !isShowSchedule.value;
    };
    const toggleNewsList = (title: string) => {
      curNewsTitle.value = title;
      isShowNesList.value = !isShowNesList.value;
    };
    return {
      isShowSchedule,
      isShowNesList,
      toggleSchedule,
      toggleNewsList,
      curNewsTitle,
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
      watches: [],
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
      this.watches = res.data.watch;
      this.bigTalk = res.data.bigTalk;
      this.godReplies = res.data.godReplies;
      this.daily = res.data.daily;
      this.expressReport = res.data.expressReport;
      this.shooter = res.data.shooter;
      this.loaded = true;
    });
  },
  beforeCreate() {
    isMobile() && window.location.replace("/h5/home");
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
        <HeadSliderVue
          v-animate="'fadeAnimation'" :slider="titleNews" :schedule="schedule"
          @showSchedule="toggleSchedule"
        />
        <CreditsVue v-animate="'fadeAnimation'" :source="source" />
        <DingVue v-animate="'fadeAnimation'" arch="ding" :card="card" @showNewsList="toggleNewsList('阿汤哥打“卡”')" />
        <PostVue v-animate="'fadeAnimation'" :images="poster" />
        <div class="newsBlock">
          <DingResVue v-animate="'fadeAnimation'" arch="hotFocus" :card="hot" @showNewsList="toggleNewsList('热点聚焦')" />
          <NewsVue v-animate="'fadeAnimation'" arch="today" title="今日看点" :news="watches" @showNewsList="toggleNewsList('今日看点')" />
          <NewsVue v-animate="'fadeAnimation'" arch="talk" title="大话世界杯" :news="bigTalk" @showNewsList="toggleNewsList('大话世界杯')" />
          <NewsVue v-animate="'fadeAnimation'" arch="reply" title="世界杯神回复" :news="godReplies" @showNewsList="toggleNewsList('世界杯神回复')" />
          <DailyVue v-animate="'fadeAnimation'" arch="daily" :news="daily" @showNewsList="toggleNewsList('世界杯日报')" />
          <NewsVue v-animate="'fadeAnimation'" arch="score" title="比分速报" :news="expressReport" @showNewsList="toggleNewsList('比分速报')" />
        </div>
      </div>
      <div v-show="isShowSchedule">
        <ScheduleVue />
      </div>
      <div v-if="isShowNesList">
        <NewsListVue :title="curNewsTitle" />
      </div>
    </div>
    <RankVue :items="shooter" />
    <Foot />
  </div>
</template>

<style lang="scss" scoped>
.blockHolder {
  min-width: $min-width;

  .newsBlock {
    width: 100%;
    margin-top: -20px;
    background: url(/src/assets/topBJ.png);
  }
}
</style>
