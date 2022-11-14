import http from "./request";

// 获取世界杯首页数据
export const getHome = async () => {
  return await http.get("/controller.php?enews=home-message");
};
// 获取赛程数据
export const getSchedule = async () => {
  const res = await http.get("/controller.php?enews=schedule");
  return res;
};

export const getNews = async (id: string) => {
  const res = await http.get(`/v1/news/topicList?classId=${id}`);
  return res;
};

// 获取pc真实详情地址
export const getPcNewsUrl = async (id: string) => {
  // https://goapi.cqcb.com/v1/news/getPcUrl?ids=9456:5080128
  const res = await http.get(`/v1/news/getPcUrl?ids=${id}`);
  return res;
};
