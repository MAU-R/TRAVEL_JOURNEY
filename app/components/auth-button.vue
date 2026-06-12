<!-- /app/components/auth-button.vue -->

<template>
  <div v-if="authStore.user" class="dropdown">
    <div
      tabindex="0"
      role="button"
      class="btn m-1"
    >
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-6 rounded-full">
          <img :src="authStore.user.image" alt="avatar">
        </div>
      </div>
      {{ authStore.user.name }}
    </div>
    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="16" />SIGN OUT
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button
    v-else
    :disabled="authStore.loading"
    class="btn btn-accent"
    @click="authStore.signIn"
  >
    Sign In With Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon
      v-else
      name="tabler:brand-github"
      size="24"
    />
  </button>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>
