<template>
  <div class="new-post">
      <div class="all-content">
        <div class="title"><h1>{{ title }}</h1><br><br></div>
        <div class="subtitle"><h2>{{ subtitle }}</h2><br><br></div>
        <div class="content">{{ content }}<br><br></div>
        <div class="published-date">Publish Date {{ publishedDate }}<br><br></div>
        <div class="description">#{{ description }}<br><br></div>
      </div>
      <footer>
        <p>Click to read more </p>
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
  display: grid;
  justify-items: center;
  align-items: center;
  border: #2c3e50 2pt solid;
  border-radius: 30px;
  padding: 1cm;
  margin: 3cm 1cm 5cm;
  overflow-x: hidden;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  width: 100%;
}

.title .subtitle.content .published-date {
  text-align: center;
  font-weight: bold;
  font-size: 15pt;
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
  padding: 1cm;
}
</style>