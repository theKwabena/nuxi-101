<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<script setup>
useHead({
  titleTemplate : (titleChunk)=>{
    return titleChunk ? `${titleChunk} -  Movies101` : 'Movies101'
  }
})
</script>
