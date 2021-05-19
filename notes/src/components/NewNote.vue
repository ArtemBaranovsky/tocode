<template>
    <!-- new note -->
    <div class="new-note">
        <label>Title</label>
        <input v-model="note.title" type="text">
        <label>Description</label>
        <textarea v-model="note.descr" rows="" cols=""></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
export default {
    name: "NewNote",
    props: {
        note: {
            type: Object,
            request: true
        }
    },
    methods: {
    	addNote() {
    		this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">
    .new-note {
        text-align: center;
    }
</style>