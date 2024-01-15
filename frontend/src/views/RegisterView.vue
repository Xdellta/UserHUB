<script setup lang="ts">
  import SideBanner from '../components/AuthView/SideBanner.vue'
  import InputField from '../components/AuthView/InputField.vue'
  import ConfirmBtn from '../components/AuthView/ConfirmBtn.vue'
</script>

<template>
  <form autocomplete="off" class="authForm">
    <InputField :selectedField="'login'" />
    <InputField :selectedField="'password'" />
    <InputField :selectedField="'repeatPassword'" />
    <ConfirmBtn :btnName="'Zarejestruj się'" />
  </form>

  <SideBanner />
</template>

<style type="scss" scoped>
  
</style>