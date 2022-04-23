<template>
  <h1 class="font-bold text-center text-lg p-4">Your Baskets</h1>


  <div class="container">

    <div class="container tasks-actions">

      <!-- LIST OF TASKS -->
      <br><div v-for="basket of baskets" :key="basket?.id" class="basket-container">
        <span class="basket-name">{{basket?.name}} <br> basket</span>
        <div class="container-actions">
          <button
            class="edit"
            @click="this.$router.push(`/editBasket/${basket.id}`)"
            >
            edit
            </button
          >
          <button
            class="view"
            @click="this.$router.push('/basket-details/'+ baskets?.id)"
            >view</button
          >
          <button
            class="delete"
            @click="deleteBasket(basket?.id)"
            >delete</button
          >
        </div>
      </div>
    </div>
  </div>
      <button
      @click="this.$router.push('/add-Basket')"
      class="add-btn"
    >
      Add a Basket
    </button>
</template>
<script>
export default {
  name: "tasks-home",
  data(){
    return {
      baskets:[]
    }
  },
  methods: {
    deleteBasket(id) {
      let confirm = window.confirm("Are you sure you want to remove this basket?")
     if(confirm){
       let baskets = localStorage.getItem("baskets");
          baskets = JSON.parse(baskets);
          baskets = baskets.filter((basket) => basket.id !== id);
          localStorage.setItem("baskets", JSON.stringify(baskets));
          alert("basket deleted successfully");
          window.location.reload();
     }else{
       alert("basket not deleted");
     }
    },
     getBaskets(){
      let baskets = localStorage.getItem("baskets");
      if(baskets){
        this.baskets = JSON.parse(baskets);
        if(this.baskets.length < 1){
          alert("No baskets available. Please start by adding a new basket");
        }
      }else{
        alert("No baskets available. Please start by adding a new basket");
      }
    }
  },
  mounted(){
    this.getBaskets();
  }
};
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
.basket-name{
  color: wheat;
}
.basket-container{
  background-color: #2c3e50;
  display: inline-block;
  margin: 20px;
  padding-top: 50px;
}
.basket-container:hover{
  background-color: #31485f;
}
.container-actions{
  color: white;
}
.edit{
  background-color:aquamarine;
}
.edit:hover{
  background-color:rgb(56, 243, 181);
}
.view{
  background-color: yellow;
}
.view:hover{
   background-color:rgb(255, 255, 153);
}
.delete{
  background-color:rgb(247, 99, 99);
}
.delete:hover{
  background-color:red;
}
.add-btn{
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(51, 205, 51);
}
.add-btn:hover{
  background-color:rgb(97, 215, 97);
}
</style>