import { defineStore } from 'pinia';
import type { FormControl } from '../../types/FormControl';
import { controls as controlsData } from '../../data/auth-form';

import { ref, computed } from 'vue';
import type { ComputedRef, Ref } from 'vue';

export interface State {
  controls: Ref<FormControl[]>
  formValid: ComputedRef<boolean>
  endpoint: string
}

export const useAuthStore = defineStore('auth', (): State => {
  const endpoint = '';
  const controls: Ref<FormControl[]> = ref(controlsData);
  const formValid: ComputedRef<boolean> = computed(() => {
    return controls.value.every(control => control.isValid)
  })

  return {
    endpoint,
    controls,
    formValid
  };
});