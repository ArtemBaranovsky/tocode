<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!--table-->
        <table>

          <thead>
            <tr>
              <th @click="sort('name')">Name &#8595</th>
              <th @click="sort('age')">Age &#8595</th>
              <th @click="sort('gender')">Gender &#8595</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>
          </tbody>

        </table>

        <div style="text-align:center;">
          <span>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</span>
          <p>page: {{ this.page.current }}, length: {{ this.page.length }}</p>
        </div>
      </div>

<!--      buttons-->
      <section>
        <div class="container">
          <div class="button-list">
            <div class="btn btnPrimary" @click="prevPage">&#8592</div>
            <div class="btn btnPrimary" @click="nextPage">&#8594</div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: [  // only for example
      ],
      currentSort: 'name',
      currentSortDir: 'asc',
      page: {
        current: 1,
        length: 3
      }
    }
  },
  created() {
    axios
      .get('https://my-json-server.typicode.com/ArtemBaranovsky/users-api-server/users')
      .then(response => {
        this.users = response.data
        // console.log(response.data);
      })
      .catch(error => {
        this.$emit('error')
        console.log(error);
      })

    // this.users = [
    //   { id: 1, name: 'Jack', age: 22, gender: 'male' },
    //   { id: 2, name: 'Alex', age: 23, gender: 'male' }
    // ]
  },
  computed: {
    usersSort() {
      return this.users.sort((a,b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return  -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return  1 * mod
        return 0
      }).filter((row, index) => {
        let start = (this.page.current - 1) * this.page.length
        let end = this.page.current * this.page.length
        if (index >= start && index < end) return true
      })
    }
  },
  methods: {
    sort (event) {
      if (event === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = event
    },
    // pagination
    prevPage () {
      if (this.page.current > 1) this.page.current--
    },
    nextPage () {
      if ( (this.page.current * this.page.length) < this.users.length) this.page.current++
    },
  }
}
</script>

<style lang="scss">
img {
  width: 60px;
  height: auto;
  border-radius: 50%;
  margin-right: 16px !important;
}
.button-list {
  text-align: center;
  width: 100%;

  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}
</style>