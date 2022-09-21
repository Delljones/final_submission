<template>
  <!--  Implementing media to display on the home page to introduce the subject-->
  <div class="content">
    <h1> Watch the Video</h1>
  <!--    Code from standard Youtube inbed -->
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
  font-weight: bold;
  margin-bottom: 1cm;
  text-decoration: underline;
  font-family: 'Font Awesome 6 Pro', 'Font Awesome 6 Free'
}

iframe {
  margin-bottom: 3cm;
}

</style>