<template>
    <!-- new note -->
    <div class="new-note">
        <label>Priority</label>
        <select name="priority" v-model="selected">
            <option disabled value="">Выберите срочность</option>
            <option
                v-for="(priority, index) in priorities.values"
                v-bind:value="priority"
                :key="index"
            >
                {{ priority }}
            </option>
        </select>

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
        },
    },
	data() {
		return {
          selected: '',
          priorities: {
              values: ['simple', 'important', 'very important'],
              type: Array,
          },
		}
    },
    methods: {
    	addNote() {
            this.note.priority = this.selected
    		this.$emit('addNote', this.note)
            // TODO
        }
    },
  mounted() {
		console.log(this.priorities)
	}
}
</script>

<style lang="scss">
    .new-note {
        text-align: center;
        button {
            margin-top: 40px;
        }
    }
</style>