<template>
  <div v-if="!user">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleSignUp">Sign Up</button>
  </div>
  <div v-else>
    <p>Welcome, {{ user.email }}</p>
    <button @click="handleSignUp">Sign Out</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCurrentUser, signIn, signOut, signUp } from "@/services/auth.js";

const email = ref("");
const password = ref("");
const user = ref(null);

const handleSignUp = async () => {
  try {
    await signUp(email.value, password.value);
    console.log(email.value, password.value);
  } catch (error) {
    console.error(error);
  }
};

const handleSignIn = async () => {
  try {
    await signIn(email.value, password.value);
    user.value = getCurrentUser();
    console.log(email.value, password.value);
  } catch (error) {
    console.error(error);
  }
};

const handleSignOut = async () => {
  try {
    await signOut();
    user.value = null;
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

onMounted(() => {
  console.log(user.value);
});
</script>
