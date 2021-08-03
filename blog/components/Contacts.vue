<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form" action="">
        <app-input v-model="user.name"> Name: </app-input>
        <app-input v-model="user.email" type="email"> Email: </app-input>
        <app-text-area v-model="user.text" > Text: </app-text-area>
<!--        buttons-->

        <div class="controls">
          <AppButton class="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import message from '@/components/UI/Message.vue'
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

export default {
  name: "Contacts",
  components: { message, AppButton, AppInput, AppTextArea },
  data () {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.message = 'Submited!'
      console.log(this.user)

      // reset
      this.user.name = ''
      this.user.email = ''
      this.user.text = ''
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4b40e3;
  color: #ffffff;
  .title {
    color: #ffffff;
  }
  .controls {
    margin: 30px 0;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
}
</style>
