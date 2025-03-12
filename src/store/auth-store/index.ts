import { defineStore } from 'pinia';
import type { FormControl } from '../../types/FormControl';
import { controls as controlsData } from '../../data/auth-form';

import { ref, computed } from 'vue';
import type { ComputedRef, Ref } from 'vue';

type AuthPayload = {
  login: string,
  password: string
}

type ResponseStatus = 'success' | 'error'
type AuthResponse = {
  status: ResponseStatus,
  message: string
}

type AuthFunction = (formData: AuthPayload) => Promise<AuthResponse>

export interface State {
  controls: Ref<FormControl[]>
  formValid: ComputedRef<boolean>
  endpoint: string,
  auth: AuthFunction
}

export const useAuthStore = defineStore('auth', (): State => {
  const endpoint = '';
  const controls: Ref<FormControl[]> = ref(controlsData);
  const formValid: ComputedRef<boolean> = computed(() => {
    return controls.value.every(control => control.isValid)
  })

  const auth: AuthFunction = async ({ login, password }: AuthPayload): Promise<AuthResponse> => {
    return new Promise((resolve, reject) => {
      try {
        if (login === 'user' && password === 'user') {
          resolve({
            status: 'success',
            message: 'Добро пожаловать'
          })
        } else {
          resolve({
            status: 'error',
            message: 'Неверный логин или пароль'
          })
        }
      } catch(error) {
        reject({
          status: 'error',
          message: 'Ошибка выполнения авторизации'
        })
      }
    })
  }

  return {
    endpoint,
    controls,
    formValid,
    auth
  };
});