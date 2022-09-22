import { defineStore } from "pinia";
import axios from "axios";

export const useOrders = defineStore("orders", {
    state: () => {
      return {
        order: [],
      };
    },
    actions: {
      async getOrders() {
        const { data } = await axios.get("http://localhost:3000/orders");
        this.order = data;
      },
    },
  });
  