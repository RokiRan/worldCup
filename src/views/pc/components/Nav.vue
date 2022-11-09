<script lang="ts" setup>
const emit = defineEmits(["change"]);
const menu = ["赛程", "上游探营", "阿汤锅打\"卡\"", "今日看点", "今日综述", "热点聚焦", "上游评球", "赛果海报", "上游世界杯"];
const arch = ["schedule",
  "credites",
  "ding",
  "post",
];
const active = ref(2);
const change = (index: number) => {
  active.value = index;
  emit("change", arch[index]);
};
</script>

<template>
  <div class="nav">
    <ul>
      <li v-for="m, key in menu" :key="m" :class="active === key ? 'currentTab' : ''" @click="change(key)">
        {{ m }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav{
    margin: 0;
    padding: 0;
    text-align: center;
    background-image: url(/src/assets/tab.png);
    /*粘性布局*/
    position: sticky;
    top: 0;
    z-index: 9999999999999999;
    ul{
        display: inline-block;
        min-width: 1040px;
        .currentTab {
            font-size: 16px;
            font-weight: 600;
            background: #bb1345;
        }

        li{
            color: white;
            display: inline-block;
            padding: 15px 25px;
            cursor: pointer;
            font-size: 16px;
            min-width: 30px;
        }
        li:hover{
            background: #BB1345;
        }
    }
}
</style>
