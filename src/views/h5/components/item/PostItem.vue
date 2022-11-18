<script lang="ts" setup>
import type { PostItem } from "~/types/News";
import useWatcher from "~/components/watcher";
defineProps<{
  post: PostItem;
}>();

const watcher = useWatcher();
</script>

<template>
  <div class="postItems" @click="watcher($props.post.cover)">
    <img v-loadFail :src="$props.post.cover" alt="">
    <div class="title">
      <div class="text-left line-clamp-2">
        {{ $props.post.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.postItems{
    padding: .4rem 0 0 0;
    border-radius: .3rem;
    overflow: hidden;
    position: relative;
    img{
        width: 100%;
        height: 18rem;
        object-fit: cover;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .title{
        width: 100%;
        padding: .4rem;
        color: #fff;
        font-size: .85rem;
        background: linear-gradient(342deg, #A1003A 10%, #E50C49 100%);
        height: 3.5rem;
    }
}
</style>
