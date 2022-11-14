import type { Directive } from "vue";
import defaultImage from "/src/assets/errimg.png";
// vue 动画指令
export const faseAnimate: Directive = {
  created(el: HTMLElement, binding: any) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight || document.body.clientHeight;
      if (top < h) {
        if (!el.className.includes(binding.value)) {
          // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
          el.className = `${binding.value} ${el.className}`;
        }
        if (binding.addClass) {
          window.removeEventListener("scroll", binding.addClass);
        }
      }
    };
    window.addEventListener("scroll", binding.addClass, true);
    binding.addClass();
  },
  unmounted(el: HTMLElement, binding: any) {
    window.removeEventListener("scroll", binding.addClass);
  },
};

// 图片失效 加载默认图片
export const loadErrImg: Directive = {

  mounted(el: any, binding: any = defaultImage) {
    if (!el.src) {
      return el.src = defaultImage;
    }
    el.onerror = () => {
      el.src = defaultImage;
    };
  },
};

// 懒加载
export const lazyLoad: Directive = {
  mounted(el: any, binding: any = defaultImage) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage: any = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });
    observer.observe(el);
  },
};
