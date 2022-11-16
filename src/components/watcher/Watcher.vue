<script lang="ts" setup>
const imgUrl = ref("");
const isShow = ref(false);
const open = (src: string) => {
  imgUrl.value = src;
  isShow.value = true;
};

export interface MyImgViewerExposed {
  open: typeof open;
}

defineExpose<MyImgViewerExposed>({ open });
</script>

<template>
  <transition name="Watcher">
    <div v-show="isShow" class="watcherContainter" @click="isShow = false">
      <img :src="imgUrl" alt="" srcset="">
    </div>
  </transition>
</template>

<style lang="scss">
.watcherContainter {
    width: 100vw;
    height: 100vh;
    background: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
}

.Watcher-enter-active {
    animation: fade .2s;
}

.Watcher-leave-active {
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
