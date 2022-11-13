import { defineStore } from "pinia";
import { getHome } from "~/http";
import type { AppState } from "~/types/News";

export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
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
  }),
  actions: {
    async getHome() {
      const res = await getHome();
      const data = res.data;
      this.schedule = data.schedule;
      this.titleNews = data.titleNews;
      this.source = data.source;
      this.card = data.card;
      this.poster = data.poster;
      this.hot = data.hot;
      this.watches = data.watches;
      this.bigTalk = data.bigTalk;
      this.godReplies = data.godReplies;
      this.daily = data.daily;
      this.expressReport = data.expressReport;
      this.shooter = data.shooter;
    },
  },
});
