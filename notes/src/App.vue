<template>
  <div class="wrapper">
    
    <!-- <header></header> -->

    <div class="wrapper-content">
      <section>

        <div class="container">
            <h1>{{ title }}</h1>

            <div class="message" v-if="message">
                <p>{{ message }}</p>
            </div>

            <!-- new note -->
            <div class="new-note">
                <input v-model="note.title" type="text">
                <textarea v-model="note.descr" rows="" cols=""></textarea>
                <button @click="addNote">New note</button>
            </div>

            <!-- notes list -->
            <div class="notes" v-for="(note, index) in notes" :key="index">
                <div class="note-header">
                    <p>{{ note.title }}</p>
                </div>
    
                <div class="note-body">
                    <p>{{ note.descr }}</p>
                    <span>{{ note.date }}</span>
                </div>
            </div>
        </div>

      </section>
    </div>

    <!-- <footer></footer> -->
  
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
