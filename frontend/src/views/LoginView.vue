<script setup lang="ts">
  import SideBanner from '../components/AuthView/SideBanner.vue'
  import InputField from '../components/AuthView/InputField.vue'
  import ConfirmBtn from '../components/AuthView/ConfirmBtn.vue'

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  // Obsługa logowania
  const authForm = ref({
    email: '',
    password: ''
  });

  const hasError = ref(false);

  async function login() {
    try {
      const response = await axios.post('/login', authForm.value);

      if (response.status != 200) {
        throw new Error('Invalid status code');
      }

      router.push('/');
      
    } catch (error) {
      hasError.value = true;
    }
  }
</script>

<template>
  <SideBanner />

  <form @submit.prevent="login" autocomplete="off" class="authForm">
    <InputField label="Login" iconName="UserIcon" inputType="email" inputPlaceholder="E-mail" v-model="authForm.email" :class="{ 'error': hasError }" />
    <InputField label="Hasło" iconName="LockIcon" inputType="password" inputPlaceholder="Hasło do aplikacji" v-model="authForm.password" :class="{ 'error': hasError }" />

    <div class="additionalLoginOptions">
      <label for="rememberPass" class="rememberPassLabel font92">
        <input type="checkbox" id="rememberPass">
        Zapamiętaj hasło
      </label>

      <RouterLink to="/forgot-password" class="link font92">Resetuj hasło</RouterLink>
    </div>

    <ConfirmBtn :btnName="'Zaloguj się'" />
  </form>
</template>

<style type="scss" scoped>
  .Tagline {
    margin-top: -60px;
    margin-bottom: 20px;
  }

  .additionalLoginOptions {
    width: 400px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .font92 {
    font-size: 92%;
  }

  .rememberPassLabel {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* checkbox */
  #rememberPass {
    appearance: none;
    width: 19px;
    height: 19px;
    position: relative;
    border: 2px solid var(--color-main);
    border-radius: 2px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  #rememberPass:checked {
    background-color: var(--color-main);
  }

  #rememberPass:checked::before {
    content: '\2716';
    color: #fff;
    position: absolute;
    font-size: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>