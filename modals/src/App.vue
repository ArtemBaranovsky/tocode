<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = ! modalFirst">Show first modal</button>

          <!-- First modal -->
          <modals
              title="First modal"
              v-show="modalFirst"
              @close="modalFirst = ! modalFirst"
          >
            <div slot="body">
              <p>Test text.</p>
              <button class="btn btnPrimary" @click="modalFirst = ! modalFirst">Well done!!!</button>
            </div>

<!--            <div slot="footer">-->
<!--              <p>Footer</p>-->
<!--            </div>-->
          </modals>
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