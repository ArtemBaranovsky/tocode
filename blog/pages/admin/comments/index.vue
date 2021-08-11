<template>
  <no-ssr>
    <comment-table :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td><span>{{ comment.name }}</span></td>
          <td><span>{{ comment.text }}</span></td>
          <td>
            <span v-if="comment.publish" class="status true">Publish</span>
            <span v-else class="status false">Hide</span>
          </td>
          <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
          <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
        </tr>
      </tbody>
    </comment-table>
  </no-ssr>
</template>

<script>
import axios from "axios"
import commentTable from "@/components/Admin/CommentTable.vue";

export default {
  name: "index",
  components: { commentTable },
  layout: 'admin',
  data() {
    return {
      comments: [
        // { id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?', status: true },
        // { id: 2, name: 'Evgenij', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?', status: false },
      ]
    }
  },
  mounted() {
    this.loadComments()
  },
  methods: {
    changeComment (comment) {
      // console.log(`Change comment id - ${id}`)
      comment.publish = !comment.publish
      axios
        .put(`https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)

    },
    deleteComment (id) {
      // console.log(`Delete comment id - ${id}`)
      axios
        .delete(`https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`)
      .then((res)=>{
        this.loadComments()
      })
    },
    loadComments () {
      axios
        .get('https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
        .then((res) => {
          let commentsArray = []
          Object.keys(res.data).forEach(key => {
            const comment = res.data[key]
            commentsArray.push({...comment, id: key})
          })

          this.comments = commentsArray
          // console.log(commentsArray);
        })
    }
  }
}
</script>

<style scoped>

</style>
