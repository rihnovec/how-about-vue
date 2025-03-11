<script setup lang='ts'>
import PageAside from '../shared/layout/PageAside.vue';
import AuthForm from './AuthForm.vue';
</script>

<template>
  <main class="auth">
    <PageAside>
      <template #header>
        <img src="../../../src/assets/vue.svg" alt="App" class="app-logo" />
      </template>
      <template #footer>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore
      </template>
    </PageAside>
    <div class="page-content">
      <AuthForm />
    </div>
  </main>
</template>

<style scoped>
  .auth {
    display: flex;
    height: 100vh;
  }

  .page-content {
    width: 60%;
    min-width: 0;
    flex-grow: 1;
  }
</style>