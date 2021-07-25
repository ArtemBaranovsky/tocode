<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- errors        -->
        <div class="error" v-if="error" style="margin-bottom: 15px;">
          <p>{{ error }}</p>
        </div>

        <!--user-->
        <div class="user">
          <p v-if="name">{{ name }}</p>
          <img v-if="avatar" :src="avatar"/>
          <p v-if="repos">Number of repositories: {{ repos.length }}</p>
        </div>

        <!-- search -->
        <search
        :value="search"
        placeholder="Type username..."
        @search="search = $event"/>

        <button v-if="!repos" class="btn btnPrimary" @click="getUserdata">Search!</button>
        <button v-else class="btn btnPrimary" @click="getUserdata">Search again!</button>

        <!-- wrapper-->
        <div class="repos__wrapper" v-if="repos">

          <!-- item-->
          <div class="repo-item" v-for="repo in repos" :key="repo.id">
            <div class="repo-info">
              <a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
              <span> {{ repo.stargazers_count }}⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import search from '@/components/Search.vue'
import axios from 'axios'

export default {
  components: { search },
  data () {
    return {
      search: '',
      repos: null,
      name: null,
      avatar: null,
      // TODO: add and display also name, avatar, number of repos
      // TODO: add repos and stars sorting
      // TODO: add pagination or loadmore for repos and stars
      error: null
    }
  },
  methods: {
    getUserdata() {
      this.getRepos()
      this.getAvatar()
      this.getName()
    },
    getRepos () {
      axios.get(`https://api.github.com/users/${this.search}/repos`)
      .then(res => {
        // console.log(res)
        this.error = null
        this.repos = res.data
      })
      .catch(err => {
        console.log(err)
        this.repos = null
        this.error = `Can't find this user`
      })

      // console.log(`get user ${this.search} repos`)
    },
    getAvatar () {
      axios.get(`https://api.github.com/users/${this.search}`)
      .then(res => {
        this.avatar = res.data.avatar_url
      })
      .catch(err => {
        console.log(err)
        this.avatar = null
      })
    },
    getName () {
      axios.get(`https://api.github.com/users/${this.search}`)
      .then(res => {
        this.name = res.data.name
      })
      .catch(err => {
        console.log(err)
        this.name = null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

button {
  margin-top: 40px;
}

.repos__wrapper {
  width: 400px;
  margin: 30px 0;
}

.repo-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

.repo-item {

}
</style>