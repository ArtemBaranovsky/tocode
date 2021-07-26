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

        <button v-if="!repos" class="btn btnPrimary" @click="setAll">Search!</button>
        <button v-else class="btn btnPrimary" @click="setAll">Search again!</button>

        <!-- wrapper-->
        <div class="repos__wrapper" v-if="repos">

          <!-- item-->
<!--          <div class="repo-item" v-for="repo in repos" :key="repo.id">-->
<!--            <div class="repo-info">-->
<!--              <a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>-->
<!--              <span> {{ repo.stargazers_count }}⭐</span>-->
<!--            </div>-->
<!--          </div>-->

          <table class="repo-info">
            <thead>
              <tr>
                <th>Repo's name</th>
                <th>Number of stars</th>
              </tr>
            </thead>

            <transition-group name="list" tag="tbody">
              <tr v-for="repo in reposSort" :key="repo.id">
                <td><a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a></td>
                <td style="text-align: center;"><span> {{ repo.stargazers_count }}⭐</span></td>
              </tr>
            </transition-group>

            <button
                class="btn btnPrimary"
                @click="loadMore"
                :disabled="maxLength === 0"
                :class="{ btnDisabled: maxLength === 0 }"
            >Load more</button>
          </table>

        </div>

      </div>

    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters,  mapActions, mapMutations } = createNamespacedHelpers('user');
import search from '@/components/Search.vue'
import axios from 'axios'

export default {
  components: { search },
  data () {
    return {
      search: '',
      repos: null,
      // reposMain: null,
      name: null,
      avatar: null,
      // + TODO: add and display also name, avatar, number of repos
      // TODO: add repos and stars sorting
      // TODO: add pagination or loadmore for repos and stars
      error: null,
      currentSort: 'name',
      currentSortDir: 'asc',
      page: {
        current: 1,
        length: 3
      }
    }
  },
  computed: {
    // ...mapGetters([
    //   'getRepos',
    //   'getReposFilter'
    // ]),
    ...mapGetters([
        'getReposFilter'
    ]),
/*    getReposFilter: {
      get(){
        return this.getReposFilter
      },
      set(payload){
        return payload
      }
    },*/
    maxLength() {
      console.log(this.$store.state);
      if (this.$store.state.reposMain) return this.$store.state.reposMain.length
      // if (this.$store.state.user.user) return this.$store.state.user.user.reposMain.reposMain.length
      // return this.$store.state.user.repos.length
    },
    reposMain() {
      return this.$store.state.reposMain
    },
    reposSort() {
      return this.repos.sort((a,b) => {
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
    ...mapMutations([
      'setUser', 'setRepos', 'loadRepos'
    ]),
    ...mapActions([
      'setUser', 'setRepos', 'loadRepos'
    ]),
    loadMore() {
      // logic
      this.$store.dispatch('user/loadRepos')
          .catch(err => { console.log(err) })
    },
    setAll() {
      this.setRepos()
      this.setUserdata()
    },
    setRepos () {
      axios.get(`https://api.github.com/users/${this.search}/repos`)
      .then(res => {
        // console.log(res)
        this.error = null
        this.repos = res.data
        for (let i = 0; i < 3; i++) {
          this.repos[i].main = true
        }

        this.$store.reposMain = this.repos.slice(0,3)
        // this.reposMain = this.repos.slice(0,3)
        if (this.$store.reposMain) {
          console.log(this.$store.reposMain)
          this.$store.dispatch('user/setRepos', { repos: this.$store.reposMain })
        }
      })
      .catch(err => {
        console.log(err)
        this.reposMain = null
        this.error = `Can't find this user`
      })
    },
    setUserdata () {
      axios.get(`https://api.github.com/users/${this.search}`)
      .then(res => {
        this.avatar = res.data.avatar_url
        this.name = res.data.name
        this.$store.dispatch('user/setUser', { name: this.name, avatar: this.avatar })
      })
      .catch(err => {
        console.log(err)
        this.avatar = null
        this.name = null
      })
    },
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
  //width: 400px;
  margin: 30px 0;
}

.repo-info {
  //display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}

.repo-item {

}
</style>