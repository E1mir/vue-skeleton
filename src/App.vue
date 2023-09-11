<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import BlankLayout from '@/components/layouts/BlankLayout.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout === 'Default' ? DefaultLayout : BlankLayout
})
</script>
