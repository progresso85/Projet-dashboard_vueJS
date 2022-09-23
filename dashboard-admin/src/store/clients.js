import { defineStore } from "pinia";
import axios from "axios";

export const useClients = defineStore("clients", {
  state: () => {
    return {
      client: [],
    };
  },
  /*retrieval of customer data in the API*/
  actions: {
    async getClients() {
      const { data } = await axios.get("http://localhost:3000/clients");
      this.client = data;
    },
  },
});
