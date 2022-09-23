<template>
  <nav class="product">
    <h1>Bottom Achat</h1>
    <div class="dropdown">
      <button class="dropbtn">Menu</button>
      <div class="dropdown-content3">
        <router-link to="/user"
          ><button class="buttonMenu">add product</button></router-link
        >
        <router-link to="/Home"
          ><button class="buttonMenu">home</button></router-link
        >
        <button class="buttonMenu">desconnect</button>
      </div>
    </div>
  </nav>

  <link-view></link-view>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: 0;
  padding: 0;
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
}
</style>
