<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!--table-->
        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <img :src="user.img" :alt="user.name">
                <span>{{ user.name }}</span>
              </td>
              <td> {{ user.age }} </td>
              <td> {{ user.gender }} </td>
            </tr>
          </tbody>

        </table>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: [  // only for example
      ]
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
</style>