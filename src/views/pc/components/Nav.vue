<script lang="ts" setup>
import { menuItems } from "~/utils/menu";

const emit = defineEmits(["change"]);
const active = ref(menuItems[0].arch);
const change = (arch: string) => {
  active.value = arch;
  emit("change", arch);
};
</script>

<template>
  <div class="nav">
    <ul>
      <li v-for="m in menuItems" :key="m.arch" :class="active === m.arch ? 'currentTab' : ''" @click="change(m.arch)">
        {{ m.name }}
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
    z-index: 9999;
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
