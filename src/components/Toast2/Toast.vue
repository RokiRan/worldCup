<script setup lang="ts">
import { ref, unref } from "vue";

const _show = ref(false);
const _message = ref("hello");
const close = () => {
  _show.value = false;
};
const open = (message: string, delay = 1000) => {
  if (_show.value) {
    return;
  }
  _message.value = message;
  _show.value = true;
  setTimeout(close, unref(delay));
};

export interface MyToastExposed {
  open: typeof open;
  close: typeof close;
}

defineExpose<MyToastExposed>({ open, close });
</script>

<template>
  <transition name="MyToast">
    <div v-show="_show" class="MyToast">
      <div class="msg">
        {{ _message }}
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.MyToast {
  position: fixed;
  z-index: 100;
  bottom: 20%;
  left: 50%;
  padding: 6px 20px;
  transform: translateX(-50%);
  border-radius: 6px;
  user-select: none;
  text-align: center;
  color: #fff;
    display: inline-block;
    background-color: rgba(37, 38, 45, .9);
}

.MyToast-enter-active {
  animation: fade .2s;
}

.MyToast-leave-active {
  animation: fade .2s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
