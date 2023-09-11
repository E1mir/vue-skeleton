<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button
      type="button"
      @click="counterStore.increment"
    >
      count is {{ counterStore.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div class="card">
    <button
      type="button"
      @click="getAllPosts"
    >
      Send get request
    </button>
    <div class="card-wrapper">
      <div
        v-if="loading"
        class="loader"
      />
      <template v-else>
        <p v-if="!posts.length">
          No posts loaded
        </p>
        <p v-else>
          Posts length is {{ posts.length }}
        </p>
      </template>
    </div>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      rel="noopener noreferrer"
    >create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a
      href="https://github.com/vuejs/language-tools"
      target="_blank"
      rel="noopener noreferrer"
    >
      Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { getPosts } from '@/services/api'
import { useCounterStore } from '@/stores/counter.ts'



defineProps<{ msg: string }>()

const counterStore = useCounterStore()
const posts = ref([])
const loading = ref(false)

const getAllPosts = async () => {
  loading.value = true
  try {
    const { data } = await getPosts()
    posts.value = data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  display: block;
  margin-top: 8px;
  width: 40px;
  height: 40px;
}

.loader::after {
  content: ' ';
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 6px solid #42b883aa;
  border-color: #42b883aa transparent;
  animation: loading 1.2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
