<template>
  <div class="blog">
    <header>
      <h1>Welcome to Our Blog</h1>
    </header>
    <div class="feed">
      <BlogFeed></BlogFeed>
    </div>
  </div>
</template>

<script>
import BlogFeed from "@/components/BlogFeed";

export default {
  components: {BlogFeed}
}
</script>