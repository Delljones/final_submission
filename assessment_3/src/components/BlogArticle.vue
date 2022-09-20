<template>
  <div class="new-post">
      <div class="all-content">
        <div class="title">Title: {{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <div class="content">{{ content }}</div>
        <div class="published-date">Publish Date {{ publishedDate }}</div>
        <div class="description">#{{ description }}</div>
      </div>
      <footer>
        <h1>Click here for more information</h1>
      </footer>

  </div>
</template>
<script>
export default {
  name: "BlogArticle",
  props: {
    title: {type: String},
    subtitle: {type: String},
    content: {type: String},
    publishedDate: {type: Date},
    description: {type: String},
    data() {
      return {}
    }
  }
  };

</script>

<style scoped>

.new-post {
  display: block;
  justify-items: center;
  align-items: center;
  border: #2c3e50 2pt solid;
  border-radius: 30px;
  padding: 0.5cm;
  margin: 3cm auto 5cm;
  overflow-x: hidden;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  width: 100%;

}

.blog-image {
  margin-bottom: 2cm;
  margin-right: 2cm;
  position: center;
}

.title .subtitle.content .published-date {
  text-align: center;
}

.all-content {
  font-size: larger;
  margin-bottom: 1cm;
  font-weight: bolder;
  padding: 1cm;
}

footer {
  border-radius: 10px;
  border: 1pt solid gold;

}


</style>