<script lang="ts" setup>
import BlockVue from "./Block.vue";

import SmallImgNewsItemVue from "./item/SmallImgNewsItem.vue";
</script>

<template>
  <div>
    <BlockVue title="今日看点">
      <SmallImgNewsItemVue v-for="n in 3" :key="n" />
    </BlockVue>
  </div>
</template>

<style lang="scss" scoped>

</style>
