import http from "./request";

// 获取世界杯首页数据
export const getHome = async () => {
  const res = await http.get("/controller.php?enews=home-message");
  return res;
};
