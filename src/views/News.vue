<template>
  <div class="news">
    <br>
    <h1>RECENT NEWS</h1>
    <div class='articles'>
      <div v-for='(news,i) in allNews' :key=i>
        <news-container :news='news'></news-container>
      </div>
      <div>
        <button @click="loadMore()">load more</button> <br><br>
      </div>
    </div>
  </div>
</template>

<script>
import newsBox from '../components/newsBox.vue'
export default {
  name: 'news',
  components: {
    'news-container': newsBox
  },
  data () {
    return {
      allNews: [],
      country: ['us', 'cn', 'ru', 'fr', 'kr', 'au', 'ca', 'tw', 'gb'],
      i: 0
    }
  },
  mounted: function () {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=4a6590ea9dc7457eaf1d8ad6f6751b60', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {
        this.allNews = data.articles
        console.log(this.allNews)
      })
  },
  methods: {
    loadMore () {
      let url = 'https://newsapi.org/v2/top-headlines?country=' + this.country[this.i] + '&category=science&apiKey=4a6590ea9dc7457eaf1d8ad6f6751b60'
      this.i += 1
      fetch(url, {
        method: 'get'
      })
        .then(response => response.json())
        .then(data => {
          this.allNews.push(...data.articles)
          console.log(this.allNews)
        })
    }
  }
}
</script>

<style lang='scss'>
.news{
  color: white;
  background-image: url('../../public/pics/news.jpg');
  background-position:center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 93.5vh;
  h1{
  background-color: gold;
  width: 100%;
  padding: 1vw;
  color:blue;
  border:2px solid brown;
  margin-bottom: 2vw;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  }
}
.articles{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
