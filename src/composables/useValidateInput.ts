import type { Ref } from 'vue';
import type { ValidationFunction } from '../types/FormControl';

export const useValidateInput = (validator: ValidationFunction, result: Ref<boolean>) => {
  function updateInputValidStatus(value: string): void {
    result.value = validator(value)
  }

  return {
    updateInputValidStatus
  }
}