<script setup lang="ts">
  import type { Ref } from 'vue';
  import { ref } from 'vue';

  const currentYear: Ref<number> = ref((new Date()).getFullYear())
</script>

<template>
  <div class="copyright">© {{ currentYear }} ALL RIGHTS RESERVED</div>
</template>

<style scoped>
  .copyright {
    text-align: center;
    font-size: 14px;
    line-height: 100%;
    font-weight: 400;
    color: #969899;
    margin-top: 134px;
  }
</style>