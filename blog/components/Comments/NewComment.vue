<template>
  <section class="new-comment">
    <div class="container">
<!--      <h2 class="title">New Comment!</h2>-->
      <form @submit.prevent="onSubmit" class="contact-form" action="">

        <app-input v-model="comment.name"> Name: </app-input>
        <app-text-area v-model="comment.text" > Text: </app-text-area>

        <!--        buttons-->
        <div class="controls">
<!--          <button class="btn btnPrimary">Submit</button>-->
          <app-button>Submit!</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

export default {
  name: "NewComment",
  components: { AppButton, AppInput, AppTextArea },
  data () {
    return {
      comment: {
        name: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.comment)
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
