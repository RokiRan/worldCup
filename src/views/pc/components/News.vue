<script lang="ts" setup>
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import SmallImgVue from "~/components/layout/News/SmallImg.vue";
</script>

<template lang="">
  <div class="newsblock">
    <SubTitileVue title="今日看点" @more="null" />
    <div class="news">
      <SmallImgVue v-for="item in 6" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.newsblock{
    width: 1200px;
    margin: 0 auto;
    .news{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
    }
    .news div{
        width: 48%;
    }
}
</style>
