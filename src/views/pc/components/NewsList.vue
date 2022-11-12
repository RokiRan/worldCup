<script lang="ts" setup>
import ListItemSmallVue from "~/components/layout/News/ListItemSmall.vue";
import ListItemBigVue from "~/components/layout/News/ListItemBig.vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
</script>

<template>
  <div class="newsListPage">
    <div class="newsListCtn">
      <SubTitileVue title="阿汤锅打“卡”" />
      <div class="itemList">
        <div class="container">
          <ListItemSmallVue />
          <ListItemBigVue />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.newsListPage {
    width: 100vw;
    margin: 0 auto;
    background-color: #56031A;
    .newsListCtn{
      width: 1200px;
      margin: 0 auto;
      .container{
        padding: 10px 80px;
        background-color: #8F0F36;
        margin: 0 auto;
        margin-top: 20px;
      }
    }
}
</style>
