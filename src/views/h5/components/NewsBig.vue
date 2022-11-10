<script lang="ts" setup>
import BlockVue from "./Block.vue";

import BigImgNewsItemVue from "./item/BigImgNewsItem.vue";
</script>

<template>
  <div>
    <BlockVue title="阿汤锅打“卡”">
      <BigImgNewsItemVue v-for="n in 3" :key="n" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
