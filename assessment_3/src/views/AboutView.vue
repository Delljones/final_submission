<template>
  <div class="about">
    <h1>About Us </h1>
    <div class="images">
      <img :src="image1" alt="Image Not Loaded">
      <img :src="image2" alt="Image Not Loaded">
      <img :src="image3" alt="Image Not Loaded">
    </div>
    <div class="abouttext">
      The Baby Translator is a project that has come about after having two of my own children and
      noticing that their cries matched what this model suggests. <br><br>
      There has been much research done around the world and surprising enough there is no variation for
      culture or language. Most babies in the world exhibit this behaviour. <br><br>
      The baby translator is a resource for families and caregivers to use as a quick guide and will hopefully
      be a quick way to ascertain the needs of the child and result in a happy settled baby<br><br>

      Author and Creator: <br>Dell Jones, Brisbane
    </div>
  </div>
</template>

<script>
import crawlBaby from '@/assests/crawl_baby.png'
import crawlBaby2 from '@/assests/crawl_baby2.png'
import happyBaby from '@/assests/happy_baby.png'

export default {
  data: function () {
    return {
      image1: crawlBaby,
      image2: crawlBaby2,
      image3: happyBaby,

    }
  }
}
</script>

<style scoped>
.abouttext {
  font-weight: bold;
  background: mintcream;
  color: black;
  font-size: 20pt;
  padding: 2cm;
  text-align: center;
}

img {
  margin-right: 13px;
}

.images{
  display: inline-flex;
  position: relative;
}
</style>
