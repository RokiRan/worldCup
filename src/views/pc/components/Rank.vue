<script lang="ts" setup>
import type { Shooter } from "~/types/News";

defineProps<{
  items: Shooter[];
}>();
const showRankPop = ref(false);
const toggleRankPop = () => {
  showRankPop.value = !showRankPop.value;
};
</script>

<template>
  <div class="rankDing">
    <img src="/src/assets/rank.png" alt="" srcset="" class="bigBtn" @click="toggleRankPop">
    <div class="cursor-pointer arror" :class="showRankPop ? 'arrReverse' : ''" @click.stop="toggleRankPop" />
    <div class="rankList" :class="!showRankPop ? 'rankListHide' : ''">
      <div class="rankItem">
        <div class="rankNum">
          <span class="num rankHead">球员</span>
        </div>
        <div class="rankName">
          <span class="name rankHead">球队</span>
        </div>
        <div class="rankScore">
          <span class="score rankHead">进球</span>
        </div>
      </div>
      <div v-for="item in items" :key="item.name" class="rankItem">
        <div class="rankNum">
          <span class="num line-clamp-1">{{ item.name }}</span>
        </div>
        <div class="rankName">
          <span class="name line-clamp-1">{{ item.team }}</span>
        </div>
        <div class="rankScore">
          <span class="score">{{ item.goals }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rankDing {
  position: fixed;
  right: .1rem;
  top: 40%;
  z-index: 9999;
  .arror{
    position: absolute;
    top: 144px;
    right: 53px;
    width: 14px;
    height: 14px;
    /*朝左的三角形*/
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 10px solid #fff;
    &.arrReverse{
      transform: rotate(180deg);
    }
    transition: all .3s;
  }
  .bigBtn {
    width: 88px;
    height: 280px;
    object-fit: cover;
    cursor: pointer;
    /*透明图片阴影*/
    filter: drop-shadow(0 0 0.3rem #000);
  }

  /*隐藏滚动条*/
  .rankList::-webkit-scrollbar {
    width: 0 !important
  }

  .rankList {
    position: absolute;
    top: 0;
    right: 75px;
    width: 250px;
    max-height: 400px;
    overflow-y: scroll;
    background-color: #8F0F36;
    /*阴影*/
    box-shadow: 0 0 0.3rem #000;
    /*淡入淡出*/
    transition: all .3s;
    &.rankListHide{
      opacity: 0;
      transform: translateX(200%);
    }
    .rankHead {
      color: #FCEBB8 !important;
      font-weight: bolder;
    }

    .rankItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .5rem;
      height: 2.5rem;
      position: relative;

      .rankNum {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;

        .num {
          font-size: .8rem;
          color: #fff;
        }
      }

      .rankName {
        width: 25%;
        text-align: center;

        .name {
          font-size: .8rem;
          color: #fff;
        }
      }

      .rankScore {
        text-align: center;
        width: 25%;
        .score {
          font-size: .8rem;
          color: #fff;
        }
      }
    }

    .rankItem:nth-child(2n) {
      background: #B70A3F;
    }
  }
}

:deep(.rankDing) {

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
