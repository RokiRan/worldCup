import { isMobile } from "./isMobile";
import type { NewsItem } from "~/types/News";
import { getPcNewsUrl } from "~/http";
import useToast from "~/components/Toast2";
const isProduction = process.env.NODE_ENV === "production";
const devMenuId = [1, 3135, 3136, 3137, 3138, 3139, 3140, 3141];
const proMenu = [1, 3135, 3136, 3137, 3138, 3139, 3140, 3141];
const menuItems = [
  {
    name: "世界杯首页",
    arch: "home",
    id: "1",
  },
  {
    name: "阿汤锅打“卡”",
    arch: "ding",
    id: "3135",
  },
  {
    name: "热点聚焦",
    arch: "hotFocus",
    id: "3136",
  },
  {
    name: "今日看点",
    arch: "today",
    id: "3137",
  },
  {
    name: "大话世界杯",
    arch: "talk",
    id: "3138",
  },
  {
    name: "世界杯神回复",
    arch: "reply",
    id: "3139",
  },
  {
    name: "世界杯日报",
    arch: "daily",
    id: "3140",
  },
  {
    name: "比分速报",
    arch: "score",
    id: "3141",
  },
];

export const getMenuItems = () => {
  const menu = isProduction ? proMenu : devMenuId;
  menuItems.forEach((item, key) => {
    item.id = menu[key].toString();
  });
  return menuItems;
};

export const openPage = (target: NewsItem | null | undefined) => {
  const toast = useToast();
  if (!target) {
    return toast("参数错误");
  }
  const newsId = target.id;
  const classId = target.classId;
  if (isMobile()) {
    const h5Url = `https://wap.cqcb.com/shangyou_news/NewsDetail?classId=${classId}&newsId=${newsId}`;
    window.open(h5Url);
  } else {
    getPcNewsUrl(`${classId}:${newsId}`).then((res: any) => {
      res.data && res.data.length && window.open(res.data[0].url);
      if (!res.data) {
        toast("暂无详情页");
      }
    });
  }
};
