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

            <div class="note-header" style="margin: 36px 0;">
                <h1>{{ title }}</h1>

                <!-- search-->
                <p>{{ search }}</p>
                <search
                    :value="search"
                    @search="search = $event"
                    placeholder="Find your note"
                />

                <!-- icons control-->
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
                :notes="notesFilter"
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
// import message from '@/components/Message.vue'
import message from './components/Message'
import newNote from './components/NewNote'
import notes from './components/Notes'
import search from './components/Search'

export default {
  name: 'App',
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return {
      title: 'Notes App',
      message: null,
      search: '',
      grid: true,
      note: {
          title: '',
          descr: ''
      },
      notes: [
      	{
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'important'
        },
        {
          title: 'Second Note',
          descr: 'Description for second note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'very important'
        },
        {
          title: 'Third Note',
          descr: 'Description for third note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'simple'
        }
      ]
    }
  },
  computed: {
  	notesFilter () {
      let array = this.notes,
        search = this.search

      if (!search) return array

      search = search.trim().toLowerCase()
      array = array.filter(function (item) {
           if (item.title.toLowerCase().indexOf(search) !== -1) {
              return item
          }
      })

      return array
    }
  },
  methods: {
      addNote() {
          let { title, descr, priority } = this.note

          if (title === '') {
              this.message = 'Title can\'t be blank!'
              return false
          }

          this.notes.push({
              title,
              descr,
              date: new Date(Date.now()).toLocaleString(),
              priority
          })

          this.note.title = ''
          this.note.descr = ''
          this.note.priority = ''
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