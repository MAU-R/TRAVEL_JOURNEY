<!-- app/components/ColorToggle.vue -->
<template>
  <button class="btn btn-ghost btn-circle" @click="cycle">
    <Icon
      v-if="current === 'light'"
      name="tabler:sun"
      size="24"
    />
    <Icon
      v-if="current === 'business'"
      name="tabler:moon"
      size="24"
    />
    <Icon
      v-if="current === 'abyss'"
      name="tabler:alien-filled"
      size="24"
    />

    <Icon
      v-if="current === 'synthwave'"
      name="tabler:wave-saw-tool"
      size="24"
    />
  </button>
</template>

<script lang="ts" setup>
import { useTheme } from "../composables/useTheme";

const { current, cycle } = useTheme();
</script>
