<template>
  <div class="posts">
    <input type="text" v-model="postId">
    <button @click="loadPost">Get Posts</button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      postId: '',
    }
  },
  methods: {
    loadPost () {
      this.$router.push(`/posts/${this.postId}`)
    }
  }
}
</script>

<style scoped>

</style>
