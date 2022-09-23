<script>
import { mapStores, mapState } from "pinia";
import { useClients } from "./store/clients.js";
import { useProducts } from "./store/products.js";
import { useOrders } from "./store/order.js";
import axios from "axios";

export default {
  data() {
    return {
      message: "Bottom Achat",
      basket: false,
      myProduct: [],
      exist: false,
    };
  },
  computed: {
    ...mapStores(useClients),
    ...mapState(useClients, ["clients"]),
    ...mapStores(useProducts),
    ...mapState(useProducts, ["products"]),
    ...mapStores(useOrders),
    ...mapState(useOrders, ["orders"]),
  },
  beforeMount() {
    this.clientsStore.getClients();
    this.productsStore.getProducts();
    this.ordersStore.getOrders();
  },
  methods: {
    afficher() {
      console.log(this.clientsStore.client);
      for (const client in this.clientsStore.client) {
        console.log(this.clientsStore.client[client].id);
      }
    },
    openBasket() {
      this.basket = true;
    },
    addBasket(productId) {
      this.exist = false;
      const productInOrder = this.ordersStore.order[0].products;
      this.myProduct = productInOrder;

      for (const products in productInOrder) {
        if (productId == productInOrder[products].product_id) {
          this.exist = true;
        }
      }
      if (!this.exist) {
        this.myProduct.push({ productId, quantity: 1 });
        axios.put("http://localhost:3000/orders", { products: this.myProduct });
        //this.myBasket.push({productId});
      } else console.log("ui");
    },
  },
};
</script>

<template>
  <router-link to="/user"></router-link>

  <router-view> </router-view>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
