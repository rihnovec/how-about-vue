<script setup lang="ts">
type Props = {
  text: string,
  href: string
}

defineProps<Props>();
</script>

<template>
  <div class="form-link">
    <a :href="href" class="form-link__item">{{ text }}</a>
  </div>
</template>

<style scoped>
  .form-link {
    text-align: right;
  }

  .form-link__item {
    font-size: 16px;
    line-height: 100%;
    font-weight: 500;
    color: #157AFE;
  }
</style>