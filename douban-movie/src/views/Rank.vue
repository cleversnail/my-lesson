<template>
  <div class="rank">
    <ScrollView :data="movieList">
      <Card 
        v-for="(movie, index) in movieList" 
        :key="movie._id"
        :movie="movie"
        :sort="index + 1"
      ></Card>
    </ScrollView>
    <div class="loading-wrap" v-show="!movieList.length">
      <Loading/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movieList: []
    }
  },
  created() {
    this.getMovieList()
  },
  methods: {
    getMovieList () {
      this.$axios.get('/api/api/movie/get_rank')
        .then(res => {
          console.log(res)
          this.movieList = res.result.movies
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>