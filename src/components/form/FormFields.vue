<script setup lang="ts">

</script>

<template>
  <div class="form-fields">
    <slot></slot>
  </div>
</template>

<style scoped>
  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }
</style>