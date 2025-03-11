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
</script>

<template>
  <div class="auth-form-wrapper">
    <form action="" class="auth-form">
      <FormTop />
      <FormFields>
        <FormInput />
      </FormFields>
      <FormButtons>
        <FormSubmit />
        <FormLink />
      </FormButtons>
    </form>
    <Divider />
    <AuthSocial />
    <RegisterLink />
    <Copyright />
  </div>
</template>

<style scoped>

</style>