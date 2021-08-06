<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Description:</AppInput>
        <AppInput v-model="post.img">Image Link:</AppInput>
        <AppTextArea v-model="post.content">Content:</AppTextArea>

      <!--buttons-->
      <div class="controls">
        <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
        <AppButton @click="onSubmit">Save</AppButton>
      </div>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "newPostForm",
  data() {
    return {
      post: {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    cancel () {
      this.$router.push('/admin/')
    },
    onSubmit() {
      this.$emit('submit', this.post)
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>
