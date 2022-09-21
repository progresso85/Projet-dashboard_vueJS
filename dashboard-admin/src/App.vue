<script>
  export default {
    data() {
      return {
        message: 'Bottom Achat'
        
      }
    }
  }
  </script>
  
  <template>
    <div id = 'bandeau'>
 
</div>
    <h1>{{ message }}</h1>
    <a href="https://google.com" >
    login
  </a>
  <button class="panierBtn"><img class="panier" src="./assets/panier.png" /></button>
  </template>


<style>


  button, a {
    display: block;
    margin-bottom: 1em;
  }
  .panierBtn {
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 20%;

  }
  .panier {
    width: 20%;
    height: 20%;
  }
  </style>
