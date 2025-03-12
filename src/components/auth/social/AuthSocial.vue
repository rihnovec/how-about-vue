<script setup lang="ts">
  type Props = {
    href: string,
    text: string
  }

  defineProps<Props>()
</script>

<template>
  <a :href="href" class="auth-social">
    <span class="auth-social__icon">
      <slot name="icon"></slot>
    </span>
    {{text}}
  </a>
</template>

<style scoped>
  .auth-social {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 0 8px;
    font-size: 16px;
    line-height: 100%;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #000;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    transition: .3s;
  }

  .auth-social:hover {
    border-color: #e7e5e5;
  }

  .auth-social__icon {
    width: 24px;
    line-height: 0;
  }
</style>