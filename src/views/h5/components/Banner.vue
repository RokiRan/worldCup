<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { firework } from "~/utils/fire";
import { getMenuItems } from "~/utils/menu";
const emit = defineEmits(["change"]);
const router = useRouter();
const route = useRoute();
const navLine = ref<HTMLDListElement>();
const menuItems = getMenuItems();
// const active = ref("home");
const change = (arch: string) => {
  // active.value = arch;
  emit("change", arch);

  const path = arch === "home" ? "/h5/home" : "/h5/news";
  router.push({ path, query: { title: menuItems.find(item => item.arch === arch)?.name } });
};
const active = computed(() => {
  moveBar();
  const arch = menuItems.find(item => item.name === route.query.title)?.arch;
  return arch || "home";
});

onMounted(() => {
  firework(200, 30);
  nextTick(() => {
    moveBar();
  });
});
function moveBar() {
  const arch = menuItems.find(item => item.name === route.query.title)?.arch;
  const menuDom = document.querySelector(`div[pos=${arch}]`) as HTMLDivElement;
  // 滚动到对应的菜单
  navLine.value?.scrollTo({ left: menuDom?.offsetLeft, behavior: "smooth" });
}
</script>

<template>
  <div id="navBlock">
    <div class="navLine">
      <div ref="navLine" class="nav">
        <div v-for="m in menuItems" :key="m.name" class="nav-item" :class="active === m.arch ? 'nav-item-active' : ''">
          <div class="nav-title" :pos="m.arch" @click="change(m.arch)">
            {{ m.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#navBlock {
  top: -1px;
  position: sticky;
  z-index: 999999;
  /*底部阴影*/
  box-shadow: 0 0 6px #00000050;
  .navLine {
    background: linear-gradient(0deg, #C20A3C 0%, #790025 100%);

    .nav {
      overflow-x: scroll;
      width: 100vw;
      // white-space: nowrap;
      display: flex;
      align-items: center;

      .nav-item-active {
          .nav-title {
            color: #fff !important;
            font-weight: 800;
          }
        }
      .nav-item {
        text-align: center;
        display: inline-block;
        padding: 1.2rem 0;
        flex-shrink: 0;

        .nav-title {
          color: #FFD5D5;
          padding: 0 .8rem;
          float: left;
          border-right: solid 2px #C1111F;
          line-height: 1rem;
          font-size: 1rem;
        }

        .nav-title:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
