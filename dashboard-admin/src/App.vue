

<script>
  import { mapStores, mapState } from 'pinia'
  import { useClients } from './store/clients.js'
  import { useProducts } from './store/products.js'
    export default {
      data() {
        return {
          message: 'Bottom Achat'
          
        }
      },
      computed: {
     ...mapStores(useClients),
     ...mapState(useClients, ['clients']),
     ...mapStores(useProducts),
     ...mapState(useProducts, ['products']),
    },
    beforeMount(){
      this.clientsStore.getClients();
      this.productsStore.getProducts();
    },
    methods: {
      afficher(){
        console.log(this.clientsStore.client);
        for(const client in this.clientsStore.client){
        console.log(this.clientsStore.client[client].id);}
      }
  }
    }

    </script>
    
    <template>
      <nav>
      <h1>{{ message }}</h1>
        <div class="dropdown">
                  <button class="dropbtn">Menu 
                </button>
                  <div class="dropdown-content3">
                      <a href="#">profil</a>
                      <a href="#">...</a>
                      <a href="#">...</a>
                  </div>
              </div>
    </nav>
     
    <select class="tri">
      <option value="" disabled selected>Select a sort</option>
      <option value="croissant">increasing</option>
      <option value="decroissant">decreasing</option>
      <option value="catégorie">categories</option>
  </select>
  
  <div class="id-card">
          <div class="profile-row">
              <div class="dp">
                  <img src="./assets/ordinateur.png">
              </div>
              
              <div v-for=" product in this.productsStore.product" :key="product.id" class="desc">
                  <h1>{{product.id}}</h1>
                  <p>....{{description}}</p>
                  <p>Prix : {{product.price}}</p>
                  <p>Quantité : {{product.stock}}</p>
                  <button class="button">Ajouter au panier</button>
              </div>
          </div>
      </div>
  
  
      <div class="pagination">
        <button class="btnPre" @click="pagePrecedente"> &lt; précédente </button>
          <button class="btn" @click="page=1">1</button>
          <button class="btn" @click="page=2">2</button>
          <button class="btn" @click="page=3">3</button>
          <button class="btnSuiv" @click="pageSuivante">suivant ></button>
      </div>
  
    </template>
    
  
  
  <style>
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
  
    .btn{
      border-left: none;
      border-right: none;
      
    }
    
    .btnSuiv{
      border-left: none;
    }
  
    .btnPre{
      border-right: none;
    }
  
  
  
  .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      position: fixed;
      z-index: 210;
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: #094067;
      box-shadow: rgb(0 0 0 / 62%) 0 5px 20px;
  }
  
  .id-card {
      display: flex;
      flex-direction: row;
      border-radius: 30px;
      margin-top: 15%;
      margin-left: 30%;
      width: 35%;
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
      font-family: 'Orbitron', sans-serif;
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
          border: 1px  ;
          font-size: 18px;
          color: white;
          background-color: #3da9fc;
          border-radius: 5px;
    }

    .button {
      background-color: #3da9fc;
          border-radius: 5px;
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
    
  
   
    </style>
  
  