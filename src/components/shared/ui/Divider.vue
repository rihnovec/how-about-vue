<script setup lang="ts">
type Props = {
  text: string
}

defineProps<Props>();
</script>

<template>
  <div class="divider" v-if="text">
    <div class="divider__text">{{ text }}</div>
  </div>
</template>

<style scoped>
  .divider {
    margin: 42px 0 41px;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 16px;
    line-height: 100%;
    color: #969899;
  }

  .divider::before,
  .divider::after {
    min-width: 0;
    flex-grow: 1;
    content: '';
    display: block;
    border-top: 2px solid #F5F5F5;
  }

  .divider__text {
    flex-shrink: 0;
    max-width: 60%;
    margin: 0 16px;
  }
</style>