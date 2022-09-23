<template>
  <nav class="product">
    <h1>Bottom Achat</h1>
    <div class="dropdown">
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content3">
        <router-link to="/Add"
          ><button class="buttonMenu">add product</button></router-link
        >
        <router-link to="/Home"
          ><button class="buttonMenu">home</button></router-link
        >
        <button class="buttonMenu">desconnect</button>
      </div>
    </div>
  </nav>

  <div class="card">
    <img src="../assets/ordinateur.png" alt="Denim Jeans" style="width: 100%" />
    <h1>Titre</h1>
    <p class="price">Price</p>
    <p>Description</p>
    <p><button>modif</button></p>
  </div>

  <button id="delete">Delete account</button>

  <div id="footerUser">
    <button class="btnPre" @click="pagePrecedente">&lt; Previous</button>
    <button class="btn" @click="page = 1">1</button>
    <button class="btn" @click="page = 2">2</button>
    <button class="btn" @click="page = 3">3</button>
    <button class="btnSuiv" @click="pageSuivante">next ></button>
  </div>
  <link-view></link-view>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0;
  padding: 0;
}

#delete {
  margin-bottom: 1%;
  margin-left: 1%;
  width: 10%;
  height: 5%;
  background-color: #3da9fc;
  border-radius: 5px;
  color: white;
  border: none;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  font-family: arial;
  margin-top: 13%;
  margin-left: 39%;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
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

h1 {
  color: #ef4565;
  font-size: 30px;
  margin-left: 20px;
}

.buttonMenu {
  width: 100%;
  border: none;
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

#footerUser {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 210;
  background-color: #094067;
  box-shadow: rgb(0 0 0 / 62%) 0 5px 20px;
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
</style>
