<script setup lang="ts">
  import { defineProps } from 'vue';
  const { btnName } = defineProps(['btnName']);
</script>

<template>
  <button>{{ btnName }}</button>
</template>

<style type="scss" scoped>
  button {
    width: 400px;
    max-width: 90%;
    height: 50px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: var(--color-main);
    border-radius: 4px;
    border: none;
    outline: none;
    transition: transform 0.2s, letter-spacing 0.2s;
  }

  button:hover {
    cursor: pointer;
    transform: scale(0.97);
    letter-spacing: 2px;
  }
</style>