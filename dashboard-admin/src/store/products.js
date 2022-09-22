import { defineStore } from "pinia";
import axios from "axios";

export const useProducts = defineStore("products", {
  state: () => {
    return {
      product: [],
    };
  },
  action: {
    async getProducts() {
      const { data } = await axios.get("http://localhost:3000/products");
      this.product = data;
    },
    test() {
      console.log("test");
    },
  },
});
