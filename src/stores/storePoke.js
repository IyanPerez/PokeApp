import { defineStore } from "pinia";
import { ref } from "vue";

export const pokeStore = defineStore("characters", () => {

  const characters = ref([]);

  async function fetchCharacters() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json()
    this.characters = data.results
    }
    
    return { characters, fetchCharacters };
    
});

/* 
.then((res) => res.json())
      .then((data) => {
        this.characters = data;
        console.log(this.characters);
      });
*/