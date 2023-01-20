<script setup>

</script>

<template>
    <div id="cards-container">
        <div
            class="character"
            v-for="character in store.poke"
            :key="character"
        >
            <Cards
            
            />
            
        </div>
    </div>
</template>

<style>

</style>