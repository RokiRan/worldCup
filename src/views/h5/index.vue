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
    const router = useRouter();
    const route = useRoute();
    return {
      appStore,
      router,
      route,
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
  computed: {
    isShowRankPop() {
      return this.route.path === "/h5/home";
    },
  },
  beforeCreate() {
    !isMobile() && window.location.replace("/");
    if (this.route.path === "/") {
      this.router.push({
        name: "Home",
        query: {
          title: "世界杯首页",
        },
      });
    } else
    if (this.route.query.title === "世界杯首页") {
      this.router.push({
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
    <img src="/src/assets/banner-h5.png" class="w-100vw" alt="" srcset="">
    <BannerVue />
    <div v-if="loaded">
      <RouterView />
    </div>
    <RankVue v-show="isShowRankPop" @click="toggleRankPop" />
    <Transition name="fade">
      <RankPopVue v-show="showRankPop" :items="appStore.shooter" @close="toggleRankPop" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.h5Container {
  background-color: #6C0A20;
  padding-bottom: 1rem;
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
