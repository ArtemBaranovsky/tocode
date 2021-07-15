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
            <img src="@/assets/reload.svg" alt="reload">
          </div>

          <!-- preloader -->
          <preloader v-if="loading" :width="90" :height="90"/>

          <!-- notify -->
          <div class="notify__content">
            <notify
              v-if="!loading"
              :messages="messages"/>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import notify from '@/components/Notify.vue'
// UI
import preloader from '@/components/UI/Preloader.vue'
export default {
  components: { notify, preloader },
  data () {
    return {
      loading: false,
      messages: [
        // { title: 'message 1' },
        // { title: 'message 2' },
        // { title: 'message 3' },
        // { title: 'message 4' },
        // { title: 'message 5' },
        // { title: 'message 6' },
      ]
    }
  },
  mounted() {
    this.getNotify()
  },
  methods: {
    getNotifyLazy() {
      this.loading = true
      setTimeout(() => {
        this.getNotify()
      }, 2000)
    },
    getNotify() {
    this.loading = true
      axios
        // .get("https://tocode.ru/static/c/vue-pro/notifyApi.php")
        .get("https://tocode.ru/static/_secret/courses/1/notifyApi.php")
        .then(response => {
          this.messages = response.data.notify
        })
        .catch(error => {
          console.log(error);
        })
        .finally( () =>  { this.loading = false })
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
  p {
    font-size: 24px;
  }
}

</style>