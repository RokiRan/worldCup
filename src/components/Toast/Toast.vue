<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // 消息内容
  props: ["message"],
  data() {
    return {
      // state
      showToast: false,
    };
  },
});
</script>

<template>
  <transition name="toast-wrapper">
    <div v-show="showToast" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<style lang="scss">
.toast {
 position: fixed;
 left: 0;
 right: 0;
 top: 50%;
 transform: translateY(-50%);
 margin: auto;
 padding: 0.1rem;
 max-width: 80%;
 border-radius: 0.05rem;
 color: #fff;
 background: rgba(0, 0, 0, 0.7);
 font-size: 0.28rem;
 z-index: 99999;
 transition: opacity 0.3s linear;
}

.toast-wrapper-enter-from,
.toast-wrapper-leave-to {
 opacity: 0;
}
</style>
