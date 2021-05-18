<template>
    <div class="message">
        <p>Message component - {{ message }}</p>
    </div>

</template>

<script>
    export default {
      created () {
      },
        name: '',
        props: {
            message: {
                type: String,
                required: true,
                // default: 'default message'
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style>
    p {
        color: red;
    }

    .message {
        text-align: center;
        padding: 20px;
    }
</style>