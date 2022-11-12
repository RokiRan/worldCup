export interface NewsItem {
  id: number;
  classId: number;
  title: string;
  dataType: number;
  showType: number;
  publishTime: string;
  lastDoTime: number;
  imageUrl: string[];
  isVideo: number;
  videoUrl: string;
  videoTime: string;
  doLikeNum: number;
  isDoLike: number;
  isTop: number;
  label: string;
  plNum: string;
  interactNum: string;
  isAd: number;
  pv: string;
  imageNum: number;
  category: string;
  targetUrl: string;
  sourceImage: string;
  sourceName: string;
  smallText: string;
  traceInfo: string;
  traceId: string;
  contentLength: number;
  adId: number;
  buryValue: string;
}

export interface PostItem {
  id: string;
  name: string;
  cover: string;
  createtime: string;
}
