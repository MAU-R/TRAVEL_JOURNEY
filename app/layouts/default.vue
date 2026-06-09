<!--
/app/layouts/default.vue
-->

<template>
  <div class="flex fmin-h-screen flex-col">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
