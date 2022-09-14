<!--from https://ismail9k.github.io/vue3-carousel/getting-started.html-->

<template>
  <Carousel :items-to-show="2" :wrap-around="false">
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


img {
  height: 100%;
}

.slide {
  min-height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;


}


</style>