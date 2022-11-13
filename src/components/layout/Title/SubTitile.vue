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
    font-weight: 600;
    margin-left: 10px;
  }

  .colMore {
    font-size: 16px;
    line-height: 80px;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
  }
}
</style>
