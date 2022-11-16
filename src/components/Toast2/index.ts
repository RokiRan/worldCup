import type { VNode } from "vue";
import { createVNode, render } from "vue";
import Toast from "./Toast.vue";
import type { ToastExposed } from "./Toast.vue";

const createToast = () => {
  const _vm = createVNode(Toast);
  const container = document.createElement("div");
  render(_vm, container);
  document.body.appendChild(container);
  return _vm;
};

let _toast: VNode | null = null;
const useToast = () => {
  if (!_toast) {
    _toast = createToast();
  }

  const toast = (message: string) => {
    (<ToastExposed>_toast?.component?.exposed)?.open(message);
  };

  return toast;
};

export default useToast;
