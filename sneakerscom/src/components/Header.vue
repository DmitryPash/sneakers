<template>
  <div class="header">
    <div class="container">
      <img src="/logo.png" alt="logo" />
      <input type="text" placeholder="email" v-model="email" />
      <input type="text" placeholder="password" v-model="password" />
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const email = ref()
const password = ref()

const signUp = async () => {
  console.log('test')
}
</script>

<style scoped>
.header {
  padding-top: 45px;
  padding-bottom: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  border-bottom: 1px solid #eaeaea;
}
</style>
