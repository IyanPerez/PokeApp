<script setup>
import { ref } from "vue";
import Cards from '../components/Cards.vue'


async function fetch() {
  const pokemons = ref([])
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  this.pokemons = data;
}

fetch();
console.log(data);

</script>

<template>
  <main>
    <Header />
    <Cards />
    <Footer />

  </main>
</template>
