<!--
/app/layouts/default.vue
-->

<template>
  <div class="flex fmin-h-screen flex-col">
    <NavBar />
    <main
      class="flex-1 flex flex-col"
    >
      <slot />
    </main>
  </div>
</template>

<script lang="ts"
      setup
    >
const authStore = useAuthStore();
await authStore.init();
</script>
