<script setup>
import { onBeforeMount,reactive,ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  }
});

let pokeDetails = ref({});
let pokeImg = ref()

onBeforeMount( async () => {
  const respose = await fetch(props.url)
  const data = await respose.json()
  pokeDetails.value = data
  pokeImg.value = pokeDetails.value.sprites.front_default
  console.log(pokeDetails.base_experience);
})


const sendCharcatersFavorites = async () => {
  // favoriteStore.showCharacters(props);
  // alert(`${props.name} se ha añadido a favoritos`);
};
</script>

<template>
  <div class="container">
    <p>{{ name }} / {{ pokeDetails.base_experience }}</p>
    <img :src="pokeImg" alt="" >
    <button @click="sendCharcatersFavorites()">Click Me</button>
  </div>
</template>

<!-- <style lang="scss" scoped>
@import "../assets/scss/styles.scss";
.container {
  background-color: $background-color;
  padding: 0;
  width: 130px;
  height: 185px;
  border-radius: 5%;
  img {
    width: 100%;
    height: 90px;
    border-radius: 5%;
  }
  p {
    font-family: $font-family;
    color: $colortext;
    text-align: center;
  }
  button {
    border: none;
    background-color: $background-color;
    border-radius: 80%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 10px;
    #favoritos {
      border: none;
      background-color: none;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style> -->

