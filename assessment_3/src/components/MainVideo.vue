<template>
 <div class="content">
   <h1> Watch the Video</h1>
   <iframe width="1000" height="500"
           src="https://www.youtube.com/embed/afMNp6Q4u7s"
           title="YouTube video player"
           allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>
 </div>

</template>

<script>

export default {
  name: "MainVideo"
}
</script>

<style scoped>
h1 {
  text-align: center;
  position: center;
}
iframe {
  margin: 1cm 3cm 2cm 5cm;
}
</style>