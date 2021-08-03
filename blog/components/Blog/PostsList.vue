<template>
  <section class="posts-list">
    <div class="container ">
      <div class="posts__wrapper">
        <post-preview
         v-for="post in posts"
         :key="post.id"
         :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview.vue'

export default {
  name: "PostsList",
  components: { postPreview },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.posts-list {

}

.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
