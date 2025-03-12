<script setup lang="ts">
import { ref } from 'vue';
import RawIcon from '../../../RawIcon.vue';

import type { FormControl } from '../../../../types/FormControl';
import { useInputTypeSwitcher } from '../../../../composables/useInputTypeSwitcher';

type Props = FormControl

const {
  iconName,
  type = 'text',
  placeholder,
  isValid,
  name,
  validate,
  errorMessage
} = defineProps<Props>();

const message = ref('');
const isPasswordInput = type === 'password';

const { inputType, passwordShown, toggleType } = useInputTypeSwitcher(type);
function onInput(event: Event) {
//   validate(target.value)
}
</script>

<template>
  <div class="form-input-group"
       :class="{
    'form-input-group_password': isPasswordInput,
    'form-input-group_error': !isValid
  }">
    <label class="form-input">
      <RawIcon :name="iconName" v-if="iconName" color="#818E9C" />
      <input class="form-input__control"
             :type="inputType"
             :name="name"
             :placeholder="placeholder" @input="onInput">
    </label>
    <button class="form-input-switcher" type="button" @click="toggleType" v-if="isPasswordInput">
      <RawIcon name="eye-hide" color="#818E9C" v-if="passwordShown" />
      <RawIcon name="eye-show" color="#818E9C" v-else />
    </button>
    <span class="form-input" v-if="message">{{ message }}</span>
  </div>
</template>

<style scoped>
.form-input-group {
  position: relative;
}

.form-input {
  display: block;
  width: 100%;
}

.form-input .icon {
  position: absolute;
  left: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
}

.form-input__control {
  width: 100%;
  background-color: #F5F7F9;
  border: 1px solid #F5F7F9;
  color: #969899;
  height: 56px;
  border-radius: 10px;
  padding: 18px 18px 18px 59px;
  transition: .3s;
  font: 400 16px / 100% Inter, Roboto, 'Open Sans', Lato, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.form-input__control::placeholder {
  color: #969899;
}

.form-input-group_password .form-input__control {
  padding-right: 54px;
}

.form-input__control:focus {
  border-color: #969899;
  outline: none;
}

.form-input-switcher {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  padding: 15px;
  height: 100%;
  border: 0;
  width: 52px;
  transition: .3s;
}

.form-input-switcher:focus {
  outline: none;
}

.form-input-switcher:active {
  transform: translateY(2px);
}

.form-input-switcher .icon {
  width: 22px;
}
</style>