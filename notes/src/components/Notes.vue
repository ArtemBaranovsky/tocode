<template>
    <!-- notes list -->
    <div class="notes">
        <div class="note" v-for="(note, index) in notes" :class="classObject(note)" :key="index">
            <div class="note-header" :class="{ full: ! grid }">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>

            <div class="note-body">
                <p>{{ note.descr }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
  	removeNote (index) {
      console.log(`Note id - ${index} removed`)
      this.$emit('remove', index)
      // TODO
    },
    noteColor (priority) {
        let colors = {
          'simple' : 'green',
          'important' : 'yellow',
          'very important' : 'red'
        }

        return colors[priority]
    },
    classObject(note) {
        return {
            full: ! this.grid,
            'text-primary' : this.noteColor(note.priority) === 'green',
            'text-warning' : this.noteColor(note.priority) === 'yellow',
            'text-danger' : this.noteColor(note.priority) === 'red',
        }
    }
  }
}
</script>

<style lang="scss">
  .notes {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 40px 0;
  }
  .note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    &:hover {
      box-shadow: 0 30px 30px rgba(0,0,0,.04);
      transform: translate(0,-6px);
      transition-delay: 0s !important;
    }
    &.full {
      width: 100%;
      text-align: center;
    }
    &.text-primary {
        background-color: #3dff5c;
    }
    &.text-warning {
        background-color: #fffd14;
    }
    &.text-danger {
        background-color: #ff22da;
    }
  }
  .note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 32px;
    }
    p {
      color: #091199;
      font-size: 22px;
    }
    img, svg {
      margin-right: 12px;
      color: #999999;
      cursor: pointer;
      &.active {
        color: #091199;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &.full {
      justify-content: center;
      p {
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .note-body {
    p {
      margin: 20px 0;
    }
    span {
      font-size: 14px;
      color: #999999;
    }
  }
</style>