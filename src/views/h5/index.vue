<script lang="ts" setup>
import BannerVue from "./components/Banner.vue";
import ScheduleVue from "./components/Schedule.vue";
import CreditesVue from "./components/Credites.vue";
import NewsVue from "./components/NewsBig.vue";
import NewsSmallVue from "./components/NewsSmall.vue";
import PostVue from "./components/Post.vue";
import DailyVue from "./components/Daily.vue";
import RankVue from "./components/Rank.vue";
import RankPopVue from "./components/RankPop.vue";
import ScheduleListVue from "./components/ScheduleList.vue";
const showRankPop = ref(false);
const showScheduleList = ref(false);
const toggleRankPop = () => {
  showRankPop.value = !showRankPop.value;
};
const toggleScheduleList = () => {
  showScheduleList.value = !showScheduleList.value;
};
</script>

<template>
  <div class="h5Container" :class="showRankPop ? 'disableScroll' : ''">
    <img src="/src/assets/banner-h5.png" class="w-100vw" alt="" srcset="">
    <BannerVue />
    <div v-show="!showScheduleList">
      <ScheduleVue @more="toggleScheduleList" />
      <CreditesVue />
      <NewsVue />
      <PostVue />
      <NewsVue />
      <NewsSmallVue />
      <DailyVue />
    </div>
    <div v-show="showScheduleList">
      <ScheduleListVue />
    </div>
    <RankVue @click="toggleRankPop" />
    <Transition name="fade">
      <RankPopVue v-show="showRankPop" @close="toggleRankPop" />
    </Transition>
  </div>
</template>

<style lang="scss">
.h5Container{
    background-color: #6C0A20;
    padding-bottom: 2rem;
}
.disableScroll{
  overflow-y: hidden !important;
  // scroll-behavior: smooth;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
