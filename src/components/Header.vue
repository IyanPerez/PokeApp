<template>
    <header class="header">
      <div>
        <h1>POKÉMON API</h1>
      </div>
      <nav>
        <router-link to="/" class="nav__link" href="">INIT</router-link>
        <router-link to="/favorites" class="nav__link" href="">SEEKER</router-link>
        <router-link to="/" class="nav__link" href="">CATEGORIES</router-link>
      </nav>
    </header>
  </template>
  
  <style lang="scss">
  @import "../assets/scss/styles.scss";
  
  *{
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: baseline;

  }
  div{
    background: linear-gradient(
      90deg,
      red 0%,
      rgb(215, 232, 226) 99%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      color: yellow;
      
      
      h1{
        text-shadow:  10px 10px 10px blue;
        font-family: $font-text;
        font-size: 4rem;
        letter-spacing: 5px;
        text-align: center;
 }
}

nav{
  display: flex;  
}

a {
  display: flex;
  width: auto;
}

</style>

