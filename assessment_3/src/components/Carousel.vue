<!--some code from https://ismail9k.github.io/vue3-carousel/getting-started.html I handled most of the implementation
 and changes to base code -->
<!--A Carousel feature that makes the photos move across the screen on the home page -->
<template>
  <Carousel :items-to-show="2" :autoplay="3000" :wrap-around="true">
    <Slide class="slide" v-for="slide in slides" :key="slide">
      <img :src="slide" alt="slide"/>
    </Slide>
    <template #addons>
      <Navigation/>
      <pagination/>
    </template>
  </Carousel>
</template>
<script>
import {Carousel, Navigation, Slide, Pagination} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import EH from '@/assests/EH.png';
import Neh from '@/assests/Neh.png';
import Eairgh from '@/assests/eairgh.png';
import Owh from '@/assests/Owh.png';
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    const slides = [
      EH,
      Neh,
      Eairgh,
      Owh,
    ];
    return {
      slides,
    };
  },
};
</script>
<style>
</style>