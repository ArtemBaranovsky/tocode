<template>
  <div class="wrapper">
    
    <!-- <header></header> -->

    <div class="wrapper-content">
      <section>

        <div class="container">
            <message  v-if="message" :message="message" />

            <!-- new note -->
            <new-note
                :note="note"
                @addNote="addNote"
            />

            <div class="note-header">
                <h1>{{ title }}</h1>
                <div class="icons">
<!--                    <img :class="{ active: grid }" src="./assets/grid.svg" alt="">-->
<!--                    <img :class="{ active: ! grid }" src="./assets/column.svg" alt="">-->
                    <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>

                    <svg :class="{ active: ! grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3" y2="6"></line>
                        <line x1="3" y1="12" x2="3" y2="12"></line>
                        <line x1="3" y1="18" x2="3" y2="18"></line>
                    </svg>

                </div>
            </div>

            <!-- notes list -->
            <notes
                :notes="notes"
                :grid="grid"
                @remove="removeNote"
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
      ],
      grid: false
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
      },
      removeNote(index) {
          this.notes.splice(index, 1)
      }
  },
}
</script>

<style>

</style>
