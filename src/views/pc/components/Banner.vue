<script lang="ts" setup>
// import { createFireworks } from "~/utils/firework";
import Parallax from "parallax-js";
import { firework } from "~/utils/fire";
const scene = ref();

onMounted(() => {
  firework();
  // eslint-disable-next-line no-new
  new Parallax(scene.value);
});
</script>

<template>
  <div class="banner">
    <ul id="scene" ref="scene">
      <li class="layer" data-depth="0.08">
        <div class="layer1" />
      </li>
      <li class="layer" data-depth="0.2">
        <div class="layer2 animation-fadeInQuickInv">
          <div id="container">
            <img class="fenmianImg" src="/src/assets/piaodai.png">
          </div>
        </div>
      </li>
      <li class="layer" data-depth="0">
        <div class="layer3">
          <div class="logo animation-fadeInQuickInv">
            <img src="/src/assets/2022Logo.png">
          </div>
        </div>
      </li>
    </ul>
    <div class="desertImg animation-desert">
      <img src="/src/assets/shamojianzhu.png">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
    background-color: #cfcfcf;
    height: 450px;
    width: 100vw;
    position: relative;
    overflow: hidden !important;
    #scene {
        position: absolute;
        left: -5%;
        top: -5%;
        width: 110%;
        height: 110%;
        position: relative;
        overflow: hidden !important;
        background: #000;
        z-index: 1;

        .layer {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;

            .layer1 {
                position: absolute;
                left:- 5%;
                top: -5%;
                width: 100%;
                height: 150%;
                background: url(/src/assets/topBJ.png) no-repeat;
                background-size: cover;
            }

            .layer2 {
                background: url(/src/assets/piaodai.png) no-repeat;
                background-size: 100% 100%;

                .fenmianImg {
                    width: 110%;
                    height: 110%;
                }
            }

            .layer3 {
                // background: url(/src/assets/2022Logo.png) no-repeat;
                // background-size: 100% 100%;

                .logo {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 60px;
                    img {
                        // width: 100%;
                        // height: 100%;
                        max-height: 600px;
                    }
                }
            }
        }
    }

    .desertImg {
        position: absolute;
        bottom: 0;
        width: 100vw;
        display: flex;
        z-index: 1;

        img {
            width: 100%;
        }
    }
}
</style>
