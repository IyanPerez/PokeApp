<script setup>
// import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
import { ref,reactive,onBeforeMount } from 'vue';
import Card from '../components/Card.vue'
import { pokeStore } from "../stores/storePoke";


// const pokes = reactive([
//   {
//     name: "bulbasur"
//   },
//   {
//     name: "pikachu"
//   }
// ])

const store = pokeStore();

onBeforeMount(async () => {
  await store.fetchCharacters();
})

</script>

<template>
  <main>
    <!-- <Header /> -->
    <Card v-for="pokemon in store.characters" 
          :name="pokemon.name"
          :url="pokemon.url"
    />
    <!-- <Footer /> -->

  </main>
</template>
