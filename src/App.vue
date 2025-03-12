<script setup lang="ts">
import Auth from './components/auth/Auth.vue'
import RawIcon from './components/RawIcon.vue' 

</script>

<template>
  <div>
    <Auth />
<!--    <div class="icons">-->
<!--      <h2>Example Icons</h2> -->
<!--      -->
<!--      <label for="" class="input__box">-->
<!--        <RawIcon name="email"  ></RawIcon>-->
<!--        <RawIcon name="password" color="black"></RawIcon>-->
<!--        <RawIcon name="eye-show"></RawIcon>-->
<!--        <RawIcon name="eye-hide"></RawIcon>-->
<!--        -->
<!--        <input type="text">-->
<!--      </label>-->
<!--    </div>-->
<!--    -->
<!--    <div class="box">-->
<!--      <div class="resize">-->
<!--         <img src="./assets/social-yandex.svg" alt="" class="icon email" />-->
<!--       </div>-->
<!--      <div class="resize">-->
<!--        <img src="./assets/social-google.svg" alt="" class="icon password" />-->
<!--      </div>-->
<!--    </div>-->
  </div> 
</template>

<style scoped>
.input__box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: #f5f7f9;
  color: #333;
  font-size: 16px;
  gap: 0.5rem;
  
  & input {
    background-color: transparent;
    border: 0;
    color: #cacccd;
  }
}

.box {
  display: flex;
  gap: .5rem;
  margin: 1rem 0;
}
.resize {
  display: flex;
  border: 1px solid #ccc;
  width: 3rem;
  height: 3rem;
}
</style>
