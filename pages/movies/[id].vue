<template>
  <div>
    <h1>  {{$route.params.id}} </h1>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup>
const route = useRoute()

/*
* Nuxt caches the return of use async data and by default a cache key that is unique to the file name  and the line number of the instance where use async data is will be automatically generated.
* We need to provide the unique key to async data for each of the movie.
* The key should be unique and with that we can use the route
*
* Whenever you call a useAsync function, you need to pass in a unique key if there is anything variable in your callback function that can change
* */
// const {data} = useAsyncData(`/movies/${route.params.id}`,()=>{
//   return $fetch(
//       `http://www.omdbapi.com/?apikey=9401cdfc&i=${route.params.id}`
//   )},{
//   //Customize the behaviour of useAsync data
//   //The first option is the transform option.
//   //It accepts the data from the callback function and process it before sending it
//   transform(data){
//     return data.Title;
//
//     /*
//     * return {
//     * Plot : data.Plot,
//     * Title : data.Title
//     * }
//     * */
//   },
//   //Nuxt Provides a shortcut for the above, i.e. limiting the result returned
//   pick : ['Plot', 'Title'], //array of keys you want to include in the payload
//   //Nuxt recommends that we only select the keys we will use in the component
// })

//Nuxt provides a shortcut to using useAsync Fetch and fetch
//It is a handy shortcut for useAsync fetch and $fetch
const {data} = await useFetch(
    `http://www.omdbapi.com/?apikey=9401cdfc&i=${route.params.id}`,
    {
      pick : ['Title'],
      key: `/movies/${route.params.id}`
    }
)

useHead({
  title :  data.value.Title

})

</script>

<style lang="scss" scoped>

</style>