import axios from "axios";

import { useRouter } from "vue-router";

import NProgress from "nprogress";

const interceptor = axios.create();
const router = useRouter();
const baseURL = import.meta.env.VITE_BASE_URL;
interceptor.interceptors.request.use(
  (config) => {
    // 设置headers传入用户的token
    // if (localStorage.id_token) {
    //   config!.headers!.Authorization = `Bearer ${localStorage.id_token}`;
    // }
    // 这边可以使用一些loading的动画，请求的时候loading动画运转，请求完成或者错误之后动画关闭
    // （这里用的是element-ui 的loading组件）
    // loadingInstance = Loading.service({
    //   lock: true,
    //   background: "transparent",
    // });

    // 给请求加上时间戳，防止浏览器缓存
    if (config.method === "get") {
      if (config.params) {
        config.params._ = new Date().getTime();
      } else {
        config.params = {
          _: new Date().getTime(),
        };
      }
    } else if (config.method === "post") {
      if (config.data) {
        config.data._ = new Date().getTime();
      } else {
        config.data = {
          _: new Date().getTime(),
        };
      }
    }

    config.baseURL = baseURL;
    if (!NProgress.isStarted()) {
      NProgress.start();
    }

    return config;
  },
  (error) => {
    // 请求错误，关闭loading动画，返回错误。
    NProgress.done();
    return Promise.reject(error);
  },
);

interceptor.interceptors.response.use(
  // 成功返回数据
  (response: any) => {
    // 关闭loading动画
    NProgress.done();
    // 返回数据待使用
    return response.data;
  },
  // 抓取数据，针对不同的错误进行不同的操作
  (error) => {
    // 和后端小伙伴约定一下错误码的规则
    if (error.response.status === 400) {
      switch (error.response.data.message) {
        case "Blocked":
          router.push({ path: "/inactive" });
          break;
        default:
          // 页面输出错误讯息（element-ui）
          // eslint-disable-next-line no-console
          console.log(error.response.data.message);
          //   Message.error("Oop, something went wrong. Please contact us.");
      }
    }

    if (error.response.status === 403) {
      // 页面输出错误讯息（element-ui）
    //   Message.error(error.response.data.message);
    }

    if (error.response.status === 404) {
      // 跳转404页面
      // router.push({
      //   name: "ErrorPage",
      // });
      // eslint-disable-next-line no-console
      console.log(error.response.data.message);
    }
    // 关闭loading动画
    NProgress.done();

    return Promise.reject(error);
  },
);

export default interceptor;
