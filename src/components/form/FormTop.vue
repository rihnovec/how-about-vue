<script setup lang="ts">
type Props = {
  title: string,
  subtitle?: string
};

const { title, subtitle } = defineProps<Props>();
</script>

<template>
  <div class="form-top">
    <h1 class="form-title">{{ title }}</h1>
    <div class="form-subtitle" v-if="subtitle">{{ subtitle }}</div>
  </div>
</template>

<style scoped>
  .form-top {
    margin-bottom: 40px;
  }

  .form-title {
    font-size: 28px;
    line-height: 100%;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #101213;
    margin: 0 0 20px;
  }

  .form-subtitle {
    font-size: 18px;
    line-height: 100%;
    color: #969899;
  }
</style>