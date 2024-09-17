<template>
  <div class="main-flex">
    <Header/>
    <div class="main-page">
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  export default {
    
  }
</script>