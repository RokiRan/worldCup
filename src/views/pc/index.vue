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
  },
});
</script>

<template>
  <div>
    <BannerVue />
    <NavVue />
    <HeadSliderVue />
    <CreditsVue />
    <DingVue />
    <PostVue />
    <div class="newsBlock">
      <DingResVue />
      <NewsVue />
      <NewsVue />
      <NewsVue />
      <DailyVue />
      <NewsVue />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsBlock{
  width: 100%;
  margin-top: -20px;
  background: url(/src/assets/topBJ.png);
}
</style>
