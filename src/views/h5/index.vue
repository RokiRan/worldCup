<script lang="ts" setup>
import BannerVue from "./components/Banner.vue";
import ScheduleVue from "./components/Schedule.vue";
import CreditesVue from "./components/Credites.vue";
import NewsVue from "./components/NewsBig.vue";
import NewsSmallVue from "./components/NewsSmall.vue";
import PostVue from "./components/Post.vue";
import DailyVue from "./components/Daily.vue";
</script>

<template>
  <div class="h5Container">
    <BannerVue />
    <ScheduleVue />
    <CreditesVue />
    <NewsVue />
    <PostVue />
    <NewsVue />
    <NewsSmallVue />
    <DailyVue />
  </div>
</template>

<style lang="scss">
.h5Container{
    background-color: #6C0A20;
    padding-bottom: 2rem;
}
</style>
