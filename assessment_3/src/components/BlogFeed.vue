<template>
  <div class="feed">
    <BlogArticle
        title="Sleeping Through the Night"
        subtitle="How to get a good sleep"
        content="It is important for everybody in the household to get a good sleep - that includes you baby. make sure
        baby has a full tummy before bed and has a night routine that is adhered to each night."
        published-date= "03 September 2022"
        description="Sleep"
    ></BlogArticle>
    <BlogArticle
        title="Growing Up"
        subtitle="Every baby grows"
        content="Before you know it your little one is going to be grown up - Sometimes that can happen too fast and other times can be wished away.
        Whatever the pace remember to enjoy it. Do not worry about milestones each baby accelerates at their own rate "
        published-date= "10 September 2022"
        description="Growing"
    ></BlogArticle>
    <BlogArticle
        title="Read The Cues"
        subtitle="Youer baby may be trying to tell you something!"
        content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
        one of the more obscure Latin words, consecrate, from a Lorem Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubted source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "
        published-date= "15 September 2022"
        description="Cues"
    ></BlogArticle>
  </div>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
export default {
  name: "BlogFeed",
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
  display: grid;
  position: relative;
  align-items: inherit;
}
</style>