<template>
  <div class="feed">
    <BlogArticle
        title="Sleeping Through the Night"
        subtitle="How to get a good sleep"
        content="Lorem LoremLoremLorem  "
        published-date= "03 September 2022"
        description="This is the Description"
    ></BlogArticle>
    <BlogArticle
        title="Growing Up"
        subtitle="How to get a good sleep"
        content="All Text All Text All Text All Text All Text All Text All Text All Text All Text All Text  "
        published-date= "15 September 2022"
        description="Description of how to get a good sleep"
    ></BlogArticle>
    <BlogArticle
        title="Sleeping Through the Night"
        subtitle="How to get a good sleep"
        content="Lorem LoremLoremLorem  "
        published-date= "03 September 2022"
        description="This is the Description"
    ></BlogArticle>
  </div>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
export default {
  name: "BlogFeed.vue",
  components: {BlogArticle},
  data() {
    return {
      posts: [],
      transition: 'preview-appear'
    }
  },
}
</script>

<style scoped>

.feed {
  display: inline-flex;
  position: static;
  align-items: inherit;


}

</style>