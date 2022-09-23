<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div id="headerProduct">
                <h1>Add a new product</h1>
                <span @click="closeAddP()" class="close">&times;</span>
            </div>
            <form id="formAddP" action="">
                <div>
                    <label for="name">Enter the product's name :</label>
                    <input  v-model="name" type="text">
                </div>
                <div>
                    <label for="description">His description :</label>
                    <textarea v-model="description" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label for="price">His price :</label>
                    <input v-model="price" type="number">
                </div>
                <div>
                    <label for="stock">His stock</label>
                    <input v-model="stock" type="number">
                </div>
                <input  type="button" value="add" @click="addProduct()">
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                name:"",
                description:"",
                price:0,
                stock:0
            }
        },
        methods:{
            closeAddP(){
                this.$emit('closeEvent')
            },
            addProduct(){

            }
        }
    }
</script>

<style>
#headerProduct{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>