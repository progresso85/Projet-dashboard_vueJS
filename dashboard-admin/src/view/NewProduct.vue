<template>
  <!--From -->
  <form>
    <input
      v-model="name"
      name="text"
      class="feedback-input"
      placeholder="Product Title/Name"
    />
    <textarea
      v-model="description"
      name="text"
      class="feedback-input"
      placeholder="Product Description"
    ></textarea>
    <label for="price">Price :</label>
    <input v-model="price" class="feedback-input" type="number" />
    <label for="stock">Stock :</label>
    <input v-model="stock" class="feedback-input" type="number" />

    <router-link @click="addNewProduct()" to="/user"
      ><input type="submit" value="SUBMIT"
    /></router-link>
  </form>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
form {
  max-width: 420px;
  margin: 50px auto;
}

.feedback-input {
  color: #5f6c7b;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #cc6666;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 2px solid #cc4949;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  width: 100%;
  background: #cc6666;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}
[type="submit"]:hover {
  background: #cc4949;
}
</style>

<script>
import axios from "axios";
export default {
  name: "NewProduct",
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      stock: 0,
    };
  },
  methods: {
    addNewProduct() {
      let addP = {
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        idUser: 4,
      };
      axios.post("http://localhost:3000/products", addP);
    },
  },
};
</script>
