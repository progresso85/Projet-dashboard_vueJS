<script>
import { mapStores, mapState } from "pinia";
import { useClients } from "../store/clients.js";
import { useProducts } from "../store/products.js";
import { useOrders } from "../store/order.js";
import axios from "axios";

export default {
  data() {
    return {
      basket: false,
      myProduct: [],
      exist: false,
    };
  },
  computed: {
    ...mapStores(useClients),
    ...mapState(useClients, ["client"]),
    ...mapStores(useProducts),
    ...mapState(useProducts, ["product"]),
    ...mapStores(useOrders),
    ...mapState(useOrders, ["order"]),
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
      console.log(this.basket);
      this.basket = true;
    },
    addBasket(productId) {
      this.exist = false;
      const productInOrder = this.order[0].products;
      let myProduct_id = 0;
      this.myProduct = productInOrder;

      for (const products in productInOrder) {
        console.log(productInOrder[products].product_id);
        if (productId == productInOrder[products].product_id) {
          this.exist = true;
          myProduct_id = productId;
        }
      }

      if (!this.exist) {
        this.myProduct.push({ product_id: productId, quantity: 1 });
        axios.put(`http://localhost:3000/orders/${1}`, {
          products: this.myProduct,
        });
      } else {
        let newQuantity = (productInOrder[myProduct_id].quantity += 1);
        axios.patch(`http://localhost:3000/orders/${1}`, {
          products: [{ product_id: myProduct_id, quantity: newQuantity }],
        });
      }
    },
  },
};
</script>

<template>
  <nav>
    <h1>Bottom Achat</h1>
    <div class="dropdown">
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content3">
        <router-link to="/user"
          ><button class="buttonMenu">profile</button></router-link
        >
        <button @click="openBasket()" class="buttonMenu">basket</button>
        <button class="buttonMenu">desconnect</button>
      </div>
    </div>
  </nav>

  <select class="tri">
    <option value="" disabled selected>featured</option>
    <option value="croissant">low to high</option>
    <option value="decroissant">high to low</option>
    <option value="catégorie">categories</option>
  </select>
  <div v-if="this.basket" class="modal">
    <div class="modal-content">
      <div id="headerBasket">
        <h1>Basket</h1>
        <span @click="this.basket = !this.basket" class="close">&times;</span>
      </div>
      <div>
        <div
          v-for="productInfo in this.order[0].products"
          :key="productInfo.product_id"
        >
          <div>
            <p>{{ this.order[0].products[0].product_id }}</p>
            <p>{{ this.order[0].products[0].quantity }}</p>
          </div>
          <button @click="deleteProduct(productInfo)">delete</button>
        </div>
      </div>
    </div>
  </div>
  <div
    v-for="product in this.productsStore.product"
    :key="product.id"
    class="id-card"
  >
    <div class="profile-row">
      <div class="dp">
        <img src="../assets/ordinateur.png" />
      </div>

      <div class="desc">
        <h1>{{ product.name }}</h1>
        <p>....{{ product.description }}</p>
        <p>Price : {{ product.price }}</p>
        <p>Amount : {{ product.stock }}</p>
        <button @click="addBasket(product.id)" class="button">
          Add to Cart
        </button>
      </div>
    </div>
  </div>

  <footer id="footerHome">
    <button class="btnPre" @click="pagePrecedente">&lt; Previous</button>
    <button class="btn" @click="page = 1">1</button>
    <button class="btn" @click="page = 2">2</button>
    <button class="btn" @click="page = 3">3</button>
    <button class="btnSuiv" @click="pageSuivante">next ></button>
  </footer>
  <link-view></link-view>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#headerBasket {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.modal {
  position: fixed; /* Stay in place /
  z-index: 1; / Sit on top /
  padding-top: 100px; / Location of the box /
  left: 0;
  top: 0;
  width: 100%; / Full width /
  height: 100%; / Full height /
  overflow: auto; / Enable scroll if needed /
  background-color: rgb(0, 0, 0); / Fallback color /
  background-color: rgba(0, 0, 0, 0.4); / Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.buttonMenu {
  width: 100%;
  border: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  z-index: 210;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #094067;
  box-shadow: rgb(0 0 0 / 62%) 0 5px 20px;
}

.dropdown {
  margin-right: 30px;
  float: right;
  /* overflow: ;*/
}

.dropdown .dropbtn {
  display: flex;
  border: none;

  color: white;
  padding: 31px 10px;
  background-color: inherit;

  font-size: 15px;
}

.dropdown:hover .dropbtn {
  background-color: #094067;
}

.dropdown-content3 {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  min-width: 92px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content3 a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content3 a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content3 {
  display: block;
}

.btn {
  border-left: none;
  border-right: none;
}

.btnSuiv {
  border-left: none;
}

.btnPre {
  border-right: none;
}

.id-card {
  display: flex;
  margin-bottom: 8em;
  flex-direction: row;
  border-radius: 30px;
  margin: 3%;
  margin-top: 7em;
  border: black solid 1px;
  box-shadow: #0d1a1a 10px 10px 10px;
  padding: 1em;
  background-color: #ededed;
}

.profile-row {
  display: flex;
}

.dp {
  flex-basis: 33.3%;
  position: relative;
  margin: 24px;
  align-self: center;
}

.dp img {
  max-width: 100%;
  display: block;
}

.desc {
  font-family: "Orbitron", sans-serif;
  color: #0d1a1a;
  letter-spacing: 1px;
  padding: 1;
  flex-basis: 66.6%;
}

.desc h1 {
  margin: 0px;
}

h1 {
  color: #ef4565;
  font-size: 30px;
  margin-left: 20px;
}

.tri {
  margin-top: 90px;
  height: 30px;
  border: 1px;
  font-size: 18px;
  color: white;
  background-color: #3da9fc;
  border-radius: 5px;
}

.button {
  background-color: #3da9fc;
  border-radius: 5px;
}

#footerHome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  z-index: 210;
  background-color: #094067;
  box-shadow: rgb(0 0 0 / 62%) 0 5px 20px;
}
</style>
