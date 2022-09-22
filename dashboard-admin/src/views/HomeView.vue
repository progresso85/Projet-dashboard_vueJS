<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewProduct/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NewProduct from '@/components/NewProduct.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NewProduct
}
}
</script>
