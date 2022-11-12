<script lang="ts" setup>
import { type PropType } from "vue";
import type { NewsItem } from "~/types/News";

defineProps({
  image: {
    type: Object as PropType<NewsItem>,
  },
});
</script>

<template lang="">
  <div class="listCont listMB">
    <div class="listContT">
      <a :href="$props.image?.targetUrl">{{ $props.image?.title }}</a>
    </div>
    <div class="listContImg">
      <img :src="$props.image?.imageUrl[0]">
      <i class="v-icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .listCont {
  width: 530px;
  height: 156px;
  background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  border-radius: 0px 20px 0px 0px;
  webkit-transition: all .5s ease;
  transition: all .5s ease;
  -webkit-transform: scale(1);
  transform: scale(1);
  display: flex;
  cursor: pointer;
}

.listCont:hover {
  width: 530px;
  height: 156px;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -o-transition: transform .5s;
  -ms-transition: transform .5s;
  transform: scale(1.02);
  -webkit-transform: scale(1.02);
  background: linear-gradient(180deg, #bd0e43 0%, #8f1237  100%);
  border-radius: 0px 20px 0px 0px;
}

.listContT{
  width: 243px;
  margin: 20px;
}
.listContT a{
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  margin: 0;
}

.listContImg{
  width: 235px;
  height: 132px;
  margin: 12px 0;
  overflow: hidden;
  position: relative;
}

.listContImg img{
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.v-icon{
  position: absolute;
  width: 48px;
  height: 48px;
  background: url(/src/assets/vIcon.png) no-repeat;
  right: 12px;
  bottom: 12px;
}

.listMB{
  margin-bottom: 8px;
}
</style>
