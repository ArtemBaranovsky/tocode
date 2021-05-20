<template>
    <modal
        title="Modal with form + Validate"
        @close="$emit('close')">
        <!-- body-->
        <div slot="body">
            <form @submit.prevent="">
                <label>Name:</label>
                <input type="text" required>
                <label>Email:</label>
                <input type="email" required>
                <button class="btn btnPrimary">Submit!</button>
            </form>
        </div>
    </modal>
</template>

<script>
import modal from '@/components/UI/Modal'
export default {
  name: "ModalValidate",
  components: {
    modal
  }
}
</script>

<style scoped>

</style>