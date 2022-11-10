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
  <div class="navBlock">
    <img src="/src/assets/banner-h5.png" class="w-100vw" alt="" srcset="">
    <div class="navLine">
      <div class="nav">
        <div v-for="m, key in menu" :key="m" class="nav-item" :class="active === key ? 'nav-item-active' : ''">
          <div class="nav-title">
            {{ m }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navBlock{
    .navLine{
        top: -1px;
        background: linear-gradient(0deg,#C20A3C 0%, #790025 100%);
        position: sticky;
        .nav{
            overflow-x: scroll;
            width: 100vw;
            // white-space: nowrap;
            display: flex;
            align-items: center;
            .nav-item{
                text-align: center;
                display: inline-block;
                padding: 1.2rem 0;
                flex-shrink: 0;
                .nav-title{
                    color: #FFD5D5;
                    padding: 0 .8rem;
                    float: left;
                    border-right: solid 2px #C1111F;
                    line-height: 1rem;
                    font-size: 1rem;
                }
                .nav-item-active{
                    .nav-title{
                        color: #fff;
                    }
                }
                .nav-title:last-child{
                    border-right: none;
                }
            }
        }
    }
}
</style>
