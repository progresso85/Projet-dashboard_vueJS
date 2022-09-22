

<script>
  import { mapStores, mapState } from 'pinia'
  import { useProducts } from './store/products.js'

    export default {
      data() {
        return {
          message: 'Bottom Achat'
          
        }
      },
      computed: {
     ...mapStores(useProducts),
     ...mapState(useProducts, ['product']),
  },
  beforeMount(){
    this.productsStore.test()
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
                  <img src="data:image/jpeg;base64,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">
              </div>
              <div v-for="product in product" :key='product.id' class="desc">
                  <h1>.....{{product.name}}</h1>
                  <p>....{{description}}</p>
                  <p>Prix : {{prix}}</p>
                  <p>Quantité : {{quantite}}</p>
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
      border-radius: 50%;
      display: block;
      border: #0d1a1a solid 4px;
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
  
  