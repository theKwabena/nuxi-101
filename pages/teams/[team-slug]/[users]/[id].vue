<template>
  <div>
    {{message}}
  </div>
</template>

<script setup>
const route = useRoute();

const message = computed(()=>`I am on team ${route.params.teamslug} and my user id is ${route.params.id}`)
</script>

<style lang="scss" scoped>

</style>