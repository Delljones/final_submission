<template>
  <div class="homepage">
    <div class="heading">
      <h1>Welcome to the Baby Translator</h1>
      <h2>Everything you need to understand your baby</h2>
     =
    </div>

    <Carousel></Carousel>

    <!-- Listening Events    -->
    <div class="main-buttons">
      <button>Heh </button>
      <button>submit</button>
      <button>submit</button>
      <button>submit</button>
    </div>

    <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>


    <div class="bg-image hover-zoom" id="images">
      <img src="https://mdbootstrap.com/img/new/standard/city/053.webp" class="w-50"/>
      <img src="https://mdbootstrap.com/img/new/standard/city/053.webp" class="w-50"/>
      <img src="https://mdbootstrap.com/img/new/standard/city/053.webp" class="w-50"/>
      <img src="https://mdbootstrap.com/img/new/standard/city/053.webp" class="w-50"/>
    </div>
    </div>


</template>

<style>

</style>

<script>
// Script for the Carousel of baby sounds
import Carousel from "@/components/Carousel";
export default {
  components: {Carousel}
}


</script>