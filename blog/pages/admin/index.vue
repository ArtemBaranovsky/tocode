<template>
  <Posts-list :admin=true :posts="postsLoaded" />
</template>

<script>
export default {
  name: "index.vue",
  layout: 'admin',
  mounted() {
    this.$store.dispatch('nuxtServerInit');
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded;
    }
  }
}
</script>
