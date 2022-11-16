import type { App } from "vue";
import { createVNode, nextTick } from "vue";
import { useMountComponent } from "./useMountComponent";
import ToastConstructor from "./Toast.vue";
interface ToastOption {
  message: string;
  duration: number;
}

export const toast = (options: ToastOption | string) => {
  const duration = typeof options !== "string" ? options.duration : 3000;
  const { instance, unmount } = useMountComponent(createVNode(
    ToastConstructor,
    {
      message: typeof options === "string" ? options : options.message,
    },
  ));

  // 获取实例的代理和data 代理可以拿到dom对象 data可以设置state
  const { proxy, data } = instance.$;
  const RemoveSelf = function () {
    unmount();
  };

  // 在toast实例挂载到dom上之后执行 展示与消失
  nextTick(() => {
    data.showToast = true;
    proxy?.$el.removeEventListener("transitionend", RemoveSelf);
    ~duration && (setTimeout(() => {
      data.showToast = false;
      proxy?.$el.addEventListener("transitionend", RemoveSelf);
    }, duration));
  });
  return instance;
};

export default {
  // 挂载对象需要提供 install方法
  install: (app: App) => {
    app.config.globalProperties.$toast = toast;
  },
};
