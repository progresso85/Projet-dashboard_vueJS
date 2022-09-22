import { defineStore } from "pinia";
import axios from "axios";

export const useClients = defineStore("clients", {
  state: () => {
    return {
      client: [],
    };
  },
  actions: {
    async getClients() {
      const { data } = await axios.get("http://localhost:3000/clients");
      this.client = data;
    },
  },
});
