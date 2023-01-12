<template>
  <footer class="footer">
    <div class="footer-container-copyright">
        <img src="../assets/img/copyright.png">
        <p><strong>COPYRIGHT</strong></p>
    </div>
    <div class="footer-container-social-media">
      <p><strong>SOCIAL MEDIA</strong></p>
      <img src="../assets/img/facebook.png">
      <img src="../assets/img/instagram.png">
      <img src="../assets/img/twitter.png">
      <img src="../assets/img/youtube.png">
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  
    display: flex;
    justify-content: space-around;
    align-items: center;
   /* height: auto;*/
    background: linear-gradient(
      90deg,
      red 0%,
      rgb(215, 232, 226) 99%
    );
    /*flex-direction: row;
    flex-wrap: wrap;*/
}

.footer img{
  width: 40px; 


}

.footer-container-social-media {
display: flex;
gap: 1%;
margin-right: 2%;
text-align:end;
text-shadow:  5px 5px 5px blue;
}

.footer-container-copyright p strong {
  text-shadow:  5px 5px 5px blue;
}

.footer-container-copyright{
  background: linear-gradient(90deg, red 0%, red 99%);
}



.footer-container-social-media img{
  &:hover {
    width: 50px;
}
}
.footer-container-social-media strong {
  margin-right: 10%;
}

</style>