<template>
  <form>
    <h1> Login </h1>
    <label>Username
      <input type="text"/>
    </label>
    <label>
      Password
      <input type="text" />
    </label>
  </form>
</template>

<script setup>
import {useIsLoggedIn} from "~/composables/useIsLoggedIn.js";

const isLoggedIn = useIsLoggedIn();

definePageMeta({
  layout : 'plain'
})
</script>