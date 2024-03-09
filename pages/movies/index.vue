<template>
  <Search />
</template>

<script setup>
definePageMeta({
  //Inline Middleware
  // middleware(to, from){
  //   console.log(to, from, "Inline Middleware")
  // },

  middleware : ['logger']
})
</script>