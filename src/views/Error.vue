<template>
  <div class="error">
    <div>Page not found</div>
    <router-link to="/">
      Back to Home
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
