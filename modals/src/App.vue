<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = ! modalFirst">Show first modal</button>

          <!-- First modal -->
          <modals
              title="First modal"
              v-if="modalFirst"
              @close="modalFirst = ! modalFirst"
          ></modals>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/components/Modal'

export default {
  name: 'My modals',
  components: {
    modals
  },
  data() {
    return {
      modalFirst: false
    }
  }
}
</script>