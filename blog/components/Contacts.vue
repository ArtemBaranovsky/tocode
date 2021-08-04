<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form" action="">
        <App-input v-model="user.name"> Name: </App-input>
        <App-input v-model="user.email" type="email"> Email: </App-input>
        <App-text-area v-model="user.text" > Text: </App-text-area>
<!--        buttons-->

        <div class="controls">
          <AppButton class="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
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
