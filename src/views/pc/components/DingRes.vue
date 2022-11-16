<script lang="ts">
import { type PropType } from "vue";
import SubTitileVue from "~/components/layout/Title/SubTitile.vue";
import BigImgVue from "~/components/layout/News/BigImg.vue";
import EmptyVue from "~/components/layout/Empty/index.vue";
import SmallImgVue from "~/components/layout/News/SmallImgDing.vue";
import type { NewsItem } from "~/types/News";
export default {
  components: {
    SubTitileVue,
    BigImgVue,
    SmallImgVue,
    EmptyVue,
  },
  props: {
    card: {
      type: Array as PropType<NewsItem[]>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const change = (index: number) => {
      emit("showNewsList", index);
    };
    return {
      change,
    };
  },
  computed: {
    cardOne() {
      if (this.$props?.card?.length > 0) {
        return this.$props?.card[0];
      } else {
        return null;
      }
    },
    cards() {
      return this.$props?.card?.slice(1, 4) || [];
    },
  },
};
</script>

<template>
  <div class="containter3">
    <SubTitileVue title="热点聚焦" :show="true" @more="change" />
    <div class="columnBox">
      <div v-if="cardOne" class="contentBoxAT">
        <div class="contentATRigth">
          <SmallImgVue v-for="item, ind in cards" :key="ind" :image="item" />
        </div>
        <BigImgVue :image="cardOne" />
      </div>
      <EmptyVue v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containter3{
  background-image: url(/src/assets/bj.png);
  background-position: center;
  background-size: 100%;
}
/* 小组赛积分 */
.columnBox {
  margin: 0 auto 0;
  padding-bottom: 40px;
}

.groupBJ {

}

.column {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  padding: 20px 0;
}

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

.groupingPosetion {
  position: relative;
  width: 1200px;
  height: 382px;
  margin: 0 auto;
}

.grouping {
  width: 1200px;
  height: 382px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.groupingInfo {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
}

.listBox {
  width: 290px;
  height: 382px;
  background: #fff;
  border-radius: 6px 6px 6px 6px;
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

.groupingBtPrev {
  width: 50px;
  height: 50px;
  background: #A1003A;
  position: absolute;
  border-radius: 30px;
  left: -60px;
  top: 46%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.groupingBtNext {
  width: 50px;
  height: 50px;
  background: #A1003A;
  position: absolute;
  border-radius: 30px;
  right: -60px;
  ;
  top: 46%;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.groupingBtPrev div {
  width: 28px;
  height: 28px;
  background-image: url(/src/assets/leftSmallBt2.png);
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 18px;
}

.groupingBtNext div {
  width: 28px;
  height: 28px;
  background-image: url(/src/assets/rigthSmallBt2.png);
  background-position: center;
  background-repeat: no-repeat;
  flex: 1;
  text-align: right;
  margin-right: 18px;
}

.contentBoxAT {
  display: flex;
  width: 1200px;
  margin: 20px auto 0;
}

.BigImgAT {
  width: 654px;
  height: 366px;
}

.BigImgAT img {
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 10px 10px 0px 0px;
  display: block;
  overflow: hidden;
}

.BigImgTitle {
  width: 654px;
  height: 120px;
  background: #3E0A12;
}

.BigImgTitle a {
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  padding: 20px;
  display: block;
  text-decoration: none;
}

.BigImgTitle a:hover {
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  padding: 20px;
  display: block;
  text-decoration: underline;
}

.contentATRigth {
  width: 530px;
  // margin-left: 16px;
}

.listCont {
  // width: 530px;
  height: 156px;
  background: linear-gradient(180deg, #B70A3F 0%, #871034 100%);
  border-radius: 0px 20px 0px 0px;
  webkit-transition: all .5s ease;
  transition: all .5s ease;
  -webkit-transform: scale(1);
  transform: scale(1);
  display: flex;
  cursor: pointer;
}

.listCont:hover {
  // width: 530px;
  height: 156px;
  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -o-transition: transform .5s;
  -ms-transition: transform .5s;
  transform: scale(1.02);
  -webkit-transform: scale(1.02);
  background: linear-gradient(180deg, #bd0e43 0%, #8f1237  100%);
  border-radius: 0px 20px 0px 0px;
}

.listContT{
  width: 243px;
  margin: 20px;
}
.listContT p{
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  margin: 0;
}

.listContImg{
  width: 235px;
  height: 132px;
  margin: 12px 0;
  overflow: hidden;
  position: relative;
}

.listContImg img{
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.v-icon{
  position: absolute;
  width: 48px;
  height: 48px;
  background: url(/src/assets/vIcon.png) no-repeat;
  right: 12px;
  bottom: 12px;
}

.listMB{
  margin-bottom: 8px;
}
.contentATLeft {
  margin-left: 15px;
}
</style>
