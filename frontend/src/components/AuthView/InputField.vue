<script setup lang="ts">
  import { defineProps } from 'vue';
  import UserIcon from '@/assets/icons/UserIcon.vue';
  import LockIcon from '@/assets/icons/LockIcon.vue';
  import ShowIcon from '@/assets/icons/ShowIcon.vue';

  const { selectedField } = defineProps(['selectedField']);
</script>

<template>
  <label v-if="selectedField === 'login'" for="login">Login
    <UserIcon class="icon" />
    <input type="email" id="login" placeholder="E-mail" required>
  </label>

  <label v-if="selectedField === 'password'" for="password">Hasło
    <LockIcon class="icon" />
    <input type="password" id="password" minlength="6" placeholder="Hasło do aplikacji" required>
    <ShowIcon class="showPass" />
  </label>

  <label v-if="selectedField === 'repeatPassword'" for="repeatPassword">Powtórz hasło
    <LockIcon class="icon" />
    <input type="password" id="repeatPassword" minlength="6" placeholder="Hasło z górnego pola" required>
  </label>
</template>

<style type="scss" scoped>
  label {
    width: 400px;
    max-width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: transform 0.2s, letter-spacing 0.2s;
  }

  .icon {
    position: absolute;
    height: 26px;
    width: max-content;
    bottom: 12px;
    left: 10px;
    fill: var(--color-contrast);
  }

  input {
    width: 100%;
    height: 50px;
    color: var(--color-contrast);
    background-color: var(--color-background1);
    border: 1px solid var(--color-contrast);
    border-radius: 4px;
    outline: none;
    padding: 0 15px 0 50px;
  }

  input[type='password'] {
    padding-right: 64px;
  }

  label:focus-within {
    transform: scale(1.05);
  }

  input:focus, input:valid {
    border: 1px solid var(--color-main);
  }

  .showPass {
    position: absolute;
    height: 34px;
    width: max-content;
    bottom: 8px;
    right: 10px;
    fill: var(--color-contrast);
  }

  .showPass:hover {
    cursor: pointer;
    transform: scale(0.94);
  }
</style>