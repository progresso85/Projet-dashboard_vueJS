<template>
    <nav class="product">
    <a>my product</a>|
    <button @click="showAddP()">add product</button>
     <addProduct @closeEvent="this.showAddProduct = !this.showAddProduct" v-if="showAddProduct"></addProduct> 
  </nav>
  
  
</template>

<script>
import addProduct from '../components/addProduct.vue'
export default {
  components: {
    addProduct
  },
  data(){
    return{
      showAddProduct : false
    }
  },
  methods:{
    showAddP(){
      this.showAddProduct=true
    }
  }
}
</script>
<style scoped>

    html {
      background: #fffffe;
    }

    nav {
        background: #094067;

    }

    h1 {
      color: #fffffe;
    }

    .link{
        color: #fffffe;
        text-align: center;
    }

    nav a {
        color: #fffffe;
    }

    </style>