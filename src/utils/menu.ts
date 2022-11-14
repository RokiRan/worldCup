import { isMobile } from "./isMobile";
import type { NewsItem } from "~/types/News";
import { getPcNewsUrl } from "~/http";

export const menuItems = [
  {
    name: "世界杯首页",
    arch: "home",
    id: "1",
  },
  {
    name: "阿汤锅打“卡”",
    arch: "ding",
    id: "2",
  },
  {
    name: "热点聚焦",
    arch: "hotFocus",
    id: "3",
  },
  {
    name: "今日看点",
    arch: "today",
    id: "4",
  },
  {
    name: "大话世界杯",
    arch: "talk",
    id: "5",
  },
  {
    name: "世界杯神回复",
    arch: "reply",
    id: "6",
  },
  {
    name: "世界杯日报",
    arch: "daily",
    id: "7",
  },
  {
    name: "比分速报",
    arch: "score",
    id: "8",
  },
];

export const openPage = (target: NewsItem | null | undefined) => {
  if (!target) {
    return;
  }
  const newsId = target.id;
  const classId = target.classId;
  if (isMobile()) {
    const h5Url = `https://wap.cqcb.com/shangyou_news/NewsDetail?classId=${classId}&newsId=${newsId}`;
    window.open(h5Url);
  } else {
    getPcNewsUrl(`${classId}:${newsId}`).then((res: any) => {
      res.data && res.data.length && window.open(res.data[0].url);
    });
  }
};
