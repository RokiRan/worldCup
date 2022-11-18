<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import PostItemVue from "~/components/swiper/PostItem.vue";
import type { PostItem } from "~/types/News";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";

const props = defineProps<{
  images: PostItem[];
}>();
</script>

<template>
  <div class="postContainer">
    <div class="content">
      <SubTitileVue title="赛果海报" @more="null" />
      <div class="swiperContainer">
        <div class="swiper-button-next2 sbtn" />
        <Swiper
          :slides-per-view="4" :space-between="12" :navigation="{
            prevEl: '.swiper-button-next2',
            nextEl: '.swiper-button-prev2',
          }" :modules="[Navigation]" class="postSlider"
        >
          <SwiperSlide v-for="item in props.images" :key="item.id" class="grab">
            <PostItemVue :post="item" />
          </SwiperSlide>
        </Swiper>
        <div class="swiper-button-prev2 sbtn" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.postContainer{
  background-image: url(/src/assets/bg3.png);
  background-repeat: no-repeat;
  background-size: cover;
  .content{
    width: 1320px;
    margin: 0 auto;
    .swiperContainer{
      display: flex;
      padding: 20px 0 40px 0;
      position: relative;
      .postSlider{
        width: 1200px;
        .swiper-wrapper{
          .swiper-slide{
            // width: 300px;
          }
        }
      }
      // .sbtn{
      //   justify-content: center;
      //   align-items: center;
      //   height: 100%;
      //   margin-top: 250px;
      //   width: 50px;
      //   img{
      //     width: 30px;
      //     height: 40px;
      //     margin-right: -10px;
      //     padding-right: -10px;
      //   }
      // }
      .swiper-button-next2 {
        position: absolute;
        top: 40%;
        left: 20px;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        background: url(/src/assets/arr-left-big.png) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 999999;
      }

      .swiper-button-prev2 {
        position: absolute;
        top: 40%;
        right: 20px;
        width: 40px;
        height: 40px;
        margin-top: -20px;
        background: url(/src/assets/leftSmallBt2.png) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        z-index: 10;
        // translate: rotate(180deg);
        transform: rotate(180deg);
      }
    }
  }
}
</style>
