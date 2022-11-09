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
import Footer from "~/components/layout/Footer/index.vue";
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
    Footer,
  },
  setup() {
    const schedule = ref(null);
    const credites = ref(null);
    const ding = ref(null);
    const post = ref(null);
    return {
      schedule,
      credites,
      ding,
      post,
    };
  },
  data() {
    return {
    };
  },
  methods: {
    scrollTo(key: number) {
      const el = document.querySelector(`div[arch=${key}]`) as HTMLElement;
      window.scrollTo({
        top: (el?.offsetTop || 0) - 20,
        behavior: "smooth",
      });
    },
  },
});
</script>

<template>
  <div class="blockHolder">
    <BannerVue arch="schedule" />
    <NavVue @change="scrollTo" />
    <HeadSliderVue />
    <CreditsVue arch="credites" />
    <DingVue arch="ding" />
    <PostVue arch="post" />
    <div class="newsBlock">
      <DingResVue />
      <NewsVue />
      <NewsVue />
      <NewsVue />
      <DailyVue />
      <NewsVue />
    </div>
    <Footer />
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
