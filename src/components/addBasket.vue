<template>
  <div class="container">
    <h1 class="heading">Add Basket</h1>
    <form class="form-container">
        <p class="para">enter the required fields <br> to create a basket</p>
      <div
        class="input-container"
      >
        <input
          type="text"
          class="basket"
          name="name"
          v-model="basket.name"
          placeholder="Name of basket"
        />
      </div>

      <div
        class="container"
      >
        <select
          name="priority"
          id=""
          class="basket"
          v-model="basket.contentType"
        >
          <option value="SCHOOL" selected>Electronics</option>
          <option value="HOUSEHOLD" >Nutrition</option>
          <option value="CAREER">Crafting</option>
          <option value="CAREER">Outfit</option>
          <option value="CAREER">Other</option>
        </select>

        <button
          @click="saveBasket()"
          type="button"
          class="add-basket "
        ><strong>
          Add Basket
          </strong>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-basket",
  data() {
    return {
      basket: {
        id: "",
        name: "",
        contentType: "",
        createdAt: "",
      },
    };
  },
  methods: {
    saveBasket() {
      let id = Math.ceil(Date.now());
      this.basket.id = id;
      this.basket.createdAt = new Date(Date.now());
      // call validation checker
      let validation = this.validator(this.basket);
      if (validation) {
        let baskets = localStorage.getItem("baskets");
        if (baskets) {
          baskets = JSON.parse(baskets);
          baskets.push(this.basket);
        } else {
          baskets = [];
          baskets.push(this.basket);
        }
        localStorage.setItem("baskets", JSON.stringify(this.basket));
        alert("Basket added successfully");
      }
    },
    validator(
      basket = {
        name: "",
        contentType: "",
      }
    ) 
    {
      if (basket.name.length < 1) {
        alert("basket name is required");
        return false;
      }
      
      if (basket.contentType.length < 1) {
        alert("basket content type is required");
        return false;
      }
      // success
      return true;
    },
  },
};
</script>

<style scoped>
.heading{
    text-transform: uppercase;
    color: indianred;
}
.form-container{
    background-color: aquamarine;
    padding: 5rem;
    display: inline-block;
    border-radius: 10px;
}
.para{
    margin-top: -2rem;
}
.basket{
    padding: 7%;
    border-radius: 10px;
    width: 100%;
    margin: 10px;
}
.add-basket{
    padding: 10px;
    border-radius: 10px;
    background-color: aqua;
    color: black;
    margin: 10px;
}
.add-basket:hover{
    background-color: rgb(51, 205, 51);
}
</style>