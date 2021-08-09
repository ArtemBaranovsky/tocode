<template>
  <section class="new-comment">
    <div class="container">
<!--      <h2 class="title">New Comment!</h2>-->

      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form" action="">

        <App-input v-model="comment.name"> Name: </App-input>
        <App-text-area v-model="comment.text" > Text: </App-text-area>

        <!-- buttons -->
        <div class="controls">
<!--          <button class="btn btnPrimary">Submit</button>-->
          <app-button>Submit!</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewComment",
  data () {
    return {
      message: null,
      comment: {
        name: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('addComment', {
        postId: '',
        publish: false,
        ...this.comment
      })
        .then(()=>{
          // console.log(this.comment)
          this.message = 'Submited!'
          // reset
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e => { console.log(e) })
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .controls {
    margin: 30px 0;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
}
</style>
