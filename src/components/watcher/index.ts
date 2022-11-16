import type { VNode } from "vue";
import { createVNode, render } from "vue";
import Watcher from "./Watcher.vue";
import type { MyImgViewerExposed } from "./Watcher.vue";

const createWatcher = () => {
  const _vm = createVNode(Watcher);
  const container = document.createElement("div");
  render(_vm, container);
  document.body.appendChild(container);
  return _vm;
};

let _watcher: VNode | null = null;
const useWatcher = () => {
  if (!_watcher) {
    _watcher = createWatcher();
  }

  const watcher = (url: string) => {
    (<MyImgViewerExposed>_watcher?.component?.exposed)?.open(url);
  };

  return watcher;
};

export default useWatcher;
