<template>
  <div class="container">
    <h1 class="heading">Edit basket details</h1>
    <form class="form-container">
        <p class="para">click on the fields to edit</p>
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
          Save Basket changes
          </strong>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit-task",
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
    editBasket() {
      // call validation checker
      let validation = this.validator(this.basket);
      if (validation) {
        let baskets = localStorage.getItem("baskets");
        if (baskets) {
          baskets = JSON.parse(baskets);
          baskets = baskets.filter((basket) => basket.id !== this.basket.id);
          baskets.push(this.basket);
          localStorage.setItem("baskets", JSON.stringify(baskets));
          alert("basket have been modified");
        }
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
  mounted() {
    let id = this.$route.params.id;
    const baskets = JSON.parse(localStorage.getItem("baskets"));
    this.basket = baskets.find((basket) => basket.id == id);
  }
};
</script>


<style scoped>
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