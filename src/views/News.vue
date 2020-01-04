<template>
  <div class="news">
    <br>
    <h1>recent news</h1>
    <div class='articles'>
      <div v-for='(news,i) in allNews' :key=i>
        <news-container :news='news'></news-container>
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
      allNews: []
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
  }
}
</script>

<style>
.news{
  color: white;
  background-image: url('../../public/pics/news.jpg');
  background-position:center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.articles{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
  flex-direction: column;
}
</style>
