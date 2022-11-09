// 是否是移动端
export const isMobile = () => {
  const { userAgent } = navigator;
  const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  let flag = false;
  for (let i = 0; i < agents.length; i++) {
    if (userAgent.indexOf(agents[i]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
};
