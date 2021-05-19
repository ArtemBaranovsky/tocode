<template>
  <div class="wrapper">
    
    <!-- <header></header> -->

    <div class="wrapper-content">
      <section>

        <div class="container">
            <h1>{{ title }}</h1>

            <message  v-if="message" :message="message" />

            <!-- new note -->
            <new-note
                :note="note"
                @addNote="addNote"
            />

            <!-- notes list -->
            <notes
                :notes="notes"
            />
        </div>

      </section>
    </div>

    <!-- <footer></footer> -->
  
  </div>
</template>

<script>
import message from './components/Message'
// import message from '@/components/Message.vue'
import newNote from "./components/NewNote"
import notes from './components/Notes'
export default {
  name: 'App',
  components: {
    // Message,
    message,
    newNote,
    notes
  },
  data() {
    return {
      title: 'Notes App',
      message: null,
      note: {
          title: '',
          descr: ''
      },
      notes: [
      	{
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          descr: 'Description for second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third Note',
          descr: 'Description for third note',
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
      addNote() {
          let { title, descr } = this.note

          if (title === '') {
              this.message = 'Title can\'t be blank!'
              return false
          }

          this.notes.push({
              title,
              descr,
              date: new Date(Date.now()).toLocaleString()
          })

          this.note.title = ''
          this.note.descr = ''
          this.message = null
      }
  },
}
</script>

<style>

</style>
