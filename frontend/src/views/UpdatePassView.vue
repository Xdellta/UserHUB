<script setup lang="ts">
  import SideBanner from '../components/AuthView/SideBanner.vue'
  import InputField from '../components/AuthView/InputField.vue'
  import ConfirmBtn from '../components/AuthView/ConfirmBtn.vue'
</script>

<template>
  <SideBanner />

  <form autocomplete="off" class="authForm">
    <InputField :selectedField="'password'" />
    <InputField :selectedField="'repeatPassword'" />
    <ConfirmBtn :btnName="'Zapisz'" />
  </form>
</template>