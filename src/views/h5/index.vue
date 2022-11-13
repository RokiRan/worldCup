<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import BannerVue from "./components/Banner.vue";
import RankVue from "./components/Rank.vue";
import RankPopVue from "./components/RankPop.vue";
import type { AppState } from "~/types/News";
import { useAppStore } from "~/store/app";
import { isMobile } from "~/utils/isMobile";
export default {
  name: "Index",
  components: {
    BannerVue,
    RankVue,
    RankPopVue,
  },
  setup() {
    const appStore = useAppStore();
    return {
      appStore,
    };
  },
  data(): {
    loaded: boolean;
    showRankPop: boolean;
    showScheduleList: boolean;
  } & Partial<AppState> {
    return {
      loaded: false,
      showRankPop: false,
      showScheduleList: false,
      shooter: [],
    };
  },
  beforeCreate() {
    !isMobile() && window.location.replace("/");
    const router = useRouter();
    const route = useRoute();
    if (route.query.title === "世界杯首页") {
      router.push({
        name: "Home",
      });
    }
  },
  async mounted() {
    await this.appStore.getHome();
    this.shooter = this.appStore.shooter;

    this.loaded = true;
  },
  methods: {
    toggleRankPop() {
      this.showRankPop = !this.showRankPop;
    },
    toggleScheduleList() {
      this.showScheduleList = !this.showScheduleList;
    },
  },
};
</script>

<template>
  <div class="h5Container" :class="showRankPop ? 'disableScroll' : ''">
    <img v-loadFail src="/src/assets/banner-h5.png" class="w-100vw" alt="" srcset="">
    <BannerVue />
    <div v-if="loaded">
      <RouterView />
    </div>
    <RankVue @click="toggleRankPop" />
    <Transition name="fade">
      <RankPopVue v-show="showRankPop" :items="appStore.shooter" @close="toggleRankPop" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.h5Container {
  background-color: #6C0A20;
  padding-bottom: 2rem;
}

.disableScroll {
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
