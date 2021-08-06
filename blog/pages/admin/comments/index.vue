<template>
  <comment-table :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hide</span>
        </td>
        <td><span @click="changeComment(comment.id)" class="link">Change Status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
  </comment-table>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable.vue";

export default {
  name: "index",
  components: { commentTable },
  layout: 'admin',
  data() {
    return {
      comments: [
        { id: 1, name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?', status: true },
        { id: 2, name: 'Evgenij', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?', status: false },
      ]
    }
  },
  methods: {
    changeComment (id) {
      console.log(`Change comment id - ${id}`)
    },
    deleteComment (id) {
      console.log(`Delete comment id - ${id}`)
    }
  }
}
</script>

<style scoped>

</style>
