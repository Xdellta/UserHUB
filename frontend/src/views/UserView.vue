<script setup lang="ts">
  import axios from 'axios';

  const logout = async () => {
    try {
      const response = await axios.post('/logout');
      
      if (response.status === 200) {
        window.location.href = '/login';
      }

    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error);
    }
  };
</script>

<template>
  <div>
    <h1>User setup</h1>
    <button @click="logout">WYLOGUJ</button>
  </div>
</template>

<style scoped>
/* Dodaj stylizację według potrzeb */
</style>