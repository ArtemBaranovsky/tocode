<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:" />
    <Posts-list :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
