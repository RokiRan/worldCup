<script lang="ts" setup>
import { type PropType } from "vue";
import type { NewsItem } from "~/types/News";
import { newsImgFmt } from "~/utils/image";
import { openPage } from "~/utils/menu";

defineProps({
  image: {
    type: Object as PropType<NewsItem>,
  },
});
</script>

<template>
  <div class="listCont listMB" @click="openPage($props.image)">
    <div class="listContT2 ">
      <a :href="$props.image?.targetUrl">
        <div class="line-clamp-3">
          {{ $props.image?.title }}
        </div>
      </a>
    </div>
    <div class="listContImg">
      <img v-loadFail :src="newsImgFmt($props.image!)">
      <i v-if="$props.image?.isVideo" class="v-icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listCont {
  // width: 492px;
  height: 156px;
  background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  border-radius: 0px 20px 0px 0px;
  webkit-transition: all .5s ease;
  transition: all .5s ease;
  -webkit-transform: scale(1);
  transform: scale(1);
  display: flex;
  cursor: pointer;

.listContT2 {
  width: 316px;
  margin: 20px;
}

.listContT2 a {
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  margin: 0;
}

.listContImg {
  width: 208px;
  height: 131px;
  margin: 12px 0;
  overflow: hidden;
  position: relative;
}

.listContImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.v-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  background: url(/src/assets/vIcon.png) no-repeat;
  right: 12px;
  bottom: 12px;
}
}

.listCont:hover {
  height: 156px;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -o-transition: transform .5s;
  -ms-transition: transform .5s;
  transform: scale(1.02);
  -webkit-transform: scale(1.02);
  background: linear-gradient(180deg, #bd0e43 0%, #8f1237 100%);
  border-radius: 0px 20px 0px 0px;
}

.listMB {
  margin-bottom: 8px;
}
</style>
