<script setup lang="ts">
  import SideBanner from '../components/AuthView/SideBanner.vue'
  import InputField from '../components/AuthView/InputField.vue'
  import ConfirmBtn from '../components/AuthView/ConfirmBtn.vue'

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  let authError = ref(false);

  const parentValue = ref('');

  // Login system
  const login = async () => {

    window.alert(parentValue.value);

    // try {
    //   const response = await axios.post('/login', authForm);
    //   const { token } = response.data;

    //   axios.defaults.headers.common['Authorization'] = `${token}`;

    //   router.push('/');
    // } catch (error) {
    //   authError.value = true;
    // }
  };
</script>

<template>
  <SideBanner />

  <form @submit.prevent="login" autocomplete="off" class="authForm">
    <InputField label="Login" iconName="UserIcon" inputType="email" inputPlaceholder="E-mail" v-model="parentValue" />
    <InputField label="Hasło" iconName="LockIcon" inputType="password" inputPlaceholder="Hasło do aplikacji" />

    <div class="additionalLoginOptions">
      <label for="rememberPass" class="rememberPassLabel font92">
        <input type="checkbox" id="rememberPass">Zapamiętaj hasło
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