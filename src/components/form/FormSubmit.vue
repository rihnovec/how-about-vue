<script setup lang="ts">
type Props = {
  disabled?: boolean
}

const { disabled = false } = defineProps<Props>();
</script>

<template>
  <button class="form-submit" type="submit" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.form-submit {
  margin-top: 24px;
  border: none;
  background-color: #157AFE;
  color: #fff;
  transition: .2s;
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  padding: 18px 30px;
  border-radius: 10px;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: default;
}

.form-submit:focus {
  outline: none;
}

.form-submit:hover {
  background-color: #1270ea;
}

.form-submit:active {
  transform: translateY(2px);
}
</style>