import type { FormControl } from '../types/FormControl';

export const controls: FormControl[] = [
  {
    name: 'login',
    type: 'text',
    iconName: 'email',
    placeholder: 'you@example.com',
    isValid: true,
    errorMessage: 'Невалидный email',
    validate: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  },
  {
    name: 'password',
    type: 'password',
    iconName: 'password',
    placeholder: 'At least 8 characters',
    isValid: true,
    errorMessage: 'Не менее 8 символов',
    validate: value => value.length >= 8
  },
];