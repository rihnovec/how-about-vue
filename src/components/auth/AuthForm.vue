<script setup lang="ts">
import FormTop from '../form/FormTop.vue';
import FormFields from '../form/FormFields.vue';
import FormInput from '../shared/ui/forms/FormInput.vue';
import FormButtons from '../form/FormButtons.vue';
import FormSubmit from '../form/FormSubmit.vue';
import FormLink from '../form/FormLink.vue';
import Divider from '../shared/ui/Divider.vue';
import AuthSocial from './social/AuthSocial.vue';
import RegisterLink from '../form/RegisterLink.vue';
import Copyright from '../shared/ui/Copyright.vue';

import { useAuthStore } from '../../store/auth-store';
import type { State } from '../../store/auth-store';
import type { AuthPayload } from '../../types/auth';
import { storeToRefs } from 'pinia';
import { formDataToObject } from '../shared/helpers/formDataToObject';

const authStore: State = useAuthStore();
const { formValid, auth } = authStore;
const { controls, endpoint } = storeToRefs(authStore);

async function onSubmit(event: Event) {
  const formData = new FormData(event.target);
  const formPayload = formDataToObject(formData) as AuthPayload;

  const response = await auth(formPayload);
  console.log(response);
}
</script>

<template>
  <div class="auth-form-wrapper">
    <div class="auth-form-logo">
      <img src="../../../src/assets/vue.svg" alt="App" class="app-logo" />
    </div>
    <form :action="endpoint" class="auth-form" @submit.prevent="onSubmit">
      <FormTop title="Welcome back!"
               subtitle="Lorem ipsum dolor sit amet, consectetur" />
      <FormFields>
        <FormInput v-for="control in controls"
                   :key="control.name" v-bind="control" />
      </FormFields>
      <FormButtons>
        <FormLink href="#" text="Forgot password?" />
        <FormSubmit :disabled="!formValid">Login</FormSubmit>
      </FormButtons>
    </form>
    <Divider text="or" />
    <div class="auth-social-list">
      <AuthSocial href="#" text="Google">
        <template #icon>
          <img src="../../../src/assets/social-google.svg" alt="Auth with google" />
        </template>
      </AuthSocial>
      <AuthSocial href="#" text="Yandex">
        <template #icon>
          <img src="../../../src/assets/social-yandex.svg" alt="Auth with yandex" />
        </template>
      </AuthSocial>
    </div>
    <RegisterLink>Don’t you have an account? <a href="#">Sign Up</a></RegisterLink>
    <Copyright />
  </div>
</template>

<style scoped>
.auth-form-wrapper {
  width: 100%;
  max-width: 448px;
  margin: auto auto 0;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-form-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.auth-social-list {
  display: flex;
  gap: 0 17px;
}
</style>