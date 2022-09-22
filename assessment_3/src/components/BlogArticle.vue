<template>
  <div class="new-post">
    <div class="all-content">
      <div class="title"> <h1>{{ title }} </h1></div>
      <div class="subtitle"> <h2>{{ subtitle }}</h2></div>
      <div class="content">{{ content }}</div>
      <div class="published-date">Publish Date {{ publishedDate }}</div>
      <div class="description">#{{ description }}</div>
    </div>


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

button {
  align-items: center;
  position: relative;
  display: flex;
  margin-left: 12cm;
  height: 2cm;

}

.content {
  text-align: center;
  padding: 0.5cm;
  margin-bottom: 2cm;

}

p {
  text-align: center;
  padding: 0.5cm;
  margin-bottom: 0.3cm;
}

h1 {
  margin-bottom: 0.54cm;
  background: #b393d3;
}

h2 {
  text-align: center ;
  margin-bottom: 0.5cm;
  color: #fad4c0;
}
.new-post {
  display: block;
  justify-items: center;
  align-items: center;
  border: #2c3e50 2pt solid;
  border-radius: 30px;
  padding: 0.5cm;
  margin: 2cm auto 0.5cm;
  overflow-x: hidden;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  width: 100%;

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