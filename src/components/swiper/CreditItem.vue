<script lang="ts" setup>
import type { OneGroup } from "~/types/News";

defineProps<{
  items: OneGroup[];
  group: String;
}>();
</script>

<template>
  <div class="listBox">
    <div class="listTop">
      <div class="GroupName">
        {{ $props.group }}组
      </div>
      <div class="fraction">
        积分
      </div>
    </div>
    <div class="contBox">
      <ul>
        <li v-for="item, key in $props.items" :key="key">
          <span>{{ item.ranking }}</span>
          <div class="flag-icon">
            <img v-loadFail :src="item.teamCover">
          </div>
          <div class="flagName">
            {{ item.team }}
          </div>
          <div class="flagNub">
            {{ item.source }}
          </div>
        </li>
      </ul>
    </div>
    <div class="listBottom">
      <span class="listBottomIcon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listBox {
    width: 290px;
    height: 382px;
    background: #fff;
    border-radius: 6px 6px 6px 6px;
    margin-left: 4px;
}

.listTop {
    width: 290px;
    height: 50px;
    background: linear-gradient(342deg, #A1003A 0%, #FC104F 100%);
    border-radius: 6px 6px 0px 0px;
    opacity: 1;
    display: flex;
    align-items: center;
}

.GroupName {
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    margin-left: 10px;
}

.fraction {
    font-size: 16px;
    color: #fff;
    line-height: 50px;
    flex: 1;
    text-align: right;
    margin-right: 10px;
}

.contBox ul {
    margin: 0;
    padding: 0;
    background: #fff;
}

.contBox ul li {
    width: 270px;
    height: 60px;
    background: #EEEEE4;
    border-radius: 6px 6px 6px 6px;
    opacity: 1;
    margin: 10px 10px 0 10px;
    display: flex;
    align-items: center;
    font-size: 16px;
}

.contBox ul li span {
    margin-left: 10px;
}

.contBox ul li div.flag-icon {
    width: 45px;
    height: 45px;
    margin-left: 10px;
}

.contBox ul li div.flag-icon img {
    width: 100%;
}

.contBox ul li div.flagName {
    font-size: 16px;
    margin-left: 10px;
}

.contBox ul li div.flagNub {
    font-size: 16px;
    flex: 1;
    text-align: right;
    margin-right: 10px;
}

.listBottom {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
}

.listBottomIcon {
    width: 78px;
    height: 20px;
    background-image: url(/src/assets/listBottomIcon.png);
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
    text-align: center;
}

.col-2 {
    margin-right: 14px;
}

.col-1 {
    margin-right: 13px;
}
</style>
