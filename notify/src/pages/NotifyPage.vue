<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- wrapper -->
        <div class="notify__wrapper">

          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
            <!-- svg -->
            <img @click="getNotifyLazy" src="@/assets/reload.svg" alt="reload">
          </div>

          <!-- preloader -->
          <preloader v-if="loading" :width="90" :height="90"/>

          <!-- error -->
          <div class="error" v-if="error">
            <p>{{ error }}</p>
          </div>

          <!-- notify -->
          <div class="notify__content">
            <notify
              v-if="!loading && !error"
              :messages="messages"/>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import notify from '@/components/Notify.vue'
// UI
import preloader from '@/components/UI/Preloader.vue'
export default {
  components: { notify, preloader },
  mounted() {
    this.setNotify()
  },
  computed: {
    loading () { return this.$store.getters.getLoading },
    error () { return this.$store.getters.getError },
    messages () {
      return this.$store.getters.getMessageMain
    },
    getNotifyLazy () {
      this.$store.getters.setNotifyLazy
      return this.$store.getters.getMessage
    }
  },
  methods: {
    setNotify() {
      this.$store.dispatch('setNotify')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.notify__wrapper {
  width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-right: 16px;
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}

.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.notify-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
  }
}

</style>