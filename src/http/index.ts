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
