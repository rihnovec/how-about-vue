import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import type { InputType } from '../types/FormControl';

export const useInputTypeSwitcher = (currentType: InputType) => {
  const inputType: Ref<InputType> = ref(currentType);

  const passwordShown = computed(() => inputType.value === 'text')

  function toggleType() {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'
  }

  return {
    inputType,
    passwordShown,
    toggleType
  }
};