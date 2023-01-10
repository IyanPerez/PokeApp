import { defineStore } from "pinia";
import { ref } from "vue";

export const pokeStore = defineStore("characters", () => {
  const characters = ref([]);

  async function fetchCharacters() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        this.characters = json.data;
      });
  }

  return { characters, fetchCharacters };
});