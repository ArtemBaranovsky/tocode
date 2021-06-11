<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <header>
        <div style="display: flex;  flex-direction: column;  margin: 0 auto;">
          <ul style="display: inline-flex; margin: 0 0 0 auto;">
            <li><a href="#" @click="modalLogin">Login</a></li>
            <li><a href="#" @click="modalRegister">Register</a></li>
          </ul>
        </div>
      </header>

      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = ! modalFirst">Show first modal</button>

          <!-- First modal -->
          <modals
              title="First modal"
              v-show="modalFirst"
              @close="modalFirst = false"
          >
            <div slot="body">
              <p>Test text.</p>
              <button class="btn btnPrimary" @click="modalFirst = ! modalFirst">Well done!!!</button>
            </div>

<!--            <div slot="footer">-->
<!--              <p>Footer</p>-->
<!--            </div>-->
          </modals>

          <!-- Second modal -->
          <button class="btn btnPrimary" @click="modalSecond.show = ! modalSecond.show">Show modal with form</button>
          <modals
              title="Modal with form"
              v-show="modalSecond.show"
              @close="modalSecond.show = false"
          >
            <div slot="body">
              <form @submit.prevent="submitSecondForm" action="">
                <label>Name:</label>
                <input type="text" required v-model="modalSecond.name">
                <label>Email:</label>
                <input type="email" required v-model="modalSecond.email">
                <button class="btn btnPrimary">Submit</button>
              </form>
            </div>
          </modals>

            <!-- modal with validate -->
            <button class="btn btnPrimary" @click="modalValidate = ! modalValidate">Show modal with validation</button>
            <modalValidate v-show="modalValidate" @close="modalValidate = false" />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal'
import modalValidate from '@/components/ModalValidate'

export default {
  name: 'App',
  components: {
    modals, modalValidate
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false,
      modalLogin: false,
      modalRegister: false,
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>
<style>
  header li {
    margin-right: 40px;
  }
</style>