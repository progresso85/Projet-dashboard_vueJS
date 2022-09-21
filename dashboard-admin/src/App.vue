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
