<script lang="ts" setup>
const showRankPop = ref(false);
const toggleRankPop = () => {
  showRankPop.value = !showRankPop.value;
};
</script>

<template lang="">
  <div class="rankDing">
    <img src="/src/assets/rank.png" alt="" srcset="" class="w-100vw" @click="toggleRankPop">
    <transition name="fase">
      <div v-show="showRankPop" class="rankList">
        <div class="rankItem rankHead">
          <div class="rankNum">
            <span class="num">球队</span>
          </div>
          <div class="rankName">
            <span class="name">球队</span>
          </div>
          <div class="rankScore">
            <span class="score">进球</span>
          </div>
        </div>
        <div v-for="item in 10" :key="item" class="rankItem">
          <div class="rankNum">
            <span class="num line-clamp-1">C罗罗罗罗罗罗罗罗罗</span>
          </div>
          <div class="rankName">
            <span class="name">西班牙</span>
          </div>
          <div class="rankScore">
            <span class="score">88</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.rankDing {
  position: fixed;
  right: .1rem;
  top: 40%;
  z-index: 9999;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
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
    right: 60px;
    width: 250px;
    max-height: 400px;
    overflow-y: scroll;
    background-color: #8F0F36;
    /*阴影*/
    box-shadow: 0 0 0.3rem #000;

    .rankHead {
      color: #FCEBB8 !important;
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
        width: 100px;

        .num {
          font-size: .8rem;
          color: #fff;
        }
      }

      .rankName {
        width: 50px;
        text-align: center;

        .name {
          font-size: .8rem;
          color: #fff;
        }
      }

      .rankScore {
        text-align: center;

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
