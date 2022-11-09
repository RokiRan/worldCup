<script setup lang="ts">
import { logLabeled } from "./utils/logger";
import ThemeChange from "./components/layout/Navbar/components/ThemeChange.vue";
logLabeled("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66ccff");
</script>

<template>
  <div class="antialiased font-chinese">
    <div class="min-h-screen">
      <ThemeChange v-show="false" />
      <RouterView />
    </div>
  </div>
</template>
