<template>
  <div class="default-layout">
    <header class="default-layout__header" />
    <main class="default-layout__main">
      <slot />
    </main>
    <footer class="default-layout__footer">
      <p>
        © {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header, &__footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
}
</style>
