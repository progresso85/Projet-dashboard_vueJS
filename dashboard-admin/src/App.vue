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
    <nav>
    <h1>{{ message }}</h1>
    <div class="right">
    <a class="login" href="https://google.com" >
    login
  </a>
 <!-- <a href="#"><button class="panierBtn"></button></a>-->
  <a  href="https://google.com"><img class="panierBtn" src="./assets/panier.png"  /></a></div>
  </nav>
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

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  h1 {
    color: #ef4565;
    font-size: 30px;
    margin-left: 20px;
  }


  .login {
    display: block;
    float: right;
    color: white;
    text-decoration : none;
    margin-right:  40px;
  }

  .panierBtn {
    width: 50px;
    margin-right: 20px;
  }
  

 
  </style>
