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

export interface Shooter {
  name: string;
  team: string;
  teamCover: string;
  goals: string;
  ranking: string;
}

export interface AppState {
  schedule: []; // 赛程
  titleNews: NewsItem[];
  source: []; // 积分
  card: NewsItem[];
  poster: PostItem[];
  hot: NewsItem[];
  watches: NewsItem[];
  bigTalk: NewsItem[];
  godReplies: NewsItem[];
  daily: NewsItem[];
  expressReport: NewsItem[];
  shooter: Shooter[];
}

export interface ScheduleItem {
  sessions: string;
  teamOne: string;
  teamOneCover: string;
  teamTwo: string;
  teamTwoCover: string;
  createTime: string;
  createTimeStamp: string;
  mode: string;
}
