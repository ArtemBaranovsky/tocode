<template>
  <new-post-form
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/Admin/newPostForm.vue'

export default {
  name: "index",
  components: { newPostForm },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: '1-st post',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?',
        img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg?__cf_chl_managed_tk__=pmd_0d44acf3b8e81474fe3a8a34e2f5bf7c875c4642-1627638228-0-gqNtZGzNAuKjcnBszQZO',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?'
      }
    }
  },
  methods: {
    onSubmit(post) {
      console.log('Post editing!')
      console.log(post);
    }
  }
}
</script>

<style scoped>

</style>
