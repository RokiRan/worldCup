<script lang="ts">
import BannerVue from "./components/Banner.vue";
import NavVue from "./components/Nav.vue";
export default defineComponent({
  name: "Index",
  components: {
    BannerVue,
    NavVue,
  },
});
</script>

<template lang="">
  <div style="background: #cfcfcf">
    <BannerVue />
    <NavVue />
  </div>
</template>

<style lang="">

</style>
