<template>
  <new-post-form
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/newPostForm.vue'
import axios from "axios"

export default {
  name: "index",
  components: { newPostForm },
  layout: 'admin',
  asyncData(context) {
    return axios.get(`https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`)
      .then( res => {
        return {
          post: { ...res.data, id: context.params.postId }
        }
      })
    .catch(e => context.error(e))
  },
  methods: {
    onSubmit(post) {
      console.log('Post editing!')
      // console.log(post);
      this.$store.dispatch('editPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
