<template>
    <section id="main" style="text-align:center;">
        <div class="container">
            <h1>Webpack message: {{ message }}</h1>
        </div>
    </section>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      message : null
    }
  },
  created() {
  	// this.message = 'hello component'
  	this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>