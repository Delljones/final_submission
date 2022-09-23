<template>
<!--  Main home page of the project and sets the main content for the project-->
  <div class="homepage">
    <div class="heading">
      <h1>Welcome to the Baby Translator</h1>
      <h2>Everything you need to understand your baby</h2>
    </div>
    <div class="introduction-text">
      <font-awesome-icon icon="fa-solid fa-baby"/>
      <br><br>
      <p1>
        Newborn babies are very special indeed and a joy to bring home. Sometimes it can be difficult to determine
        how to respond to their needs. <br><br> Did you know that there is a language that all babies speak and is
        universal through different cultures?<br><br> The sounds that your new born is making can help you identify
        what they are needing - Taking all of the guess work out of it. <br><br>
      </p1>
      <MainVideo></MainVideo>
      <Carousel></Carousel>
    </div>
    <div class="heading">
      <h1>WHAT SOUND IS YOUR BABY MAKING?</h1>
    </div>
    <!-- Listening Events    -->
    <MainButtons></MainButtons>
  </div>
</template>

<script>
// Script for the Carousel of baby sounds
import Carousel from "@/components/Carousel";
import MainButtons from "@/components/MainButtons";
import MainVideo from "@/components/MainVideo";

export default {
  name: "App",
  components: {
    MainVideo,
    MainButtons,
    Carousel,
  },
}
</script>
