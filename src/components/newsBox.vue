<template>
  <div class='newsBox'>
    <span style="margin:-2vw;float:left;max-width:40%; max-height:21.5vw;min-width:40%; min-height:21.5vw;">
      <img :src="`${news.urlToImage}`" :alt="`${news.title}`" style="border:1px dashed white;max-width:100%; max-height:21.5vw;min-width:100%; min-height:21.5vw;">
    </span>
    <span style="float: right;max-width:60%; max-height:21.5vw;">
      <h3>{{news.title}}</h3>
      <p style='font-size:1.2em;font-weight:400'>{{news.description}}</p>
      <a style="text-decoration:none;color:white;background-color:black;padding:3px" :href="`${news.url}`">read full news</a>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  props: [ 'news' ]
}
</script>
<style lang="scss">
.newsBox{
  background-color: rgb(212, 143, 53);
  filter: drop-shadow(2px 2px 2px grey);
  border-bottom: 2px solid black;
  padding: 2vw;
  margin-bottom: 2vw;
  min-width: 90vw;
  max-width: 90vw;
  min-height: 21.5vw;
  max-height: 21.5vw;
  h3{
      color:black;
      font-weight: 900;
  }
}
</style>
