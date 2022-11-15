<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["more"]);
</script>

<template>
  <div class="column">
    <div class="columnIcon" />
    <div class="integral">
      {{ props.title }}
    </div>
    <div class="block-dot">
      <div class="dot dot1" />
      <div class="dot dot2" />
      <div class="dot dot3" />
      <div class="dot dot4" />
      <div class="dot dot5" />
    </div>
    <span v-if="props.show" class="colMore" @click="emit('more')">查看更多></span>
  </div>
</template>

<style lang="scss" scoped>
.column {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  padding: 20px 0;

  .columnIcon {
    width: 82px;
    height: 80px;
    background-image: url(/src/assets/column-icon.png);
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
  }

  .integral {
    font-size: 32px;
    color: #fff;
    line-height: 80px;
    display: inline-block;
    // font-weight: 600;
    margin-left: 10px;
    font-family: HeadFont;
  }

  .colMore {
    font-size: 16px;
    line-height: 80px;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
  }

  .block-dot {
    display: flex;
    margin-left: 15px;
    align-items: center;
    margin-top: 35px;
    .dot {
      width: .4rem;
      height: .4rem;
      background: #C20A3C;
      margin-right: .7rem;
      transform: rotate(45deg);
    }

    .dot1 {
      width: .5rem;
      height: .5rem;
    }

    .dot2 {
      width: .45rem;
      height: .45rem;
    }

    .dot3 {
      width: .35rem;
      height: .35rem;
    }

    .dot4 {
      width: .25rem;
      height: .25rem;
    }

    .dot5 {
      width: .2rem;
      height: .2rem;
    }
  }
}
</style>
