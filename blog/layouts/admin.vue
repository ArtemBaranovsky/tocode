<template>
  <div class="wrapper">
    <Header />

    <!--content-->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin page">
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
      </Intro>
      <nuxt />
    </div>

  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  name: "admin",
  components: { Header }
}
</script>
