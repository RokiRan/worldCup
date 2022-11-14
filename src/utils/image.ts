import type { NewsItem } from "~/types/News";
const defaultImage = "/src/assets/errimg.png";
export const newsImgFmt = (obj: NewsItem | null): string => {
  if (!obj || obj.imageUrl.length === 0 || obj.imageUrl === null || obj.imageUrl === undefined || !(Array.isArray(obj.imageUrl))) {
    return defaultImage;
  }
  return (obj.imageUrl[0]);
};

export function defaultImg(event: any) {
  return event.src = defaultImage;
}
