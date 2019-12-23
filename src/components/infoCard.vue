<template>
  <div class='box'>
    <h2 class='heading2'>{{ data.heading }}</h2> <br>
    <p>{{ data.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
.heading2{
  text-transform: uppercase;
  font-size: 2em;
  color:rgb(75, 17, 17);
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 1px solid rgb(238, 5, 5);
  box-shadow: 20px 20px 30px rgb(14, 163, 46);
  background-color: gold
}
.box{
  color:brown;
  background-color: aqua;
  opacity:1.1;
  text-align:justify;
  padding:10px;
  margin-left: 10vw;
  margin-right: 10vw;
  box-shadow: 10px 10px 20px rgb(14, 24, 163);
}
</style>
