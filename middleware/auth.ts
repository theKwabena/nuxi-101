export default defineNuxtRouteMiddleware((to, from) => {
   const userIsLoggedIn = false;
   if (!userIsLoggedIn){
       // return abortNavigation("Not authorized");
       return navigateTo({name : 'login'})
   }
});