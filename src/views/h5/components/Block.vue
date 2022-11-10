<script>
export default {
  name: "Block",
  props: {
    title: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["more"],
  setup(props) {
    const { title } = toRefs(props);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      title,
    };
  },
  methods: {
    more() {
      this.$emit("more");
    },
  },
};
</script>

<template>
  <div class="block">
    <div class="block-title">
      <div class="block-title-text">
        {{ title }}
      </div>
      <div class="block-dot">
        <div class="dot dot1" />
        <div class="dot dot2" />
        <div class="dot dot3" />
        <div class="dot dot4" />
        <div class="dot dot5" />
      </div>
      <div v-if="show" class="block-more" @click="more()">
        查看更多>
      </div>
    </div>
    <div class="block-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.block {
    margin: 1rem 1rem 0 1rem;
    background-color: #880525;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    // background: url("/src/assets/block-bg.png") no-repeat;
    .block-title {
        padding: 1rem .5rem;
        display: flex;
        align-items: center;
        color: #fff;
        background: url("/src/assets/block-bg.png") no-repeat;
        background-size: 100%;
        .block-title-text::before {
            content: "";
            display: inline-block;
            width: 3rem;
            height: 2rem;
            background: url("/src/assets/column-icon.png") no-repeat;
            background-size: 100% 100%;
            margin-right: .5rem;
            vertical-align: bottom;
        }

        .block-title-text {
            font-size: 1.1rem;
            font-weight: bold;
        }

        .block-dot {
            display: flex;
            margin-left: .5rem;
            align-items: center;
            .dot {
                width: .4rem;
                height: .4rem;
                background: #C20A3C;
                margin-right: .4rem;
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
        .block-more{
            flex: 1;
            text-align: right;
            color: #FFD5D5;
            font-size: .8rem;
        }
    }

    .block-content {
        padding: 0 .5rem .5rem .5rem;
    }
}
</style>
