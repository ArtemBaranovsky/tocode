<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"></post>
    <comments :comments="comments"/>
    <newComment />
  </div>

</template>

<script>
import axios from "axios"

import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
  name: "index",
  components: { post, newComment, comments },
  async asyncData (context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
    ])

    return {
      post: post.data,
      comments: comments.data
    }
  }
  // data  () {
  //   return {
  //     post: {
  //       id: 1,
  //       title: '1-st post',
  //       descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?',
  //       img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg?__cf_chl_managed_tk__=pmd_0d44acf3b8e81474fe3a8a34e2f5bf7c875c4642-1627638228-0-gqNtZGzNAuKjcnBszQZO',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?'
  //     },
  //     comments: [
  //       { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?' },
  //       { name: 'Evgenij', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?' },
  //     ]
  //   }
  // }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px;
  }
  p {
    color: #999999;
  }
  .post-body {
    text-align: left;
  }
}
</style>
