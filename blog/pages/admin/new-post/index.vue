<template>
  <new-post-form @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/newPostForm.vue'

export default {
  name: "index",
  components: { newPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post added!')
      console.log(post);
    }
  }
}
</script>

<style scoped>

</style>
